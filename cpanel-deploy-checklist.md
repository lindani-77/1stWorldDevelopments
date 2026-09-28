# cPanel deployment checklist

This project is a Vite + TanStack Start app. For cPanel, the upload should include the source files and package metadata, but should exclude `node_modules`, build output, and cache directories.

## Recommended archive contents

Include:
- `src/`
- `public/`
- `scripts/`
- `package.json`
- `package-lock.json`
- `app.js`
- `vite.config.ts`
- `tsconfig.json`
- `components.json`
- `eslint.config.js`
- `README.md`
- `.gitignore`
- `wrangler.toml`
- `netlify.toml`
- `bunfig.toml`

Exclude:
- `node_modules/`
- `.git/`
- `.output/`
- `.wrangler/`
- `.vinxi/`
- `.tanstack/`
- `dist/`
- `.next/`
- `.cache/`
- `.vite/`

## Build step on the server

After uploading the zip to cPanel:

```bash
npm install
npm run build
```

Then start the app using the cPanel Node application manager. The startup file for this app is:

```bash
app.js
```

The production start script is also available from the terminal:

```bash
npm start
```

Run `npm run build` before starting or restarting the application. This generates `.output/server/index.mjs`, which `app.js` loads. The Node application manager should use `app.js` as its startup file, with `NODE_ENV=production`.

## PowerShell packaging script

Run from the project root:

```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\package-cpanel.ps1
```

This creates a lightweight zip under:

```text
releases\first-world-dev-cpanel.zip
```
