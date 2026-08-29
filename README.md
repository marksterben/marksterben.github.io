# marcellino.dev

Portfolio site built with [Next.js](https://nextjs.org) (App Router),
TypeScript, and Tailwind CSS. Statically exported and deployed to
[GitHub Pages](https://marksterben.github.io) via GitHub Actions on every
push to `master`.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the result.
Section content (projects, bio, skills, experience, social links) lives in
[`lib/data.ts`](lib/data.ts).

### With Docker

```bash
docker compose up
```

Runs the dev server in a container with hot reload (source is bind-mounted;
`node_modules` and `.next` stay inside the container).

## Scripts

- `npm run dev` — start the dev server
- `npm run build` — type-check, lint, and produce a static export in `out/`
- `npm run lint` — run ESLint

## Deployment

Pushing to `master` triggers [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml),
which builds the static export and publishes it to GitHub Pages.
