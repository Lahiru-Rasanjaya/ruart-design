# RUart DESIGN website

React + Vite + TypeScript + Tailwind CSS. No backend, no database, no payment gateway.
Customers pick a CV design and tap **Order This CV**. WhatsApp opens with the CV name, number and price already typed in.
Nothing is sent automatically: the customer presses Send in WhatsApp.

## 1. Run it locally

Requires Node.js 18 or newer (https://nodejs.org).

```bash
npm install
npm run dev        # opens http://localhost:5173
```

Other commands:

```bash
npm run build      # type-checks and creates the production site in /dist
npm run preview    # preview the production build locally
npm test           # checks every CV card produces its own correct WhatsApp link (Node 22.6+)
```

## 2. Project structure

```
ruart-design/
├─ index.html                  Page title, meta description, favicon
├─ public/
│  ├─ favicon.png
│  └─ images/
│     ├─ logo.png              Full logo (mark + name + tagline), transparent
│     ├─ logo-header.png       Compact logo for the navigation bar (no tagline)
│     └─ cv/                   CV preview images  <-- put your designs here
│        └─ cv-001.svg ... cv-008.svg   PLACEHOLDER mockups
├─ src/
│  ├─ data/
│  │  ├─ cvTemplates.ts        ★ ALL CV designs: number, name, price, image, category
│  │  ├─ services.ts           ★ Services list (CV Designs + "Coming Soon" ones)
│  │  ├─ site.ts               ★ WhatsApp number, tagline, nav links, social links
│  │  └─ types.ts
│  ├─ utils/
│  │  ├─ whatsapp.ts           Builds the template-specific WhatsApp links
│  │  └─ assets.ts
│  ├─ components/
│  │  Navbar, HeroSection, CVGallery, CVCard, CVPreviewModal,
│  │  ServicesSection, AboutSection, ContactSection, Footer,
│  │  WhatsAppButton, WhatsAppIcon
│  ├─ App.tsx, main.tsx, index.css
├─ scripts/verify-whatsapp.ts  Link checker used by `npm test`
└─ tailwind.config.js          Brand colours (red #C9272E, black #171717, grey #F5F5F5)
```

You only ever need to edit the three files marked ★. No component needs to change.

## 3. Replace the placeholder CV images with your own designs

The 8 images in `public/images/cv/` are **placeholder mockups**, and the prices are **placeholder prices**.
They show a "Sample" tag on the site so they are never mistaken for your real work.

1. Export each CV preview as JPG, WebP or PNG. Portrait A4 ratio works best (for example 840 × 1188 px). Keep each file under about 200 KB for fast loading on mobile.
2. Copy the files into `public/images/cv/`, for example `cv-001.jpg`.
3. In `src/data/cvTemplates.ts`, change that template's `image` to `'images/cv/cv-001.jpg'` and **delete the line `placeholder: true`**. The "Sample" tag disappears.

## 4. Update CV names, numbers and prices

Open `src/data/cvTemplates.ts`. Each design is one block:

```ts
{
  id: 'CV-001',                 // CV number (must be unique)
  name: 'Modern Professional',  // template name
  price: 1000,                  // price in LKR, numbers only
  image: 'images/cv/cv-001.jpg',
  category: 'Professional',
  description: 'Short text shown in the large preview.',
  featured: true,               // optional: used for the hero preview
},
```

- **Add a design:** copy a block, change `id`, `name`, `price`, `image`.
- **Remove a design:** delete its block.
- **Change a price:** change the `price` number.

The WhatsApp message, the card, the large preview and the filter buttons all update automatically.

## 5. Add a new design category

**CV filter category:** just type a new `category` value in a template, for example `category: 'Academic'`. A new filter button appears automatically.

**New service (Social Media Posts, Logos, Flyers, ...):** open `src/data/services.ts`.
Those services are already listed as "Coming Soon". When one is ready, set `status: 'active'` and point `href` to its section.
To sell designs of that service the same way as CVs, copy `CVGallery.tsx` and `cvTemplates.ts` into e.g. `LogoGallery.tsx` and `logoTemplates.ts`, and add the new gallery to `App.tsx`. The WhatsApp builder in `src/utils/whatsapp.ts` can be reused as is.

## 6. Change the WhatsApp number or add social links

Open `src/data/site.ts`.

- `whatsappNumber`: international format, no `+` and no leading 0. Your number `0719651951` becomes `94719651951`.
- `socialLinks`: add real page URLs only, for example `{ label: 'Facebook', url: 'https://...' }`. They then appear in the Contact section automatically.

## 7. Deploy the website online

Run `npm run build`. This creates a `dist/` folder: a static website that works on any host.

**Netlify (easiest):** sign in at netlify.com, choose *Add new site → Deploy manually*, and drag the `dist` folder onto the page. Or connect a GitHub repo with build command `npm run build` and publish directory `dist`.

**Vercel / Cloudflare Pages:** import the GitHub repo. Framework: Vite. Build command `npm run build`. Output directory `dist`.

**GitHub Pages:** push the repo, then upload the contents of `dist` to a `gh-pages` branch (or use a GitHub Actions workflow). The site uses relative paths (`base: './'`), so sub-folder hosting works.

**cPanel / any web hosting:** upload the contents of `dist/` into `public_html/`.

Then connect your own domain in the host's domain settings.

## Notes

- The logo files in `public/images/` were prepared from your uploaded logo JPG (paper texture removed so it sits cleanly on white). The artwork itself is unchanged. `logo-header.png` is the same logo without the tagline line, so it stays readable in the slim navigation bar. If you have a transparent PNG or SVG of the logo, replace these files, keeping the same names.
- The site makes no claims about reviews, awards, customers or order counts. Keep it that way unless you have real ones to show.
