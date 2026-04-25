# AGENTS.md

## Use These Commands
- Install: `npm install`.
- Dev: `npm run dev`.
- Build: `npm run build`.
- Format: `npm run format` to fix, `npm run format:check` to verify.
- Lint: `npm run lint` to fix, `npm run lint:check` to verify.
- Typecheck: `npm run types:check`.

## Project Structure
- Vue 3 + Inertia + TailwindCSS v4 SPA.
- Entry: `resources/js/app.ts`.
- Pages: `resources/js/pages/` (mapped to Inertia routes).
- Components: `resources/js/components/`.
- Composables: `resources/js/composables/`.
- CSS: `resources/css/app.css` (TailwindCSS v4).
- Build output: `public/build/`.

## API Connection
- Inertia connects to backend via SSR. Backend URL is set in `vite.config.ts` server config or via env.
- In development, Vite proxies API calls to `localhost:8000`.
- For production, set `VITE_API_URL` to your backend URL.
- CSRF token: fetched from `/sanctum/csrf-cookie` on backend.