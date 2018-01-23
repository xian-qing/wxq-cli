let proxy =  { // 代理
  '/api/': {
    target: 'http://www.jggvip.com',
    changeOrigin: true,
    //secure: false
  },
  '/admin/': {
    target: 'http://127.0.0.1:4010',
    changeOrigin: true,
    //secure: false
  },
  '/admin-graphql':{
    target: 'http://127.0.0.1:4010',
    changeOrigin: true,
  },
}

module.exports = proxy