#Emrin and Radit consultants - React & Tailwind Web Application

A full-featured modular React application inspired by Emrin and Radit consultants (Emrin and Radit consultants.ae), built for UAE corporate and personal financial consultancy services.

## Project Structure

```
Emrin and Radit consultants-web/
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── index.html
├── README.md
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    └── components/
        ├── TopBar.jsx
        ├── Navbar.jsx
        ├── HeroSection.jsx
        ├── ServicesSection.jsx
        ├── CalculatorSection.jsx
        ├── AboutSection.jsx
        ├── FaqsSection.jsx
        ├── ContactSection.jsx
        ├── Footer.jsx
        └── ServiceModal.jsx
```

## Features Included

1. **Modular Component Architecture**: Separated logic into individual `.jsx` files under `src/components/`.
2. **Interactive Loan & EMI Calculator**: Real-time monthly installment estimations.
3. **Contact Section with Google Maps**: Dubai Business Bay location map & quick callback form.
4. **Responsive Navigation**: Hamburger drawer on mobile devices with exact menu items (**Home**, **Services**, **Calculator**, **About**, **Contact**).

## Getting Started

1. Extract the `.zip` archive.
2. Open terminal in the project directory:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Build for production:
   ```bash
   npm run build
   ```
