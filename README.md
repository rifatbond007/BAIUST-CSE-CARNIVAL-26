# BAIUST CSE Carnival 2026

Official website for the CSE Carnival 2026 at Bangladesh Army International University of Science & Technology (BAIUST).

## Structure

```
apps/
  web/      React Router v7 SSR + Hono + Vite (port 4000)
  mobile/   Expo SDK 54 + React Native 0.81.5
```

## Web App

```bash
cd apps/web
npm install --legacy-peer-deps
npm run dev        # starts dev server at http://localhost:4000
npm run typecheck  # react-router typegen && tsc --noEmit
npx vitest         # run tests
```

## Mobile App

```bash
cd apps/mobile
npm install
npx expo start
npx jest
```
