const proxy = {
  _proxy: {
    proxy: {
      '/api/(.*)': 'http://mofish.pro',
      '/files/(.*)': 'https://mofish.pro'
    }
  },
  'POST /api/dne': {
    message: 'Nice! you\'ve made it!!!'
  }
}

module.exports = proxy
