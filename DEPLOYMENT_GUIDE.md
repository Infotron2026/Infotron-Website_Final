# Quick Deployment Guide - Infotron Solutions Website

## Download & Extract

The export file `infotron-website-export.zip` contains the complete frontend source code.

```bash
unzip infotron-website-export.zip
cd frontend
```

## Local Development

```bash
# Install dependencies
yarn install

# Create environment file
cp .env.example .env

# Start development server
yarn start
```

## Production Build

```bash
# Create optimized build
yarn build

# The build folder contains static files ready for deployment
```

## Deploy to Vercel (Recommended - Free)

1. Push code to GitHub
2. Go to vercel.com
3. Import your GitHub repository
4. Vercel auto-detects Create React App
5. Click Deploy

Or use CLI:
```bash
npm i -g vercel
vercel
```

## Deploy to Netlify (Free)

1. Go to netlify.com
2. Drag & drop the `build` folder
3. Done!

Or use CLI:
```bash
npm i -g netlify-cli
netlify deploy --prod --dir=build
```

## Deploy to AWS S3 + CloudFront

```bash
# Build the project
yarn build

# Sync to S3
aws s3 sync build/ s3://your-bucket-name --delete

# Invalidate CloudFront cache
aws cloudfront create-invalidation --distribution-id YOUR_DIST_ID --paths "/*"
```

## Deploy with Docker

```bash
# Build Docker image
docker build -t infotron-website .

# Run container
docker run -p 80:80 infotron-website
```

## Important Notes

1. **CEIPAL Integration**: The Careers page has CEIPAL job widget. Update credentials in `src/pages/Careers.jsx` if needed.

2. **Contact Forms**: Currently display-only. Integrate with your CRM (HubSpot, etc.) as needed.

3. **Images**: All images are served from external URLs (Unsplash, Pexels). Consider hosting locally for production.

4. **SEO**: Update `public/index.html` with your meta tags, favicon, and analytics scripts.

## File Structure Summary

```
frontend/
├── src/
│   ├── components/     # React components
│   ├── pages/          # Page components
│   ├── data/           # Static content (mockData.js)
│   └── App.js          # Main app with routing
├── public/             # Static assets
├── package.json        # Dependencies
├── craco.config.js     # Build configuration
└── tailwind.config.js  # Tailwind CSS config
```

## Support

Email: contact@infotronsolutions.com
