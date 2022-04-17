module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      height: {
        '75vh': '75vh'
      },
      colors: {
        dark: {
          primary: {
            DEFAULT: '#212121',
            light: '#484848',
            dark: '#000000'
          },
          secondary: {
            DEFAULT: '#64ffda',
            light: '#9effff',
            dark: '#14cba8'
          }
        },
        light: {
          primary: {
            DEFAULT: '#eceff1',
            light: '#ffffff',
            dark: '#babdbe'
          },
          secondary: {
            DEFAULT: '#263238',
            light: '#4f5b62',
            dark: '#000a12'
          }
        }
      }
    },
    fontFamily: {
      montserrat: ['Montserrat']
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp')
  ]
}
