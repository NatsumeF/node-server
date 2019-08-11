const compose = require('koa-compose')
const glob = require('glob')
const { resolve } = require('path')

registerRouter = () => {
    let routers = [];
    let arr=  glob.sync(resolve(__dirname, './', '**/*.js'))
        arr.filter(value => (value.indexOf('router/index.js') === -1))
        .map(router => {
            routers.push(require(router).routes())
            routers.push(require(router).allowedMethods())
        })
    return compose(routers)
}

module.exports = registerRouter
