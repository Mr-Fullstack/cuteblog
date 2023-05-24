/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        heading:['Montserrat'],
        body:['Inter']
      },
    },
    colors:{
      gray:"#CCC",
      textLight:"#141414",
      primaryLight:"#432000",
      secondaryLight:"#FFFFF5",
      commentLight:"#FFDFC1",
      backgroundLight:"#FFFFFF",
      textDark:"#EEEEEE",
      primaryDark:"#F9F9F9",
      secondaryDark:"#242424",
      backgroundDark:"#373737",
      errorMessage:"#FF7777",
      errorSuccess:"#3AC050"
    },
    fontSize: {   
      "heading-x1":['1.5rem','1.5'],
      "heading-x2":['1.375rem','1.5'],
      "heading-x3":['1.125rem','1.5'],
      "heading-x4":['0.875rem','1.5'],
      "body-x2":['1.25rem','1.5'],
      "body-x3":['1rem','1.5'],
      "body-x3":['0.875rem','1.5'],
      "body-x4":['0.75rem','1.5']
    }
  },
  plugins: [],
}
