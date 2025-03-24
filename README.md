
# Sarthak Pranit Portfolio

My personal portfolio website showcasing my projects and skills.

## GitHub Pages Setup

This project is configured for GitHub Pages deployment. To deploy:

1. Install dependencies:
   ```
   npm install
   ```

2. Build the project:
   ```
   npm run build
   ```

3. Deploy to GitHub Pages:
   ```
   npm run deploy
   ```

Alternatively, you can set up GitHub Actions for automatic deployment on push to the main branch.

### GitHub Actions Setup (Recommended)

Add a `.github/workflows/deploy.yml` file with the following content:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout 🛎️
        uses: actions/checkout@v3

      - name: Install and Build 🔧
        run: |
          npm ci
          npm run build

      - name: Deploy 🚀
        uses: JamesIves/github-pages-deploy-action@v4
        with:
          folder: dist
```

## Development

To run the development server:
```
npm run dev
```

## Technologies Used
- React
- TypeScript
- Vite
- Tailwind CSS
- React Router
