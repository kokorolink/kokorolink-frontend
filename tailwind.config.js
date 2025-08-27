/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: { extend: {} },
  safelist: [
    // Keep the accent variants we reference dynamically
    { pattern: /(bg|text|ring)-(indigo|amber|rose)-(50|400|600|700)/ }
  ],
  plugins: [],
};
