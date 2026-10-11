import fs from "node:fs"
import sharp from "sharp"

const dir = new URL(".", import.meta.url).pathname
const out = new URL("../public/images/cases/", import.meta.url).pathname
fs.mkdirSync(out, { recursive: true })

const roundedMask = (w, h, r) =>
  Buffer.from(
    `<svg width="${w}" height="${h}"><rect width="${w}" height="${h}" rx="${r}" ry="${r}" fill="#fff"/></svg>`,
  )

async function rounded(input, w, h, r, position = "top") {
  return sharp(input)
    .resize(w, h, { fit: "cover", position })
    .composite([{ input: roundedMask(w, h, r), blend: "dest-in" }])
    .png()
    .toBuffer()
}

// Phone: iPhone-style frame with status bar and the mobile screenshot
async function phone(screenshot, screenW) {
  const bezel = Math.round(screenW * 0.04)
  const statusH = Math.round(screenW * 0.13)
  const screenH = Math.round(screenW * 2.165)
  const w = screenW + bezel * 2
  const h = screenH + bezel * 2
  const r = Math.round(w * 0.16)
  const sr = r - bezel
  const islandW = Math.round(screenW * 0.3)
  const islandH = Math.round(statusH * 0.55)
  const font = Math.round(statusH * 0.36)

  const frame = Buffer.from(`
    <svg width="${w}" height="${h}">
      <rect x="0" y="0" width="${w}" height="${h}" rx="${r}" fill="#2b2b2d"/>
      <rect x="2" y="2" width="${w - 4}" height="${h - 4}" rx="${r - 2}" fill="#0b0b0c"/>
      <rect x="${bezel}" y="${bezel}" width="${screenW}" height="${screenH}" rx="${sr}" fill="#fff"/>
    </svg>`)
  const status = Buffer.from(`
    <svg width="${screenW}" height="${statusH}">
      <rect width="${screenW}" height="${statusH}" fill="#fff"/>
      <text x="${screenW * 0.14}" y="${statusH * 0.66}" font-family="-apple-system, Helvetica Neue, Arial" font-weight="600" font-size="${font}" fill="#000">9:41</text>
      <rect x="${(screenW - islandW) / 2}" y="${(statusH - islandH) / 2}" width="${islandW}" height="${islandH}" rx="${islandH / 2}" fill="#000"/>
      <g fill="#000" transform="translate(${screenW * 0.72}, ${statusH * 0.4})">
        <rect x="0" y="${font * 0.45}" width="${font * 0.16}" height="${font * 0.25}" rx="1"/>
        <rect x="${font * 0.24}" y="${font * 0.3}" width="${font * 0.16}" height="${font * 0.4}" rx="1"/>
        <rect x="${font * 0.48}" y="${font * 0.15}" width="${font * 0.16}" height="${font * 0.55}" rx="1"/>
        <rect x="${font * 0.72}" y="0" width="${font * 0.16}" height="${font * 0.7}" rx="1"/>
        <rect x="${font * 1.3}" y="0" width="${font * 1.1}" height="${font * 0.7}" rx="${font * 0.18}" fill="none" stroke="#000" stroke-width="1.5"/>
        <rect x="${font * 1.4}" y="${font * 0.1}" width="${font * 0.8}" height="${font * 0.5}" rx="${font * 0.1}"/>
      </g>
    </svg>`)

  const content = await sharp({
    create: { width: screenW, height: screenH, channels: 4, background: "#fff" },
  })
    .composite([
      { input: status, top: 0, left: 0 },
      {
        input: await sharp(screenshot)
          .resize(screenW, screenH - statusH, { fit: "cover", position: "top" })
          .toBuffer(),
        top: statusH,
        left: 0,
      },
    ])
    .png()
    .toBuffer()

  const screen = await rounded(content, screenW, screenH, sr)
  const buffer = await sharp(frame)
    .composite([{ input: screen, top: bezel, left: bezel }])
    .png()
    .toBuffer()
  return { buffer, w, h, r }
}

async function shadow(w, h, r, blur, opacity) {
  const pad = blur * 3
  return {
    pad,
    buffer: await sharp(
      Buffer.from(
        `<svg width="${w + pad * 2}" height="${h + pad * 2}"><rect x="${pad}" y="${pad}" width="${w}" height="${h}" rx="${r}" fill="rgba(0,0,0,${opacity})"/></svg>`,
      ),
    )
      .blur(blur)
      .png()
      .toBuffer(),
  }
}

