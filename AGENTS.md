# AGENTS.md

## Architecture

Two independent apps under `apps/` (no root monorepo config):

- **apps/web** — React Router v7 SSR on Hono/Vite, port 4000, env prefix `NEXT_PUBLIC_*`
- **apps/mobile** — Expo SDK 54, React Native 0.81.5, expo-router, NativeWind

This is a Create.xyz / Anything.app project. Auto-generated code lives in `__create/` dirs.

## Web App (apps/web)

- **Run**: `npm run dev` (starts `react-router dev` on port 4000)
- **Typecheck**: `npm run typecheck` (runs `react-router typegen && tsc --noEmit`)
- **Test**: `npx vitest` (Vitest, jsdom, globals: true, setup: `test/setupTests.ts`)
- **Routing**: Custom file-based — put `page.jsx` in `src/app/<path>/` to create a route at `/<path>`
- **API routes**: Put `route.js` in `src/app/api/<path>/` — auto-registered as Hono routes, export named HTTP-method functions (`GET`, `POST`, etc.)
- **Database**: Neon serverless Postgres via `@neondatabase/serverless`
- **Auth**: Auth.js with JWT strategy, custom Neon DB adapter at `__create/adapter.ts`
- **iframe**: App runs in a sandbox — communicates with parent via `postMessage` (navigation, healthcheck, screenshots, error reporting)
- **Custom Vite plugins** in `plugins/` — aliases, layout wrappers, font loading, console forwarding, render IDs
- **Test convention**: `src/**/*.{test,spec}.{js,ts,jsx,tsx}`

## Mobile App (apps/mobile)

- **Run**: `npx expo start` (starts Metro bundler)
- **Test**: `npx jest` (jest-expo preset)
- **Web polyfills**: Platform splits in `polyfills/web/` and `polyfills/native/`, wired via Metro `resolveRequest` in `metro.config.js`
- **Patches**: Several `patch-package` patches in `patches/`
- **EAS Build**: Configured in `eas.json` (development/preview/production)
- **Test convention**: Files with `.test.js` or `.test.ts` suffix
