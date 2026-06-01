/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  // Desativamos preflights desnecessários e o plugin de container
  // (usamos nosso próprio componente <Container>).
  corePlugins: {
    container: false,
  },
  theme: {
    extend: {
      colors: {
        // Paleta NEXLOG — corporativa, premium e global
        navy: {
          50: "#EEF2FB",
          100: "#D8E0F2",
          200: "#AEBDE2",
          300: "#7E94CC",
          400: "#4F6BB0",
          500: "#284B92",
          600: "#173778",
          700: "#0F2A60",
          800: "#0A1F4A",
          900: "#07173A",
          950: "#040E26",
        },
        graphite: {
          50: "#F4F5F7",
          100: "#E5E7EB",
          200: "#CDD1D8",
          300: "#A4ABB7",
          400: "#737B89",
          500: "#4E5562",
          600: "#363C47",
          700: "#262B34",
          800: "#1A1E25",
          900: "#11141A",
        },
        accent: {
          DEFAULT: "#22D3EE",
          50: "#ECFEFF",
          100: "#CFFAFE",
          200: "#A5F3FC",
          300: "#67E8F9",
          400: "#22D3EE",
          500: "#06B6D4",
          600: "#0891B2",
          700: "#0E7490",
          800: "#155E75",
          900: "#164E63",
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
        display: [
          "Sora",
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
      },
      letterSpacing: {
        brand: "0.18em",
      },
      boxShadow: {
        soft: "0 10px 30px -12px rgba(7, 23, 58, 0.18)",
        glow: "0 25px 60px -20px rgba(34, 211, 238, 0.45)",
        card: "0 1px 2px rgba(7, 23, 58, 0.04), 0 12px 30px -16px rgba(7, 23, 58, 0.18)",
      },
      backgroundImage: {
        "grid-faint":
          "linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)",
        "hero-radial":
          "radial-gradient(80% 60% at 20% 0%, rgba(34,211,238,0.18) 0%, transparent 60%), radial-gradient(60% 50% at 100% 20%, rgba(40,75,146,0.35) 0%, transparent 60%)",
      },
      animation: {
        "fade-in": "fadeIn 700ms ease-out both",
        "fade-up": "fadeUp 700ms ease-out both",
        float: "float 7s ease-in-out infinite",
        "pulse-soft": "pulseSoft 3.2s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%,100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulseSoft: {
          "0%,100%": { opacity: "0.55" },
          "50%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
