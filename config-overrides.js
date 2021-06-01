const {alias} = require('react-app-rewire-alias')

module.exports = function override (config) {
  alias({
    '@assets' : 'assets'
  })(config)
  
  return config
}