// Featured image: brand colored canvas with the logo left and a phone right
async function featured({ name, background, logo, logoWidth }) {
  const W = 1400
  const H = 934
  const device = await phone(`${dir}${name}-mobile.png`, 360)
  const top = Math.round((H - device.h) / 2) + 20
  const left = 870
  const s = await shadow(device.w, device.h, device.r, 30, 0.35)
  const logoBuffer = await sharp(logo, { density: 600 })
    .resize({ width: logoWidth })
    .png()
    .toBuffer()
  const logoMeta = await sharp(logoBuffer).metadata()

  // Compose on an oversized canvas so the shadow can bleed off the edges
  const P = 300
  const canvas = await sharp({
    create: { width: W + P * 2, height: H + P * 2, channels: 3, background },
  })
    .composite([
      {
        input: logoBuffer,
        left: P + 190,
        top: P + Math.round((H - logoMeta.height) / 2),
      },
      { input: s.buffer, left: P + left - s.pad + 10, top: P + top - s.pad + 30 },
      { input: device.buffer, left: P + left, top: P + top },
    ])
    .png()
    .toBuffer()

  await sharp(canvas)
    .extract({ left: P, top: P, width: W, height: H })
    .jpeg({ quality: 90, progressive: true })
    .toFile(`${out}${name}-featured.jpg`)
}

// Device preview: transparent laptop with the desktop screenshot
async function devicePreview(name) {
  const W = 1400
  const screenW = 1080
  const screenH = 675
  const bezelX = 20
  const bezelTop = 24
  const chin = 38
  const lidW = screenW + bezelX * 2
  const lidH = screenH + bezelTop + chin
  const lidX = (W - lidW) / 2
  const lidY = 20
  const baseY = lidY + lidH
  const baseH = 24
  const baseX = 40
  const H = baseY + baseH + 40

  const frame = Buffer.from(`
    <svg width="${W}" height="${H}">
      <defs>
        <linearGradient id="base" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="#e3e4e6"/>
          <stop offset="0.45" stop-color="#c4c6c9"/>
          <stop offset="1" stop-color="#8e9095"/>
        </linearGradient>
        <filter id="blur"><feGaussianBlur stdDeviation="12"/></filter>
      </defs>
      <ellipse cx="${W / 2}" cy="${baseY + baseH + 6}" rx="${W / 2 - 80}" ry="12" fill="rgba(0,0,0,0.35)" filter="url(#blur)"/>
      <rect x="${lidX}" y="${lidY}" width="${lidW}" height="${lidH + 10}" rx="30" fill="#a9abaf"/>
      <rect x="${lidX + 3}" y="${lidY + 3}" width="${lidW - 6}" height="${lidH + 4}" rx="27" fill="#0d0d0e"/>
      <circle cx="${W / 2}" cy="${lidY + bezelTop / 2 + 1}" r="4" fill="#1f2a33"/>
      <path d="M${baseX} ${baseY} H${W - baseX} V${baseY + baseH * 0.55} Q${W - baseX} ${baseY + baseH} ${W - baseX - 60} ${baseY + baseH} H${baseX + 60} Q${baseX} ${baseY + baseH} ${baseX} ${baseY + baseH * 0.55} Z" fill="url(#base)"/>
      <path d="M${W / 2 - 110} ${baseY} H${W / 2 + 110} V${baseY + 5} Q${W / 2 + 110} ${baseY + 10} ${W / 2 + 100} ${baseY + 10} H${W / 2 - 100} Q${W / 2 - 110} ${baseY + 10} ${W / 2 - 110} ${baseY + 5} Z" fill="#9a9ca0"/>
      <rect x="${baseX}" y="${baseY}" width="${W - baseX * 2}" height="2" fill="#f4f5f6"/>
    </svg>`)

  const screen = await rounded(`${dir}${name}-desktop.png`, screenW, screenH, 4)
  await sharp(frame)
    .composite([{ input: screen, left: lidX + bezelX, top: lidY + bezelTop }])
    .png({ compressionLevel: 9, palette: true, quality: 95 })
    .toFile(`${out}${name}-device-preview.png`)
}

const whiteLogo = (file, keep = []) => {
  let svg = fs.readFileSync(`${dir}${file}`, "utf8")
  svg = svg.replace(/fill="#([0-9a-fA-F]{3,6})"/g, (m, c) =>
    keep.includes(c.toLowerCase()) ? m : 'fill="#ffffff"',
  )
  svg = svg.replace(/fill:\s*#([0-9a-fA-F]{3,6})/g, (m, c) =>
    keep.includes(c.toLowerCase()) ? m : "fill:#ffffff",
  )
  return Buffer.from(svg)
}

await featured({
  name: "efteling",
  background: "#7d9479",
  logo: whiteLogo("efteling-logo.svg"),
  logoWidth: 520,
})
await featured({
  name: "daf",
  background: "#00529b",
  logo: whiteLogo("daf-logo.svg", ["fe002a"]),
  logoWidth: 440,
})
await devicePreview("efteling")
await devicePreview("daf")
console.log(fs.readdirSync(out))
