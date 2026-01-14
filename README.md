# Camila Mendez - ML Engineer & Data Scientist Portfolio

A professional portfolio website showcasing my skills, projects, and experience in Machine Learning and Data Science.

## Features

- **Modern and Clean Design**: Professional presentation with ample whitespace and subtle animations
- **Data-Oriented Visuals**: Visualizations that represent my data-focused approach
- **Bilingual Support**: Available in both English and Spanish
- **Responsive Layout**: Optimized for all device sizes
- **Interactive Elements**: Dynamic sections with subtle motion effects
- **Performance Optimized**: Fast loading and smooth scrolling

## Tech Stack

- **Next.js**: React framework for production
- **TypeScript**: Type-safe code
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **Vercel**: Hosting and deployment

## Installation and Setup

```bash
# Clone the repository
git clone https://github.com/yourusername/camila-portfolio.git

# Navigate to the project
cd camila-portfolio

# Install dependencies
npm install

# Run development server
npm run dev
```

The site will be available at `http://localhost:3000`

## Project Structure

```
/src
  /app                   # Next.js app directory
    /components          # React components
      /shared            # Reusable component parts
    /context             # React context providers
    /globals.css         # Global styles
    /page.tsx            # Main page component
    /layout.tsx          # Root layout
  /public                # Static assets
    /images              # Image files
    /icons               # Icon files
```

## Deployment

This portfolio is configured for seamless deployment on Vercel:

```bash
# Build for production
npm run build

# Deploy to Vercel
vercel
```

## Customization

To customize this portfolio for your own use:

1. Update personal information in `LanguageContext.tsx`
2. Replace project images in the `/public` directory
3. Modify project data in `ProjectsSection.tsx`
4. Update skills and experience in respective components
5. Replace contact information in `ContactSection.tsx`

## Credits

- Design and Development: Camila Mendez
- Icons: [Heroicons](https://heroicons.com)
- Fonts: Google Fonts (Montserrat, Space Grotesk)

## License

This project is licensed under the MIT License - see the LICENSE file for details.