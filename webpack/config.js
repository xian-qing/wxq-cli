const env = {
    development: {
        isProduction: false
    },
    production: {
        isProduction: true
    }
}[process.env.NODE_ENV || 'development'];

module.exports = Object.assign({
    app: {
        BaseName: '/www/',
        BuildPath: '/dist/www'
    }
}, env);
