const express = require('express')

const app = express()

//解析post请求获取不到参数的问题
app.use(express.urlencoded({express:true}))

//暴露静态资源
app.use(express.static(__dirname + '/static'))

//路由
app.get('/',(request,response) =>{
    //获取get请求参数
    const {name,age} = request.query;

    response.send(`<h1>你好${name},你的年龄是${age}`)
    // response.send('<h1>我是主页</h1>')
})

app.post('/',(request,response) =>{
        //获取post请求参数
    console.log(request.body)

    const {name,passwd} = request.body;

    response.send(`<h1>你好${name},你的密码是${passwd}<h1>`)

})

app.listen(3000,(err) =>{
    if(err) console.log(err)
    else console.log("服务器启动成功")
})