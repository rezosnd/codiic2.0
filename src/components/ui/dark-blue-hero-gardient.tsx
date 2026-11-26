// GradientBackground — "Dark Blue Hero gardient", made with the 21st.dev Gradient
// Builder and exported as live CSS (the builder's own Copy-CSS background,
// plus its soften-blur and grain passes). Zero dependencies: one <div> that
// fills its parent. Drop it behind your content:
// <div className="relative h-96"><GradientBackground className="absolute inset-0" /></div>
// Remix the source recipe (colors, mode, finish) in the editor:
// https://21st.dev/community/gradients/editor?from=52d59681-b4e1-4465-b64c-6958fe62021f
export function GradientBackground({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={className}
      style={{
        position: "relative",
        overflow: "hidden",
        width: "100%",
        height: "100%",
        containerType: "size",
      }}
    >
      <div
        style={{
          position: "absolute",
        inset: "-6.2cqmin",
        filter: "blur(3.1cqmin)",
        backgroundColor: "#F7F4EC",
        backgroundImage:
          "url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='120' height='120'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.175'/></svg>\"), radial-gradient(circle at 50% 50%, rgba(0, 0, 0, 0) 52%, rgba(0, 0, 0, 0.168) 100%), radial-gradient(116% 69% at 50% 100%, #474747 0.0%, #242424 20.4%, #000000 41.1%, #004067 61.8%, #000000 82.5%, rgba(0, 0, 0, 0) 86.1%), radial-gradient(48.72% 26.22% at 50% 100%, rgba(113, 113, 113, 0.34559999999999996) 0%, rgba(36, 36, 36, 0.13440000000000002) 38%, rgba(36, 36, 36, 0) 72%), radial-gradient(61.48% 40.02% at 50% 100%, rgba(0, 0, 0, 0.1248) 0%, rgba(0, 0, 0, 0) 80%)",
        backgroundSize: "120px 120px, auto, auto, auto, auto",
        backgroundBlendMode: "overlay, normal, normal, normal, normal",
        }}
      />
      <svg
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          opacity: 0.175,
          mixBlendMode: "overlay",
        }}
      >
        <filter id="grain-52d59681">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.8"
            numOctaves="2"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#grain-52d59681)" />
      </svg>
    </div>
  )
}
