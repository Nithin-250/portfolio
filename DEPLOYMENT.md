# Deployment Guide - Nithin S Portfolio

## Quick Deployment to Vercel

### Method 1: Using Vercel CLI (Recommended)

1. **Install Vercel CLI globally**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy from your project directory**
   ```bash
   vercel
   ```
   
   Follow the prompts:
   - Set up and deploy? `Y`
   - Which scope? Choose your account
   - Link to existing project? `N` (for first deployment)
   - What's your project's name? `nithin-portfolio` (or your preferred name)
   - In which directory is your code located? `./`
   - Want to override settings? `N`

4. **Your site will be deployed and you'll get a live URL!**

### Method 2: Using Vercel Dashboard

1. **Push your code to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git remote add origin https://github.com/Nithin-250/portfolio-website.git
   git push -u origin main
   ```

2. **Deploy via Vercel Dashboard**
   - Visit [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will automatically detect Next.js settings
   - Click "Deploy"

### Environment Setup

The portfolio is configured to work out of the box with no additional environment variables needed.

### Custom Domain (Optional)

Once deployed, you can add a custom domain:
1. Go to your project settings in Vercel
2. Navigate to "Domains"
3. Add your custom domain
4. Follow DNS configuration instructions

### Build Settings

The `vercel.json` configuration is minimal and optimized:
- Region: Mumbai (bom1) for optimal performance in India
- Vercel will auto-detect Next.js settings
- No additional configuration needed

## Performance Optimizations Included

- **Static Generation**: All pages are statically generated
- **Image Optimization**: Automatic image optimization
- **Code Splitting**: Automatic code splitting
- **Tree Shaking**: Unused code is removed
- **Gzip Compression**: Automatic compression
- **CDN**: Global CDN distribution

## Post-Deployment Checklist

- [ ] Test all navigation links
- [ ] Verify dark mode toggle works
- [ ] Check mobile responsiveness
- [ ] Test project links
- [ ] Verify contact form UI
- [ ] Test smooth scrolling
- [ ] Check animations and hover effects

## Monitoring and Analytics

Consider adding:
- **Vercel Analytics**: Built-in web analytics
- **Google Analytics**: For detailed visitor insights
- **Vercel Web Vitals**: Performance monitoring

## Troubleshooting

### Build Fails
- Check for TypeScript errors: `npm run build`
- Verify all dependencies are installed: `npm install`
- Check ESLint issues: `npm run lint`

### Deployment Issues
- Ensure your GitHub repository is public or you have proper access
- Check Vercel function limits (shouldn't be an issue for this static site)
- Verify Node.js version compatibility

## Support

For deployment issues:
- Vercel Documentation: https://vercel.com/docs
- Next.js Deployment: https://nextjs.org/docs/deployment

---

🚀 **Your portfolio will be live at**: `https://your-project-name.vercel.app`
