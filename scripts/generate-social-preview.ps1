<#!
.SYNOPSIS
Genera l'immagine Open Graph della home page per anteprime LinkedIn e social.

.DESCRIPTION
L'asset e' volutamente 1200x627: il formato orizzontale consigliato per i
preview Open Graph. Il PNG risultante viene pubblicato in public/social/.
#>

Set-StrictMode -Version Latest
$ErrorActionPreference = 'Stop'

Add-Type -AssemblyName System.Drawing

$projectRoot = Split-Path -Parent $PSScriptRoot
$outputDirectory = Join-Path $projectRoot 'public\social'
$outputPath = Join-Path $outputDirectory 'portfolio-linkedin-preview-1200x627.png'

function New-RoundedRectanglePath {
    param(
        [float]$X,
        [float]$Y,
        [float]$Width,
        [float]$Height,
        [float]$Radius
    )

    $diameter = $Radius * 2
    $path = [System.Drawing.Drawing2D.GraphicsPath]::new()
    $path.AddArc($X, $Y, $diameter, $diameter, 180, 90)
    $path.AddArc($X + $Width - $diameter, $Y, $diameter, $diameter, 270, 90)
    $path.AddArc($X + $Width - $diameter, $Y + $Height - $diameter, $diameter, $diameter, 0, 90)
    $path.AddArc($X, $Y + $Height - $diameter, $diameter, $diameter, 90, 90)
    $path.CloseFigure()
    return $path
}

function Draw-Text {
    param(
        [System.Drawing.Graphics]$Graphics,
        [string]$Text,
        [System.Drawing.Font]$Font,
        [System.Drawing.Brush]$Brush,
        [float]$X,
        [float]$Y,
        [float]$Width,
        [float]$Height,
        [System.Drawing.StringFormat]$Format
    )

    $Graphics.DrawString($Text, $Font, $Brush, [System.Drawing.RectangleF]::new($X, $Y, $Width, $Height), $Format)
}

New-Item -ItemType Directory -Force -Path $outputDirectory | Out-Null

