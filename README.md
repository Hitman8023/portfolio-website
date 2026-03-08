# Nishchal Tendulkar — Developer Portfolio

Production-ready personal developer portfolio built with **React (Vite)**, **Tailwind CSS**, and **Framer Motion**.

## Setup

```bash
npm install
npm run dev
```

Vite will run the app locally (usually at `http://localhost:5173`).

## Build

```bash
npm run build
npm run preview
```

## Dependencies

- react
- react-dom
- framer-motion
- @splinetool/react-spline
- tailwindcss
- tailwindcss-animate
- postcss
- autoprefixer
- vite
- @vitejs/plugin-react

## Spline Scene URL

Set your Spline URL in an environment variable:

1. Create a `.env` file in the project root.
2. Add:

```bash
VITE_SPLINE_SCENE_URL=https://prod.spline.design/your-scene-url/scene.splinecode
```

This value is used in `src/components/Hero.jsx` as the Spline scene source.

## Project Structure

```text
src/
	components/
		Navbar.jsx
		Hero.jsx
		About.jsx
		Projects.jsx
		Skills.jsx
		Contact.jsx
		Footer.jsx
		CustomCursor.jsx
	hooks/
		useCountUp.js
	App.jsx
	main.jsx
	index.css
```
