/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,tsx}', './components/**/*.{js,ts,tsx}'],

  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      fontFamily: {
        'Phil-Bold': ['Phil_Bold', 'san-serif'],
        Lora_Medium: ['Lora_Medium', 'san-serif'],
      },
    },
  },
  plugins: [],
};
