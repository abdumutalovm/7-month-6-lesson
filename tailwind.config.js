/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        ava: "url('./public/user.svg')",
        eye: "url('./public/eye-slash.svg')",
        lock: "url('./public/lock.svg')",
        email: "url('./public/sms.svg')",
        google: "url('./public/google.svg')",
      },
      backgroundColor: {
        pink: "background: linear-gradient(91.94deg, #FFA7A7 3.09%, #FF014E 139.14%)",
      },
    },
  },
  plugins: [],
};
