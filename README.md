# Professional Portfolio Website

A modern, responsive portfolio website built with React.js, TypeScript, and Tailwind CSS. Features a clean design with dark mode support, smooth animations, and a fully customizable structure.

![Portfolio Preview](https://via.placeholder.com/800x400/3B82F6/FFFFFF?text=Portfolio+Preview)

## 🚀 Features

- **Modern Design**: Clean, minimalist interface with professional styling
- **Fully Responsive**: Mobile-first design that works on all devices
- **Dark Mode Ready**: Built-in dark mode support structure
- **Smooth Animations**: Elegant hover effects and transitions
- **SEO Optimized**: Semantic HTML structure and meta tags
- **Accessibility**: ARIA labels and keyboard navigation support
- **TypeScript**: Type-safe development environment
- **Component-Based**: Modular, reusable React components

## 🛠️ Tech Stack

- **Frontend Framework**: React.js 18+ with TypeScript
- **Styling**: Tailwind CSS v3
- **Routing**: React Router v6
- **Icons**: React Icons (Feather Icons)
- **Build Tool**: Vite
- **Development**: ESLint for code quality

## 📁 Project Structure

```
myPortfolio/
├── public/                 # Static assets
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── About.tsx
│   │   ├── ContactSection.tsx
│   │   ├── Education.tsx
│   │   ├── Experience.tsx
│   │   ├── Hero.tsx
│   │   ├── Layout.tsx
│   │   ├── ProjectsSection.tsx
│   │   └── Skills.tsx
│   ├── data/              # Portfolio content data
│   │   └── portfolio.ts
│   ├── pages/             # Page components
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Home.tsx
│   │   └── Projects.tsx
│   ├── App.tsx            # Main application component
│   ├── main.tsx           # Application entry point
│   └── index.css          # Global styles and Tailwind directives
├── eslint.config.js       # ESLint configuration
├── tailwind.config.js     # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
├── vite.config.ts         # Vite configuration
└── package.json           # Dependencies and scripts
```

## 🚀 Quick Start

### Prerequisites

- Node.js (v18+ recommended)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repository-url>
   cd myPortfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` (or the port shown in terminal)

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 📝 Customization Guide

### 1. Personal Information

Edit `src/data/portfolio.ts` to customize your personal information:


### 2. Skills Section

Update the skills object in `portfolio.ts`:


## 🎨 Styling Customization

### Color Scheme

The portfolio uses a blue-based color scheme defined in `tailwind.config.js`. To customize colors:

```javascript
// tailwind.config.js
theme: {
  extend: {
    colors: {
      primary: {
        50: '#eff6ff',
        // ... other shades
        600: '#2563eb', // Main brand color
        // ... other shades
      }
    }
  }
}
```

### Typography

The portfolio uses Inter font. To change fonts, update the import in `src/index.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=Your+Font:wght@400;500;600;700&display=swap');
```

And update the Tailwind config:

```javascript
fontFamily: {
  sans: ['Your Font', 'system-ui', 'sans-serif'],
}
```

### Component Styles

Custom component styles are defined in `src/index.css` using Tailwind's `@layer` directive:

```css
@layer components {
  .btn-primary {
    @apply bg-primary-600 hover:bg-primary-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200;
  }
}
```

## 🌐 Deployment

### Netlify

1. Build your project: `npm run build`
2. Drag the `dist` folder to Netlify's deploy area
3. Or connect your Git repository for automatic deployments

### Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json:
   ```json
   "scripts": {
     "deploy": "gh-pages -d dist"
   }
   ```
3. Run: `npm run build && npm run deploy`

## 📱 Responsive Design

The portfolio is built with a mobile-first approach:

- **Mobile**: Single column layout, stacked components
- **Tablet**: Two-column layouts where appropriate
- **Desktop**: Full multi-column layouts with optimal spacing

Breakpoints:
- `sm`: 640px+
- `md`: 768px+
- `lg`: 1024px+
- `xl`: 1280px+

## ♿ Accessibility Features

- Semantic HTML structure
- ARIA labels for interactive elements
- Keyboard navigation support
- Color contrast compliance
- Screen reader friendly
- Focus indicators

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🐛 Troubleshooting

### Common Issues

1. **Port already in use**
   - Vite will automatically try the next available port
   - Or specify a port: `npm run dev -- --port 3000`

2. **Tailwind styles not loading**
   - Ensure all paths in `tailwind.config.js` are correct
   - Check that Tailwind directives are in `index.css`

3. **TypeScript errors**
   - Run `npm run build` to see all TypeScript errors
   - Check that all imports have proper file extensions

### Performance Tips

- Optimize images before adding them
- Use lazy loading for heavy components
- Consider code splitting for larger applications

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Support

If you have any questions or need help customizing your portfolio:

- Create an issue in the repository
- Check the documentation above
- Review the code comments for additional guidance

---

**Happy coding! 🚀**

# myPortfolio
