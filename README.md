# Kicks - Premium Sneaker E-commerce

Kicks is a high-performance, visually stunning e-commerce platform dedicated to sneaker enthusiasts. Built with a focus on premium aesthetics, responsive design, and a seamless user experience.

## 🚀 Live Demo
[View Live Site](https://kicks-naim0018.vercel.app)

## ✨ Features
- **Modern UI/UX**: Premium design with smooth animations and transitions.
- **Fully Responsive**: Optimized for every device, from mobile phones to high-resolution desktops.
- **Dynamic Search**: Real-time product search with debounced API calls.
- **Cart Management**: Robust state management for adding, updating, and removing items.
- **Product Details**: Immersive product views with size selection and image galleries.
- **Fast Performance**: Built on Vite for lightning-fast development and deployment.

## 🛠️ Tech Stack
- **Frontend**: React (Functional Components, Hooks)
- **Styling**: Tailwind CSS (JIT mode)
- **State Management**: Redux Toolkit (RTK Query for API integration)
- **Routing**: React Router DOM v6
- **Icons**: Lucide React, React Icons
- **Animations**: Framer Motion
- **Notifications**: Sonner (Toast notifications)

## 📦 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/naim0018/Kicks.git
   ```
2. Navigate to the project directory:
   ```bash
   cd Kicks
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Running Locally
To start the development server:
```bash
npm run dev
```

### Building for Production
To create a production-ready bundle:
```bash
npm run build
```

## 📝 Notes
- The project follows a clean architecture with separate components for public pages and shared UI elements.
- Design tokens are managed via Tailwind CSS and global CSS variables in `src/index.css`.
- API integration is handled through RTK Query for efficient data fetching and caching.
