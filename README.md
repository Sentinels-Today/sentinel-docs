# sentinel-docs

**Documentation portal for Sentinels.** Next.js 14 + `@next/mdx` static site with five reference pages covering the trust stack.

[![ci](https://github.com/Sentinels-Today/sentinel-docs/actions/workflows/ci.yml/badge.svg)](https://github.com/Sentinels-Today/sentinel-docs/actions/workflows/ci.yml)
![license](https://img.shields.io/badge/license-Apache--2.0-blue)
![node](https://img.shields.io/badge/node-%E2%89%A520-green)

## Pages

| Path | Source |
|---|---|
| `/` | `src/app/page.mdx` (overview + ecosystem map) |
| `/getting-started` | local stack bring-up |
| `/identity` | DID derivation algorithm |
| `/attestation` | canonical-JSON claim digest |
| `/trust` | deterministic trust formula |

## Develop

```sh
npm install
npm run dev       # http://localhost:3000
npm run lint
npm run typecheck
npm run build
```

All pages are pre-rendered at build time. Add a new section by dropping `src/app/<slug>/page.mdx` and adding a nav entry in `src/app/layout.tsx`.

## License

Apache-2.0 — see [LICENSE](./LICENSE).
