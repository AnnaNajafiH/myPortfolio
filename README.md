# My Portfolio Website

Welcome to my portfolio website repository! I built this site to showcase my work and skills as a Full Stack Developer. It features a clean, modern design with responsive layouts, dark mode, and support for three languages (English, German, and Persian).

Check out the [live site here](https://nnportfolio.netlify.app/)!

## What I've Built

I wanted my portfolio to reflect my skills, so I focused on:

- Creating a fully responsive site that works on all devices
- Implementing a clean dark/light mode toggle that remembers user preferences
- Adding multilingual support for English, German, and Persian (my native language)
- Building smooth, intuitive interactions and animations
- Making the site accessible with keyboard navigation and proper HTML semantics
- Optimizing SEO with proper meta tags and structured content

## Technologies I Used

I built this portfolio with my favorite modern web technologies:

- React with TypeScript for type safety
- Tailwind CSS for styling
- React Router for navigation
- i18next for language management
- Vite as my build tool
- Netlify for deployment

## How I Organized My Code

I structured my project with maintainability in mind:

- `components/`: All my reusable UI components
- `pages/`: Main page layouts for different routes
- `data/`: My portfolio content (projects, skills, certificates)
- `locales/`: Translation files for all three languages
- `assets/`: Images and other static files

## Running This Project

If you want to run my portfolio locally:

### Requirements

- Node.js (v18 or newer)
- npm or yarn

### Local Development

```bash
# First, install dependencies
npm install

# Start the dev server
npm run dev
```

### Building for Production

```bash
# Create optimized build
npm run build

# Preview the build locally
npm run preview
```

## Making It Your Own

If you like my portfolio and want to use it as a template:

1. Update the data files with your information:
   - `src/data/portfolio.ts` for your personal info and projects
   - `src/data/certificates.ts` for your own achievements
2. Modify the translations in `src/locales/` for your preferred languages
3. Adjust the color scheme in `tailwind.config.js` to match your personal brand

## What You'll Find in My Portfolio

I've included several key sections to showcase my skills and experience:

- **About Me**: My journey from chemistry to web development
- **Skills & Technologies**: Visual representation of my technical skills
- **Project Showcase**: Interactive cards with details about my work
- **Certificates**: Display of my professional certifications and achievements
- **Education**: My educational background and continuing education
- **Contact Form**: An easy way to get in touch with me

I'm particularly proud of the language switcher that properly handles right-to-left text for Persian, and the smooth transitions between dark and light modes!

## How I Deployed It

I deployed my portfolio on Netlify for its simplicity and reliability:

1. Connected my GitHub repository for automatic deployments
2. Set up the build command as `npm run build`
3. Configured the publish directory as `dist`

The build process optimizes all assets and bundles the JavaScript for the best performance.

---

Thanks for checking out my portfolio! Feel free to reach out if you have any questions or want to collaborate.

~ Nahid Najafi

### Common Issues

1. **Translation keys showing instead of text**

   - Ensure locale files are copied: `node scripts/copyLocales.js`
   - Check translation file structure matches component usage
   - Verify i18n configuration in `src/i18n.ts`

2. **Dark mode not persisting**

   - Check localStorage permissions in browser
   - Verify `Layout.tsx` dark mode logic

3. **Flags not displaying**

   - Ensure `react-country-flag` is installed: `npm install react-country-flag`
   - Check country codes in `LanguageSelector.tsx`

4. **Build errors with TypeScript**

   - Run `npm run build` to see all TypeScript errors
   - Check import paths and file extensions
   - Verify type definitions for new packages

5. **Tailwind styles not loading**
   - Ensure all paths in `tailwind.config.js` are correct
   - Check that Tailwind directives are in `index.css`
   - Verify content patterns include all component files

### Performance Optimization

- **Image Optimization**: Use WebP format for better compression
- **Lazy Loading**: Implemented for project images
- **Code Splitting**: Automatic with Vite and React Router
- **Bundle Analysis**: Use `npm run build` to see bundle sizes

---

**Happy coding! 🚀**

# myPortfolio
