import type { Config } from "tailwindcss"
import plugin from "tailwindcss/plugin"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        blink: {
          '0%': { opacity: '1' },
          '50%': { opacity: '0' },
          '100': { opacity: '1' },
        },
        'bounce-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          }
        },
        scroll: {
          '0%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
          '50%': {
            opacity: '1',
            transform: 'translateY(7px)',
          }
        }
      },
      animation: {
        blink: 'blink .7s infinite',
        'bounce-up': 'bounce-up .5s ease-out',
        scroll: 'scroll 1.5s ease infinite'

      },
      colors: {
        red: {
          450: '#f16236'
        }
      },
      fontSize: {
        '2xs': '.625rem' 
      },
      margin: {
        '18': '4.375rem'
      },
      screens: {
        '3xs': '360px',
        '2xs': '375px',
        'xs': '425px',
        'mdl': '853px',
        'tall': {'raw': '(min-height: 700px)'},
      },
      transitionProperty: {
        'width-opacity': 'width, opacity',
      },
      transitionDuration: {
        '0': '0ms',
        '200': '200ms',
      },
      transitionDelay: {
        '200': '200ms',
      },
      transitionTimingFunction: {
        'linear': 'linear',
        'custom-ease': 'cubic-bezier(.3,0,.5,1)',
      },
    },
  },
  plugins: [
    plugin(function({ matchUtilities, theme }) {
      matchUtilities(
        {
          'translate3d-0': () => {
            return {
              transform: 'translate3d(0, 0, 0)',
            }
          }
        },
        { values: theme('translate'), supportsNegativeValues: true }
      )
    }),
    plugin(function({ matchUtilities, theme }) {
      matchUtilities(
        {
          'translate-z': (value) => ({
            '--tw-translate-z': value,
            transform: ` translate3d(var(--tw-translate-x), var(--tw-translate-y), var(--tw-translate-z)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))`,
          }),
        },
        { values: theme('translate'), supportsNegativeValues: true }
      )
    }),
    plugin(function({ matchUtilities, theme }) {
      matchUtilities(
        {
          'transition-custom': (value) => ({
            transition: value,
          }),
        },
        {
          values: {
            'width-opacity': 'width 0s linear 0.2s, opacity 0.2s cubic-bezier(.3,0,.5,1) 0.2s'
          }
        }
      )
    }),
  ],
}
export default config
