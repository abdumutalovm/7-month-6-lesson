/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        ava: "url('./src/assets/user.svg')",
        eye: "url('./src/assets/eye-slash.svg')",
        lock: "url('./src/assets/lock.svg')",
        email: "url('./src/assets/sms.svg')",
        google: "url('./src/assets/google.svg')",
      },
      backgroundColor: {
        pink: "background: linear-gradient(91.94deg, #FFA7A7 3.09%, #FF014E 139.14%)",
      },
    },
  },
  plugins: [],
};
