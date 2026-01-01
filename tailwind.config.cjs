/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3D0066",
        "primary-hover": "#2A0046",
        "primary-light": "#6D28D9",
        secondary: "#10B981",
        danger: "#EF4444",
        warning: "#F59E0B",
        "background-light": "#F9FAFB",
        "background-dark": "#0F172A",
        "surface-light": "#FFFFFF",
        "surface-dark": "#1E293B",
        "text-light": "#111827",
        "text-dark": "#F3F4F6",
        "text-muted-light": "#6B7280",
        "text-muted-dark": "#9CA3AF",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: "0.5rem",
        'xl': "0.75rem",
        '2xl': "1rem",
        '3xl': "1.5rem",
      },
      backgroundImage: {
        'grid-pattern': "linear-gradient(to right, #e5e7eb 1px, transparent 1px), linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)",
        'grid-pattern-dark': "linear-gradient(to right, #374151 1px, transparent 1px), linear-gradient(to bottom, #374151 1px, transparent 1px)",
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/container-queries'),
  ],
}
