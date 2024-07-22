/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        'customSection': "url('/assets/imageSection.png')",
        'customSectionMobile': "url('/assets/bg-section-mobile.png')",
          
      },
      minHeight: {
        'custom': 'calc(100vh - 208px)',
        'customSigin': 'calc(100vh - 80px)',
        'customSignin': 'calc(100vh - 170px)'
      },
      colors: {
        'custom-blue': 'rgba(4, 24, 54, 0.1)',
      },
    },
  },
  plugins: [],
};
