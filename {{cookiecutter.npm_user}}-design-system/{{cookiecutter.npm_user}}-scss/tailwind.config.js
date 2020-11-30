const path = require('path');

let config = require('@yumastudio/blockx-scss/tailwind.config.js')
config.theme.colors = require(path.join(__dirname, './config/colors.json'))

module.exports = config
