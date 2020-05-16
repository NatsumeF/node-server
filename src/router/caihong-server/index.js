/*在 koa2 中 GET 传值通过 request 接收，但是接收的方法有两种：query 和 querystring。
     query：返回的是格式化好的参数对象。
     querystring：返回的是请求字符串。*/

//获取get传值
//http://localhost:3000/newscontent?aid=123


const router = require('koa-router')
const path = "caihong";
const https = require("https");

// 这两行代码等同于 const router1 = require('koa-router')()
const router2 = new router()
    //router1.prefix(path)

const getData = () => {
    return new Promise((resolve, reject) => {
         https.get("https://chp.shadiao.app/api.php", (res) => {
            res.on('data', (d) => {
                let content = {};
                content.data = d.toString();
                resolve(content)
            });
        }).on('error', (e) => {
            console.error(e);
            reject()
        });
    })
}


router2.get(`/${path}`, async (ctx) => {
    const data = await getData();
    ctx.response.type = 'json';
    ctx.response.body = data;
})



module.exports = router2;