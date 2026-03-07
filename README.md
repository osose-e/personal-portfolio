# Personal Portfolio

A React single-page portfolio built from your existing `portfolio.jsx` and `portfolio.html` files. It includes:

- **Hero** – Typing greeting, name, role, and CTAs
- **Work** – Project cards with modals (case studies)
- **About** – Bio, quick facts, skills & tools
- **Resume** – Experience timeline
- **Contact** – Form and links

Custom cursor, scroll-based nav highlighting, and scroll-reveal animations are included.

## Setup

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Scripts

- `npm run dev` – Start dev server (Vite)
- `npm run build` – Production build to `dist/`
- `npm run preview` – Preview production build locally

## Customize

- **Name / title / bio**: Edit strings in `src/App.jsx` (Hero, About, Contact, footer).
- **Projects**: Update the `PROJECTS` array in `src/App.jsx`.
- **Skills**: Update the `SKILLS` array in `src/App.jsx`.
- **Resume**: Edit the `experiences` array in the `Resume` component.
- **Fonts**: Linked in `index.html` (Playfair Display, DM Sans). Global styles in `src/index.css`.

## Tech

- React 18
- Vite 6
- No UI framework; inline styles in components
