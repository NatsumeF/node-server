const {serverPort}  =  require("./config/index") ;
const Koa = require("koa2")
const static = require('koa-static');
const registerRouter  = require('./router')
var bodyParser = require('koa-bodyparser');



const app = new Koa();
app.use(async (ctx, next)=> {
    ctx.set('Access-Control-Allow-Origin', '*');
    ctx.set('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    ctx.set('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    if (ctx.method == 'OPTIONS') {
      ctx.body = 200; 
    } else {
      await next();
    }
  });
app.use(static('./static'));
app.use(bodyParser());
app.use(registerRouter())
app.listen(serverPort, () => {
    console.log(`App started on http://localhost:${serverPort}`)
});