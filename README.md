# SpiderWeb Studio

An elite frontend engineering agency website built with Next.js 14, React, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Next.js 14** with App Router for optimal performance and SEO
- **TypeScript** for type safety and enhanced developer experience
- **Tailwind CSS** with custom dark-mode-first design system
- **Framer Motion** for sophisticated animations and micro-interactions
- **Framer Motion** for sophisticated animations and micro-interactions
- **Responsive Design** that looks stunning on all devices
- **Accessible** following WCAG guidelines
- **SEO Optimized** with proper metadata structure
- **CI/CD Pipeline** with GitHub Actions for automatic Vercel deployment

## 🏗️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Animations**: Framer Motion
- **Icons**: Heroicons (via Tailwind)
- **Deployment**: Vercel
- **CI/CD**: GitHub Actions

## 📁 Project Structure

```
spiderweb-studio/
├── app/
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Hero.tsx
│   └── BentoGrid.tsx
├── constants/
│   └── index.ts
├── styles/
│   └── globals.css
├── public/
└── .github/
    └── workflows/
        └── main.yml
```

## 🛠️ Installation & Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/spiderweb-studio.git
   ```

2. Navigate to the project directory:
   ```bash
   cd spiderweb-studio
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🚀 Deployment

This project is configured for automatic deployment to Vercel via GitHub Actions. To set up:

1. Push your code to a GitHub repository
2. Go to [Vercel](https://vercel.com) and import your repository
3. Configure the following environment variables in Vercel:
   - `VERCEL_TOKEN`
   - `VERCEL_ORG_ID`
   - `VERCEL_PROJECT_ID`
4. Vercel will automatically deploy your site on every push to main

## 🎨 Design System

### Color Palette
- **Primary**: Emerald Green (#10B981) - represents growth and innovation
- **Secondary**: Slate Blue (#6366F1) - represents technology and trust
- **Accent**: Amber (#F59E0B) - represents energy and creativity
- **Dark Mode**: Deep charcoal background with elevated glassmorphism elements

### Typography
- **Headings**: Clash Grotesk (bold, modern, distinctive)
- **Body**: Inter (highly readable, neutral)

## 🧩 Components

### Hero Section
- Immersive full-height background with animated gradients
- Staggered fade-in animation for headline, subhead, and CTA
- Interactive floating elements with parallax effect
- Gradient glassmorphism button with hover effects

### Bento Grid
- Dynamic responsive layout (1-4 columns based on screen size)
- Spring-based hover animations on each card
- Glassmorphism effect with subtle borders
- Icon-based visual representation of each capability

### Philosophy Section
- Clean, readable typography with proper measure
- Centered layout for maximum impact
- Subtle background elevation for depth perception

### Social Proof Section
- Case study cards with measurable results
- Dark/light mode adaptive styling
- Monospace formatting for metrics to enhance credibility

## 💡 Key Features

### Performance Optimizations
- Automatic code splitting with Next.js
- Optimized image loading with next/image
- Server-side rendering for optimal SEO
- Efficient CSS with Tailwind's JIT compiler
- Minimal JavaScript bundle size

### User Experience
- Smooth page transitions with scroll-behavior: smooth
- Accessible color contrast ratios
- Focus-visible outlines for keyboard navigation
- Responsive touch targets
- Reduced motion preferences respected

### Developer Experience
- TypeScript for enhanced IDE support
- ESLint and Prettier configured
- Commitlint for consistent commit messages
- GitHub Actions for automated testing and deployment

## 📱 Responsive Breakpoints

- Mobile: < 640px
- Tablet: ≥ 640px
- Laptop: ≥ 1024px
- Desktop: ≥ 1280px

## 🎯 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👏 Acknowledgments

- Inspired by Awwwards-winning agency websites
- Built with the latest Next.js 14 features
- Animations inspired by Apple's product pages
- Design principles from Swiss typography and brutalism