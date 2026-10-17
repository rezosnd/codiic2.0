Add-Type -AssemblyName System.Drawing

$workspace = "d:\CODIIC2.0"
$srcPath = Join-Path $workspace "public\logo_withot text.png"

if (-not (Test-Path $srcPath)) {
    Write-Error "Source image not found: $srcPath"
    exit 1
}

$src = [System.Drawing.Bitmap]::FromFile($srcPath)
Write-Host "Loaded source image: $($src.Width)x$($src.Height)"

function Create-SquareIcon($srcBitmap, $size) {
    $dest = New-Object System.Drawing.Bitmap $size, $size
    $g = [System.Drawing.Graphics]::FromImage($dest)
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    $g.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
    $g.Clear([System.Drawing.Color]::Transparent)

    $ratio = [Math]::Min($size / $srcBitmap.Width, $size / $srcBitmap.Height)
    $drawW = [int]($srcBitmap.Width * $ratio)
    $drawH = [int]($srcBitmap.Height * $ratio)
    $drawX = [int](($size - $drawW) / 2)
    $drawY = [int](($size - $drawH) / 2)

    $g.DrawImage($srcBitmap, $drawX, $drawY, $drawW, $drawH)
    $g.Dispose()
    return $dest
}

# 1. Generate 512x512 PNG for high-res web icon
$icon512 = Create-SquareIcon $src 512
$icon512.Save((Join-Path $workspace "public\codiic-icon.png"), [System.Drawing.Imaging.ImageFormat]::Png)
$icon512.Save((Join-Path $workspace "src\app\icon.png"), [System.Drawing.Imaging.ImageFormat]::Png)
Write-Host "Generated public\codiic-icon.png and src\app\icon.png (512x512)"

# 2. Generate 180x180 for Apple touch icon
$appleIcon = Create-SquareIcon $src 180
$appleIcon.Save((Join-Path $workspace "src\app\apple-icon.png"), [System.Drawing.Imaging.ImageFormat]::Png)
$appleIcon.Save((Join-Path $workspace "public\apple-touch-icon.png"), [System.Drawing.Imaging.ImageFormat]::Png)
Write-Host "Generated apple-touch-icon.png (180x180)"

# 3. Generate 48x48 icon for favicon.ico
$fav48 = Create-SquareIcon $src 48
$favIcoHandle = $fav48.GetHicon()
$favIco = [System.Drawing.Icon]::FromHandle($favIcoHandle)

$p1 = Join-Path $workspace "public\favicon.ico"
if (Test-Path $p1) { Remove-Item $p1 -Force }
$fs1 = [System.IO.File]::OpenWrite($p1)
$favIco.Save($fs1)
$fs1.Close()

$p2 = Join-Path $workspace "src\app\favicon.ico"
if (Test-Path $p2) { Remove-Item $p2 -Force }
$fs2 = [System.IO.File]::OpenWrite($p2)
$favIco.Save($fs2)
$fs2.Close()
Write-Host "Generated public\favicon.ico and src\app\favicon.ico (48x48 CODIIC icon)"

$src.Dispose()
$icon512.Dispose()
$appleIcon.Dispose()
$fav48.Dispose()
$favIco.Dispose()
