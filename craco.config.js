/* craco.config.js */
const path = require('path')
module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src/'),
      '@components': path.resolve(__dirname, 'src/components/'),
      '@constants': path.resolve(__dirname, 'src/constants/'),
      '@pages': path.resolve(__dirname, 'src/pages/'),
      '@routes': path.resolve(__dirname, 'src/routes/'),
      '@theme': path.resolve(__dirname, 'src/theme/'),
      '@utils': path.resolve(__dirname, 'src/utils/'),
    },
  },
}
