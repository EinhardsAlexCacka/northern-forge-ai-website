# Northern Forge AI Website

Professional single-page website for Northern Forge AI Limited - Forging accessible AI solutions for SMBs.

## Overview

A complete, responsive single-page React application built with modern web technologies, featuring smooth animations, a contact form, and mobile-first design.

## Features

- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Smooth Animations** - Framer Motion scroll-triggered animations
- **Interactive Components** - Contact modal, mobile menu, and smooth scrolling navigation
- **Form Validation** - React Hook Form with validation
- **Modern Stack** - React 18, TypeScript, Vite

## Tech Stack

- React 18 with TypeScript
- Vite for build tooling
- Tailwind CSS for styling
- Framer Motion for animations
- React Hook Form for form validation
- Lucide React for icons

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The development server will start at `http://localhost:5173/`

## Project Structure

```
src/
├── components/
│   ├── Header.tsx          # Sticky navigation with mobile menu
│   ├── Hero.tsx            # Hero section with CTA buttons
│   ├── ProblemSection.tsx  # AI challenges section
│   ├── SolutionSection.tsx # Hive-Mind architecture section
│   ├── PricingSection.tsx  # Service tiers
│   ├── BlogSection.tsx     # Blog preview cards
│   ├── Footer.tsx          # Footer with contact info
│   ├── ContactModal.tsx    # Contact form modal
│   └── MobileMenu.tsx      # Mobile navigation drawer
├── App.tsx                 # Main app component
├── main.tsx               # App entry point
└── index.css              # Global styles and Tailwind imports
```

## Sections

1. **Home** - Hero section with value proposition
2. **Our Story** - The AI gap being addressed
3. **Services** - The Hive-Mind Architecture
4. **Pricing** - Three service tiers
5. **Blog** - Latest insights
6. **Contact** - Footer with contact information

## Customization

### Colors

The color palette is defined in `tailwind.config.js`:

- Primary: Teal (#0A9396)
- Backgrounds: Dark (#001219) and Light (#E9D8A6)
- Accents: Amber (#EE9B00), Orange (#CA6702)

### Placeholder Images

All illustrations are currently placeholders (colored divs with SVG). Replace them with actual images:

- Hero illustration
- Problem section cards (3)
- Pricing service icons (3)
- Blog post images (3)
- Contact modal illustration

### Contact Form

The contact form currently logs to console. Connect it to your backend or email service:

Edit `src/components/ContactModal.tsx`:

```typescript
const onSubmit = (data: ContactFormData) => {
  // TODO: Connect to your backend
  console.log('Form submitted:', data);
};
```

## License

© 2025 Northern Forge AI Limited. All rights reserved.

## Development

Built with Claude Code - AI-powered development assistant.
