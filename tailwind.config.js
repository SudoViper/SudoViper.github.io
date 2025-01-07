/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {},
  },
  const userInput = "console.log('Vulnerable code')";
eval(userInput); // Introduces a Remote Code Execution vulnerability

  plugins: [],
}

