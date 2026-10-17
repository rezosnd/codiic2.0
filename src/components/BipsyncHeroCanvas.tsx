"use client";

import React, { useEffect, useRef } from "react";

interface BipsyncHeroCanvasProps {
  className?: string;
  theme?: "light" | "dark";
}

export const BipsyncHeroCanvas: React.FC<BipsyncHeroCanvasProps> = ({
  className = "absolute inset-0 pointer-events-none overflow-hidden",
  theme = "light",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number | null = null;
    let isVisible = true;
    let width = 0;
    let height = 0;

    // Mouse tracking in screen space & 3D ground coordinates
    const mouse = {
      screenX: -1000,
      screenY: -1000,
      worldX: 0,
      worldZ: 400,
      targetWorldX: 0,
      targetWorldZ: 400,
      influenceRadius: 320,
    };

    // Camera perspective: positioned to fill the screen behind headline
    const camera = {
      fov: 460,
      camHeight: 180,
      camDist: 110,
      horizonRatio: 0.14,
      yaw: 0,
      targetYaw: 0,
    };

    // 3D Hexagon Tile parameters - optimized count for 120 FPS performance
    const hexRadius = 56;
    const hexExtrusion = 20;
    const bevel = 5;
    const innerRadius = hexRadius - bevel;

    interface Tile3D {
      q: number;
      r: number;
      worldX: number;
      worldZ: number;
      elevation: number;
      targetElevation: number;
      phase: number;
    }

    let tiles: Tile3D[] = [];

    // Build the Honeycomb Terrain Field (ordered back-to-front so no per-frame sort needed!)
    const buildHexGrid = () => {
      tiles = [];
      const cols = 15;
      const rows = 9;

      // Ordered from back (highest r) to front (lowest r) for painter's algorithm
      for (let r = rows - 1; r >= 0; r--) {
        const rowOffset = r % 2 === 0 ? 0 : (hexRadius * Math.sqrt(3)) / 2;
        for (let c = -Math.floor(cols / 2); c <= Math.floor(cols / 2); c++) {
          const wx = c * (hexRadius * Math.sqrt(3)) + rowOffset;
          const wz = 60 + r * (hexRadius * 1.55);
          const dist = Math.sqrt(wx * wx + wz * wz);

          tiles.push({
            q: c,
            r,
            worldX: wx,
            worldZ: wz,
            elevation: 0,
            targetElevation: 0,
            phase: dist * 0.005,
          });
        }
      }
    };

    // Resize handler with clamped DPR (max 1.5 to guarantee buttery smooth 60-120fps)
    const handleResize = () => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);

      width = rect.width || window.innerWidth || 1280;
      height = rect.height || (canvas.parentElement?.offsetHeight || 800);

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);

      ctx.resetTransform();
      ctx.scale(dpr, dpr);

      buildHexGrid();
    };

    handleResize();
    window.addEventListener("resize", handleResize, { passive: true });

    // Decoupled mouse listener - avoids layout queries and heavy calculations on event
    const handleMouseMove = (e: MouseEvent) => {
      if (!isVisible) return;
      mouse.screenX = e.clientX;
      mouse.screenY = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // Verified 3D Projection to 2D Screen Coordinates
    const project3D = (wx: number, wy: number, wz: number, cosYaw: number, sinYaw: number) => {
      const rotX = wx * cosYaw - wz * sinYaw;
      const rotZ = wx * sinYaw + wz * cosYaw;

      const relY = camera.camHeight - wy;
      const relZ = rotZ + camera.camDist;

      if (relZ <= 10) return null;

      const scale = camera.fov / relZ;
      const sx = width / 2 + rotX * scale;
      const sy = height * camera.horizonRatio + relY * scale;

      return { x: sx, y: sy, scale };
    };

    let time = 0;

    // Animation Render Loop
    const render = () => {
      if (!isVisible) return;

      if (width > 0 && height > 0) {
        time += 0.02;

        // Process mouse coordinate mapping once per frame
        if (mouse.screenX > -500) {
          const normX = (mouse.screenX - width / 2) / (width / 2);
          const normY = Math.max(0, (mouse.screenY - height * camera.horizonRatio) / (height * (1 - camera.horizonRatio)));
          camera.targetYaw = normX * 0.07;
          mouse.targetWorldX = normX * 500;
          mouse.targetWorldZ = 60 + normY * 700;
        }

        // Smooth camera & mouse interpolation
        camera.yaw += (camera.targetYaw - camera.yaw) * 0.08;
        mouse.worldX += (mouse.targetWorldX - mouse.worldX) * 0.12;
        mouse.worldZ += (mouse.targetWorldZ - mouse.worldZ) * 0.12;

        const cosYaw = Math.cos(camera.yaw);
        const sinYaw = Math.sin(camera.yaw);

        // Clear canvas
        ctx.clearRect(0, 0, width, height);

        // Render back-to-front pre-ordered tiles (Zero array sorting overhead!)
        const tileCount = tiles.length;
        for (let i = 0; i < tileCount; i++) {
          const tile = tiles[i];

          // 3D Distance to cursor on ground plane
          const dx = tile.worldX - mouse.worldX;
          const dz = tile.worldZ - mouse.worldZ;
          const distToMouse = Math.sqrt(dx * dx + dz * dz);

          // Bipsync-style interactive cursor elevation wave
          let mouseFactor = 0;
          if (distToMouse < mouse.influenceRadius) {
            const norm = 1 - distToMouse / mouse.influenceRadius;
            mouseFactor = norm * norm;
          }

          // Gentle ambient breathing ripples
          const ambient = Math.sin(time + tile.phase) * 5;

          // Target height: lifts up by up to 55px when cursor is near
          tile.targetElevation = mouseFactor * 55 + ambient;
          tile.elevation += (tile.targetElevation - tile.elevation) * 0.15;

          const centerProj = project3D(tile.worldX, tile.elevation, tile.worldZ, cosYaw, sinYaw);
          if (!centerProj) continue;

          // Viewport clipping check
          if (
            centerProj.x < -120 ||
            centerProj.x > width + 120 ||
            centerProj.y < height * camera.horizonRatio - 60 ||
            centerProj.y > height + 160
          ) {
            continue;
          }

          // Specular glow highlight factor
          const glowFactor = Math.max(0, 1 - distToMouse / mouse.influenceRadius);

          // Calculate 6 corners of outer & inner hexagon
          const outerTopPts: { x: number; y: number }[] = [];
          const outerBasePts: { x: number; y: number }[] = [];
          const innerTopPts: { x: number; y: number }[] = [];

          let valid = true;
          for (let j = 0; j < 6; j++) {
            const angle = (Math.PI / 3) * j - Math.PI / 6;
            const cosA = Math.cos(angle);
            const sinA = Math.sin(angle);

            // Outer bevel rim
            const ox = tile.worldX + hexRadius * cosA;
            const oz = tile.worldZ + hexRadius * sinA;
            const pOuterTop = project3D(ox, tile.elevation - bevel, oz, cosYaw, sinYaw);
            const pOuterBase = project3D(ox, tile.elevation - hexExtrusion, oz, cosYaw, sinYaw);

            // Inner flat top face
            const ix = tile.worldX + innerRadius * cosA;
            const iz = tile.worldZ + innerRadius * sinA;
            const pInnerTop = project3D(ix, tile.elevation, iz, cosYaw, sinYaw);

            if (!pOuterTop || !pOuterBase || !pInnerTop) {
              valid = false;
              break;
            }

            outerTopPts.push(pOuterTop);
            outerBasePts.push(pOuterBase);
            innerTopPts.push(pInnerTop);
          }

          if (!valid) continue;

          // --- Draw 3D Side Walls ---
          for (let j = 0; j < 6; j++) {
            const next = (j + 1) % 6;
            const edgeDX = outerTopPts[next].x - outerTopPts[j].x;
            const edgeDY = outerTopPts[next].y - outerTopPts[j].y;
            const toBaseX = outerBasePts[j].x - outerTopPts[j].x;
            const toBaseY = outerBasePts[j].y - outerTopPts[j].y;
            const cross = edgeDX * toBaseY - edgeDY * toBaseX;

            if (cross > 0) {
              ctx.beginPath();
              ctx.moveTo(outerTopPts[j].x, outerTopPts[j].y);
              ctx.lineTo(outerTopPts[next].x, outerTopPts[next].y);
              ctx.lineTo(outerBasePts[next].x, outerBasePts[next].y);
              ctx.lineTo(outerBasePts[j].x, outerBasePts[j].y);
              ctx.closePath();

              const sideShade = 0.35 + (j % 2) * 0.15;
              if (theme === "light") {
                ctx.fillStyle = `rgba(0, 80, 52, ${0.4 + sideShade * 0.15})`;
                ctx.strokeStyle = "rgba(0, 140, 90, 0.25)";
              } else {
                ctx.fillStyle = `rgba(1, 26, 17, ${0.85 + sideShade * 0.1})`;
                ctx.strokeStyle = "rgba(0, 184, 121, 0.2)";
              }
              ctx.fill();
              ctx.lineWidth = 0.6;
              ctx.stroke();
            }
          }

          // --- Draw Beveled Chamfer Rim ---
          for (let j = 0; j < 6; j++) {
            const next = (j + 1) % 6;
            ctx.beginPath();
            ctx.moveTo(innerTopPts[j].x, innerTopPts[j].y);
            ctx.lineTo(innerTopPts[next].x, innerTopPts[next].y);
            ctx.lineTo(outerTopPts[next].x, outerTopPts[next].y);
            ctx.lineTo(outerTopPts[j].x, outerTopPts[j].y);
            ctx.closePath();

            const rimGleam = Math.max(
              0.1,
              Math.sin(j * 1.1 + time * 0.5) * 0.25 + 0.35 + glowFactor * 0.5
            );

            if (theme === "light") {
              ctx.fillStyle = `rgba(0, ${Math.round(170 + rimGleam * 85)}, ${Math.round(
                120 + rimGleam * 65
              )}, ${0.6 + rimGleam * 0.35})`;
              ctx.strokeStyle = `rgba(0, 184, 121, ${0.45 + glowFactor * 0.45})`;
            } else {
              ctx.fillStyle = `rgba(0, ${Math.round(150 + rimGleam * 105)}, ${Math.round(
                95 + rimGleam * 75
              )}, ${0.45 + rimGleam * 0.45})`;
              ctx.strokeStyle = `rgba(56, 225, 155, ${0.3 + glowFactor * 0.6})`;
            }
            ctx.fill();
            ctx.lineWidth = 0.8 + glowFactor * 0.6;
            ctx.stroke();
          }

          // --- Draw Inner Flat Top Face (Fast zero-allocation direct color fills) ---
          ctx.beginPath();
          ctx.moveTo(innerTopPts[0].x, innerTopPts[0].y);
          for (let j = 1; j < 6; j++) {
            ctx.lineTo(innerTopPts[j].x, innerTopPts[j].y);
          }
          ctx.closePath();

          if (theme === "light") {
            ctx.fillStyle = glowFactor > 0.08
              ? `rgba(180, 245, 222, ${0.92 + glowFactor * 0.08})`
              : "rgba(215, 242, 230, 0.86)";
            ctx.strokeStyle = `rgba(0, 140, 90, ${0.3 + glowFactor * 0.5})`;
          } else {
            ctx.fillStyle = glowFactor > 0.08
              ? `rgba(0, 184, 121, ${0.45 + glowFactor * 0.45})`
              : "rgba(0, 85, 55, 0.52)";
            ctx.strokeStyle = `rgba(56, 225, 155, ${0.25 + glowFactor * 0.65})`;
          }

          ctx.fill();
          ctx.lineWidth = 0.8;
          ctx.stroke();

          // Sparkle node at vertex when highlighted
          if (glowFactor > 0.12) {
            ctx.beginPath();
            ctx.arc(innerTopPts[0].x, innerTopPts[0].y, 2 + glowFactor * 2, 0, Math.PI * 2);
            ctx.fillStyle =
              theme === "light"
                ? `rgba(0, 140, 90, ${0.85 * glowFactor})`
                : `rgba(255, 255, 255, ${0.85 * glowFactor})`;
            ctx.fill();
          }
        }
      }

      animId = requestAnimationFrame(render);
    };

    // IntersectionObserver: PAUSE rendering completely when Hero is off-screen!
    const observer = new IntersectionObserver(
      ([entry]) => {
        const wasVisible = isVisible;
        isVisible = entry.isIntersecting;

        if (isVisible && !wasVisible) {
          // Resuming render loop
          if (!animId) {
            animId = requestAnimationFrame(render);
          }
        } else if (!isVisible && animId) {
          // Pausing render loop (0% GPU & CPU usage!)
          cancelAnimationFrame(animId);
          animId = null;
        }
      },
      { threshold: 0.02 }
    );

    observer.observe(container);

    // Initial start
    animId = requestAnimationFrame(render);

    return () => {
      if (animId) cancelAnimationFrame(animId);
      observer.disconnect();
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [theme]);

  return (
    <div ref={containerRef} className={className} aria-hidden="true">
      <canvas ref={canvasRef} className="block w-full h-full pointer-events-none" />
    </div>
  );
};
