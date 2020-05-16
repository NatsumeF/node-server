const { serverPort } = require("./config/index");
const Koa = require("koa2");
const static = require('koa-static');
const registerRouter = require('./router');
var bodyParser = require('koa-bodyparser');
const formidable = require('koa2-formidable');
const cors = require("koa-cors");


const app = new Koa();
app.use(cors());
app.use(bodyParser());
app.use(registerRouter())
app.use(static('./static'));
app.listen(serverPort, () => {
    console.log(`App started on http://localhost:${serverPort}`)
});