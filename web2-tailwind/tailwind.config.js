/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
     "bgHeader":"rgba(22, 22, 23, .8)",
     "bgDropdDown" : "rgba(22, 22, 23, 1)",
     "bgfooter" : "#f5f5f7"
     })
  },
  plugins: [],
}

