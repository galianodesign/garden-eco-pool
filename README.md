# Garden Eco Pool — Web

Web de captación para Garden Eco Pool (Vélez-Málaga). Next.js 14 + TypeScript + Tailwind.

## Stack
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Fuentes locales (Fraunces + Outfit) vía `next/font/local`

## Estructura
- `app/page.tsx` — Home (componente cliente con toda la interactividad)
- `app/layout.tsx` — Layout raíz + SEO + JSON-LD (LocalBusiness)
- `app/aviso-legal`, `app/privacidad`, `app/cookies` — Páginas legales
- `components/LegalLayout.tsx` — Layout compartido de páginas legales
- `public/*.svg` — Ilustraciones (placeholders hasta tener fotos reales)
- `public/logo.png` — Logo

## Desarrollo local
```bash
npm install
npm run dev
# abre http://localhost:3000
```

## Desplegar en Vercel (recomendado)

### Opción A — Subir a GitHub y conectar Vercel (auto-deploy)
1. Crea un repo nuevo en tu cuenta `galianodesign` (ej. `garden-eco-pool`).
2. Desde esta carpeta:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: web Garden Eco Pool"
   git branch -M main
   git remote add origin https://github.com/galianodesign/garden-eco-pool.git
   git push -u origin main
   ```
3. En Vercel → **Add New → Project → Import** el repo.
4. Vercel detecta Next.js automáticamente. Pulsa **Deploy**.
5. A partir de ahí, cada `git push` despliega solo.

### Opción B — Vercel CLI
```bash
npm i -g vercel
vercel       # primer deploy (preview)
vercel --prod  # a producción
```

## Pendiente de completar
- **Datos legales** (marcados en amarillo en las páginas legales): denominación social de la S.L., CIF, datos registrales del Registro Mercantil de Málaga.
- **Fotos reales**: sustituir los SVG de `public/` por fotos de trabajos reales (mantener nombres de archivo o actualizar las rutas en `app/page.tsx` y `app/globals.css`).
- **Dominio**: conectar `gardenecopool.es` en Vercel → Project → Settings → Domains.
- **Revisar textos legales con un profesional** antes de publicar (no son asesoría jurídica).

## Notas
- El formulario de contacto genera un mensaje de WhatsApp prerellenado al +34 687 537 441.
- Reseñas reales de Google integradas (valoración 5,0 · 12 reseñas).
