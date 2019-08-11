
/*在 koa2 中 GET 传值通过 request 接收，但是接收的方法有两种：query 和 querystring。
     query：返回的是格式化好的参数对象。
     querystring：返回的是请求字符串。*/
 
//获取get传值
//http://localhost:3000/newscontent?aid=123


const router = require('koa-router')
const path= "config";
const dbPath = "./db/" ; 
const {writeFile,readFile }  = require('../../util/fs-path')


// 这两行代码等同于 const router1 = require('koa-router')()
const router1 = new router()
const fs = require("fs"); 
//router1.prefix(path)

router1.get(`/config`,async (ctx)=>{
 
    //从ctx中读取get传值
    console.log(ctx.query);  //{ aid: '123' }       获取的是对象   用的最多的方式  **推荐
    console.log(ctx.querystring);  //aid=123&name=zhangsan      获取的是一个字符串
    console.log(ctx.url);   //获取url地址
    let content = {};
    try{
        content =  await readFile(dbPath +"config.json");
        content = JSON.parse(content);
    }catch(err){
    }
    ctx.response.type = 'json';
    ctx.response.body = content;

})

router1.post(`/config`,async (ctx)=>{
    const rb = ctx.request.body;
    console.log(rb);
    let value = rb.value;
    if(!value){
        ctx.response.body = 'error, 没有传入value';
        ctx.response.status = 400 ;
    }else{
        try{
            JSON.parse(value);
           await writeFile(dbPath+"config.json",value);
            ctx.response.body = '修改成功';
        }catch(err){
            console.log(err)
            ctx.response.body = 'error, 请传入正确的json字符串';
            ctx.response.status = 400 ;
        }
    }
})

module.exports = router1