$width = 1200
$height = 627
$bitmap = [System.Drawing.Bitmap]::new($width, $height, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
$graphics = [System.Drawing.Graphics]::FromImage($bitmap)
$graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
$graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$graphics.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
$graphics.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAliasGridFit

$backgroundTop = [System.Drawing.ColorTranslator]::FromHtml('#173f3e')
$backgroundBottom = [System.Drawing.ColorTranslator]::FromHtml('#0d292b')
$amber = [System.Drawing.ColorTranslator]::FromHtml('#dca04d')
$ivory = [System.Drawing.ColorTranslator]::FromHtml('#f8f6f0')
$mutedIvory = [System.Drawing.ColorTranslator]::FromHtml('#c9d7d2')
$transparentWhite = [System.Drawing.Color]::FromArgb(18, 255, 255, 255)
$transparentAmber = [System.Drawing.Color]::FromArgb(42, 220, 160, 77)

$backgroundBrush = [System.Drawing.Drawing2D.LinearGradientBrush]::new(
    [System.Drawing.Point]::new(0, 0),
    [System.Drawing.Point]::new($width, $height),
    $backgroundTop,
    $backgroundBottom
)
$amberBrush = [System.Drawing.SolidBrush]::new($amber)
$ivoryBrush = [System.Drawing.SolidBrush]::new($ivory)
$mutedBrush = [System.Drawing.SolidBrush]::new($mutedIvory)
$transparentWhiteBrush = [System.Drawing.SolidBrush]::new($transparentWhite)
$transparentAmberBrush = [System.Drawing.SolidBrush]::new($transparentAmber)
$linePen = [System.Drawing.Pen]::new([System.Drawing.Color]::FromArgb(65, 248, 246, 240), 1)
$amberPen = [System.Drawing.Pen]::new($amber, 7)
$markFont = [System.Drawing.Font]::new('Segoe UI', 62, [System.Drawing.FontStyle]::Bold, [System.Drawing.GraphicsUnit]::Pixel)
$eyebrowFont = [System.Drawing.Font]::new('Segoe UI', 19, [System.Drawing.FontStyle]::Bold, [System.Drawing.GraphicsUnit]::Pixel)
$titleFont = [System.Drawing.Font]::new('Georgia', 53, [System.Drawing.FontStyle]::Regular, [System.Drawing.GraphicsUnit]::Pixel)
$bodyFont = [System.Drawing.Font]::new('Segoe UI', 24, [System.Drawing.FontStyle]::Regular, [System.Drawing.GraphicsUnit]::Pixel)
$footerFont = [System.Drawing.Font]::new('Segoe UI', 18, [System.Drawing.FontStyle]::Regular, [System.Drawing.GraphicsUnit]::Pixel)
$leftFormat = [System.Drawing.StringFormat]::new()
$leftFormat.Alignment = [System.Drawing.StringAlignment]::Near
$leftFormat.LineAlignment = [System.Drawing.StringAlignment]::Near
$markFormat = [System.Drawing.StringFormat]::new()
$markFormat.Alignment = [System.Drawing.StringAlignment]::Center
$markFormat.LineAlignment = [System.Drawing.StringAlignment]::Center

try {
    $graphics.FillRectangle($backgroundBrush, 0, 0, $width, $height)

    # Decorative geometry: enough character for a social card, but no visual noise.
    for ($column = 0; $column -lt 4; $column++) {
        $x = 88 + ($column * 72)
        $graphics.DrawLine($linePen, $x, 0, $x - 116, $height)
    }

    $accentPath = New-RoundedRectanglePath -X 764 -Y 56 -Width 344 -Height 514 -Radius 56
    $graphics.FillPath($transparentWhiteBrush, $accentPath)
    $accentPath.Dispose()

    $amberPath = New-RoundedRectanglePath -X 1008 -Y 385 -Width 258 -Height 294 -Radius 62
    $graphics.FillPath($transparentAmberBrush, $amberPath)
    $amberPath.Dispose()

    # Monogram is deliberately small: it identifies the brand without taking over the message.
    $graphics.FillEllipse($transparentWhiteBrush, 80, 87, 178, 178)
    $graphics.DrawEllipse($amberPen, 90, 97, 158, 158)
    Draw-Text -Graphics $graphics -Text 'MC' -Font $markFont -Brush $ivoryBrush -X 89 -Y 83 -Width 160 -Height 190 -Format $markFormat

    Draw-Text -Graphics $graphics -Text 'MATTEO CURTI  /  STRUMENTI DIGITALI SU MISURA' -Font $eyebrowFont -Brush $amberBrush -X 336 -Y 102 -Width 720 -Height 32 -Format $leftFormat
    Draw-Text -Graphics $graphics -Text "Automazioni, dashboard`ne strumenti web`nper team e PMI" -Font $titleFont -Brush $ivoryBrush -X 332 -Y 156 -Width 720 -Height 225 -Format $leftFormat
    Draw-Text -Graphics $graphics -Text 'Dai processi manuali e dai dati dispersi a strumenti interni chiari, condivisi e verificabili.' -Font $bodyFont -Brush $mutedBrush -X 336 -Y 414 -Width 650 -Height 88 -Format $leftFormat
    Draw-Text -Graphics $graphics -Text 'matteocurti-fullstack.github.io' -Font $footerFont -Brush $ivoryBrush -X 336 -Y 555 -Width 580 -Height 30 -Format $leftFormat
}
finally {
    $markFormat.Dispose()
    $leftFormat.Dispose()
    $footerFont.Dispose()
    $bodyFont.Dispose()
    $titleFont.Dispose()
    $eyebrowFont.Dispose()
    $markFont.Dispose()
    $amberPen.Dispose()
    $linePen.Dispose()
    $transparentAmberBrush.Dispose()
    $transparentWhiteBrush.Dispose()
    $mutedBrush.Dispose()
    $ivoryBrush.Dispose()
    $amberBrush.Dispose()
    $backgroundBrush.Dispose()
    $graphics.Dispose()
}

try {
    $bitmap.Save($outputPath, [System.Drawing.Imaging.ImageFormat]::Png)
}
finally {
    $bitmap.Dispose()
}

Write-Output "Immagine Open Graph generata: $outputPath"
