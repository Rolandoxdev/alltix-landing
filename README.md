# Alltix Landing Page

Professional SaaS landing page for Alltix - Smart ticketing platform for large-scale events.

## Features

- Modern, responsive design optimized for all devices
- Material UI v7 with custom theme
- Atomic Design System architecture
- Custom typography (Inter + Plus Jakarta Sans)
- Alltix brand colors (#FF6B00)
- Lucide React icons
- 8 sections: Navbar, Hero, Problem, Solution, Features, Audience, Early Access, CTA, Footer

## Tech Stack

- **React 19.2.0** - Modern UI library
- **Vite** - Fast build tool
- **Material UI v7.3.7** - Component library
- **Lucide React** - Modern icon set
- **Google Fonts** - Inter & Plus Jakarta Sans

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Build

```bash
npm run build
```

Production files will be generated in the `dist/` folder.

## 📁 Project Structure

```
src/
├── components/
│   ├── atoms/          # Reusable atomic components
│   │   └── Button/     # Custom button with variants
│   ├── Navbar.jsx      # Navigation bar with logo
│   ├── Hero.jsx        # Hero section with CTA
│   ├── Problem.jsx     # Problem statement cards
│   ├── Solution.jsx    # Solution showcase
│   ├── Features.jsx    # Feature highlights
│   ├── Audience.jsx    # Target audience segments
│   ├── EarlyAccess.jsx # Email signup form
│   ├── CTA.jsx         # Call-to-action section
│   └── Footer.jsx      # Footer with links
├── assets/             # Images and static files
├── theme.js            # MUI theme configuration
└── App.jsx             # Main app component
```

## Design System

### Colors
- **Primary Orange**: #FF6B00
- **Background**: #FFFFFF, #F5F5F5, #FAFAFA
- **Text Primary**: #1A1A1A
- **Text Secondary**: #666666
- **Accent Blue**: #D1FAE5 / #0369A1

### Typography
- **Headings**: Plus Jakarta Sans (600, 700, 800)
- **Body**: Inter (400, 500, 600, 700)

### Button Variants
- `primary` - Orange filled button
- `secondary` - Outlined button
- `text` - Text-only button


## License

Private - All rights reserved
