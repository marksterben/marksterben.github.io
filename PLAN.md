# Redesign Portfolio — Marcellino

Desain dibangun dari nol — tidak terikat layout/style situs lama (Bootstrap
"Freelancer" template). Situs lama cuma jadi referensi **konten**, bukan
referensi desain.

## Keputusan

- **Gaya**: Dark mode, developer-ish. Background gelap, aksen warna terang
  (gradient/neon), boleh mix font monospace untuk elemen teknikal (label,
  tag tech stack).
- **Struktur**: One-page scroll dengan section: Hero, Portfolio, Skills/Tech
  Stack, Experience/Timeline, About, Footer/Contact. Layout & styling tiap
  section didesain baru, bukan port dari template lama.
- **Tech stack**: Next.js (App Router) + TypeScript + Tailwind CSS, static
  export (`output: 'export'`).
- **Deployment**: Repo `marksterben.github.io` (user site) source-nya jadi
  project Next.js di branch `master`. GitHub Actions build static export
  tiap push & deploy ke GitHub Pages (source Pages diubah ke
  "GitHub Actions", bukan serve langsung dari root branch).
- **Role/title**: "Software Engineer" (ganti dari "Web Developer - Android
  Developer").
- **Konten** (dipakai lagi apa adanya, cuma dipoles copy-nya, bukan acuan
  desain):
  - Project: MRS Serafi, Item List, Emoji Searcher, Toko Gantengin.
  - Kontak & social: WhatsApp, GitHub, LinkedIn, Instagram, lokasi
    Palembang.
  - Bio singkat sebagai dasar section About.

## Rencana implementasi

1. **Setup project**: `create-next-app` (TypeScript, Tailwind, App Router,
   ESLint) di root repo. File statis lama (`index.html`, `css/styles.css`,
   `js/scripts.js`) dihapus setelah aset gambar dipindah ke `public/`.
2. **Config static export**: `next.config.ts` → `output: 'export'`,
   `images.unoptimized: true` (next/image tanpa loader server tidak jalan
   di static export).
3. **GitHub Actions workflow** (`.github/workflows/deploy.yml`): build
   project tiap push ke `master`, upload artifact `out/`, deploy via
   `actions/deploy-pages`. Ubah setting repo: Settings → Pages → Source →
   "GitHub Actions".
4. **Struktur komponen** (`app/page.tsx` + `components/`): satu komponen
   per section (`Nav`, `Hero`, `Portfolio`, `Skills`, `Experience`, `About`,
   `Footer`) — desain visual tiap komponen dibuat baru dari nol.
5. **Icon**: `lucide-react` atau `react-icons` (bukan Font Awesome CDN
   script global) untuk social icons & tech icons.
6. **Detail project**: Modal/detail view custom (native `<dialog>` atau
   state React) untuk menampilkan tech stack & link tiap project.
7. **Test**: `npm run dev` lokal, cek responsive (mobile/desktop), semua
   link & interaksi jalan, lalu cek hasil static export (`npm run build`)
   sebelum push.

## Status

- [x] Setup Next.js (TypeScript, Tailwind, App Router) + static export config.
- [x] Semua section (Nav, Hero, Portfolio + modal, Skills, Experience, About,
      Footer) dibangun dengan gaya dark/developer-ish.
- [x] Lint, typecheck, `next build` (static export) sukses; dicek manual di
      browser (nav responsive, modal buka/tutup, gambar termuat).
- [x] `.github/workflows/deploy.yml` dibuat (build + deploy ke GitHub
      Pages via `actions/deploy-pages`).
- [ ] **Belum dilakukan** (perlu aksi dari user): ubah Settings → Pages →
      Source jadi "GitHub Actions" di repo GitHub, lalu push branch ini ke
      `master`.
- [ ] Ganti konten dummy Skills & Experience dengan data asli.

## Belum diputuskan / didesain saat implementasi

- Palet warna aksen persis, tipografi (Google Font mana), layout detail
  tiap section — akan disusun & diusulkan saat mulai eksekusi desain.
- **Konten Skills & Experience masih dummy/placeholder** — dibangun dulu
  dengan data contoh (tech stack umum, 1-2 entri timeline placeholder)
  supaya section-nya bisa didesain. User akan kasih konten final (list
  tech stack & riwayat kerja) belakangan untuk menggantikan dummy ini.
