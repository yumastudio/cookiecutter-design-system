const plugin = require('tailwindcss/plugin')
const config = require('@{{ cookiecutter.npm_user }}/design-system-scss/tailwind.config.js')

config.plugins = [
  plugin(function({ addComponents, theme }) {
    const alert = {
      '.alert': {
        '&StateSuccess': {
          background: theme('colors.red.default')
        },
        '&StateCaution': {
          background: theme('colors.green.default')
        },
        '&StateWarning': {
          background: theme('colors.yellow.300'),
          color: theme('colors.yellow.500')
        },
        '&StateInfo': {
          background: theme('colors.blue.default')
        }
      }
    }
    addComponents(alert)
  })
]

module.exports = config
