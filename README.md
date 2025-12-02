# MindContext Documentation

Landing page and documentation for MindContext - The thinking layer for AI-assisted engineering.

## Run Locally

**Prerequisites:** Node.js

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

## Deploy to GitHub Pages

To enable GitHub Pages deployment:

1. Go to [Repository Settings → Pages](https://github.com/byteforgeca/mindcontext-doc/settings/pages)
2. Set **Source** to: **GitHub Actions**
3. Push to `main` branch to trigger deployment

Once configured, the site will be live at: https://byteforgeca.github.io/mindcontext-doc/

The workflow is configured in [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).
