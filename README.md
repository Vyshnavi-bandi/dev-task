# React JS Assignment

This project is a **React JS implementation** of the given UI designs as part of a **developer task assignment**.  
The application includes multiple screens such as **Home, Login, Signup, and Profile**, built with a clean and scalable approach.

---

## 🛠️ Tech Stack

- React JS
- React Router DOM
- SCSS (Modules, Variables & Mixins)
- Vite
- React Lazy & Suspense

---

## ✨ Features

- Pixel-aligned UI based on the provided design
- Reusable components (Input, Button)
- Clean and maintainable component structure
- Centralized SCSS variables for colors,borders and fonts
- Reusable SCSS mixins for common layout patterns
- Route-based code splitting using `React.lazy`
- Modular and scoped styling using SCSS Modules

---

## 🧩 Reusable Components

### Input Component
- Used across Login and Signup pages
- Supports label, placeholder, and required indicator
- Styled using modular SCSS

### Button Component
- Variant-based styling (primary, disabled)
- Reused across multiple screens

---

## ⚡ Performance Optimization

- Implemented **route-level code splitting**
- Pages are lazy-loaded using `React.lazy` and `Suspense`
- Improves initial load performance

---

## 🎨 Styling Approach

- SCSS Modules to avoid global style conflicts
- Centralized design tokens using `_variables.scss`
- Common layout and UI patterns abstracted into `_mixins.scss`
- Nested SCSS for better readability and scalability

---

## ▶️ Run the Project Locally

```bash
npm install
npm run dev
