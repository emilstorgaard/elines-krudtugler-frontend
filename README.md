# Elines Krudtugler – Frontend

Offentlig hjemmeside for dagplejen "Elines Krudtugler" ([elineskrudtugler.dk](https://elineskrudtugler.dk)), bygget med [SvelteKit](https://svelte.dev/docs/kit) og [Svelte 5](https://svelte.dev). Indholdet hentes server-side fra en [Umbraco](https://umbraco.com) headless CMS-backend via Delivery API v2.

## Tech stack

- **SvelteKit 2** med **Svelte 5** (runes: `$props()`, `$state()`, `$derived()`, `$effect()`) og `adapter-node`
- **TypeScript** (strict mode)
- **Tailwind CSS 4** med `@tailwindcss/forms`
- **ESLint** (flat config, `typescript-eslint` + `eslint-plugin-svelte`) og **Prettier** (inkl. `prettier-plugin-svelte` og `prettier-plugin-tailwindcss`)
- **Umbraco Delivery API v2** som headless CMS-backend

## Kom i gang

### Forudsætninger

- Node.js LTS
- Adgang til en kørende Umbraco-instans med Delivery API v2 aktiveret

### Opsætning

```sh
# installer afhængigheder
npm install

# opret lokal miljøfil ud fra eksemplet og udfyld værdierne
cp .env.example .env
```

### Miljøvariabler

| Variabel             | Beskrivelse                                                        |
| -------------------- | ------------------------------------------------------------------ |
| `PUBLIC_UMBRACO_URL` | Base-URL til Umbraco-instansen, som Delivery API v2 kaldes igennem |

> `npm run dev` sætter `NODE_TLS_REJECT_UNAUTHORIZED=0`, da den lokale Umbraco-instans typisk kører med et selvsigneret certifikat. Brug ikke dette flag i produktion.

## Udvikling

```sh
npm run dev

# start dev-serveren og åbn appen i en ny browser-fane
npm run dev -- --open
```

## Build & preview

```sh
npm run build
npm run preview
```

Projektet bruger [`@sveltejs/adapter-node`](https://svelte.dev/docs/kit/adapter-node), så en produktions-build outputter en selvstændig Node.js-server i `build/`.

## Kodekvalitet

```sh
# type-tjek (.svelte + .ts)
npm run check

# type-tjek i watch-mode
npm run check:watch

# formatér med Prettier
npm run format

# tjek formattering og lint (Prettier + ESLint)
npm run lint
```

## Projektstruktur

```
src/
  lib/
    api/umbraco.ts       # Klient til Umbraco Delivery API v2
    components/          # Præsentationskomponenter (én pr. sideafsnit)
    types/                # TypeScript-typer for CMS-indhold
    utils/                # Hjælpefunktioner (bl.a. medie-URL'er)
    navigation.ts         # Statisk navigationsopsætning
  routes/
    +layout.svelte        # Fælles layout (header, footer, announcement bar)
    om-os/                # /om-os – Om os
    hverdagen/             # /hverdagen – Hverdagen
    praktisk/              # /praktisk – Praktisk info
    ledige-pladser/        # /ledige-pladser – Ledige pladser
    galleri/               # /galleri – Billedgalleri
    kontakt/               # /kontakt – Kontakt
    sitemap.xml/           # Genereret XML-sitemap
    api/media/[folderId]/  # Proxy til Umbraco-mediemapper
```

Sider hentes server-side i de tilhørende `+page.server.ts`-filer via `getContentByPath()` og sendes videre til komponenterne som flade `*PageProperties`-objekter.

## Deployment

Appen bygges og deployes automatisk til produktion via [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), når der pushes til `main`:

1. Docker-image bygges og pushes til GitHub Container Registry (`ghcr.io/emilstorgaard/elines-krudtugler-frontend`).
2. Serveren trækker det nye image og genstarter via `docker compose` (se [`docker-compose.yaml`](docker-compose.yaml)).

For at bygge Docker-imaget lokalt skal `PUBLIC_UMBRACO_URL` angives som build-arg, da miljøvariablen indlejres i den statiske build:

```sh
docker build --build-arg PUBLIC_UMBRACO_URL=https://umbraco.example.com -t elines-krudtugler-frontend .
```
