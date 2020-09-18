const express = require('express');
const bodyParser = require('body-parser');
const { request } = require('express');
const app = express();
// 设置允许跨域访问该服务

// 启动静态资源服务
app.use(express.static('public'));

// 处理请求参数
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*'); //这个表示任意域名都可以访问，这样写不能携带cookie了。
    //res.header('Access-Control-Allow-Origin', 'http://www.baidu.com'); //这样写，只有www.baidu.com 可以访问。
    res.header('Access-Control-Allow-Headers', ['X-Required-With', 'Content-Type', 'mytoken']);
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS'); //设置方法
    next();
});

// 配置路由
app.get('/fdata', (req, res) => {
    res.send('Hello Fetch!')
});
app.get('/books', (req, res) => {
    res.send('传统的url传递参数' + req.query.id)
});
app.get('/books/:id', (req, res) => {
    res.send('Restful形式的URL传递参数' + req.params.id)
});
app.delete('/books/:id', (req, res) => {
    res.send('DELET请求传递参数' + req.params.id)
});
app.post('/books', (req, res) => {
    res.send('POST请求传递参数' + req.body.uname + '--' + req.body.pwd)
});
app.put('/books/:id', (req, res) => {
    res.send('PUT请求传递参数' + req.params.id + '--' + req.body.uname + '--' + req.body.pwd)
});
app.get('/json', (req, res) => {
    res.json({
        uname: 'lisi',
        age: 13,
        gender: 'male'
    });
});
app.get('/adata', (req, res) => {
    res.send('Hello axios!')
});
app.get('/axios', (req, res) => {
    res.send('axios get传递参数：' + req.query.id)
});
app.get('/axios/:id', (req, res) => {
    res.send('axios get（Restful）传递参数：' + req.params.id)
});
app.delete('/axios', (req, res) => {
    res.send('axios delete（Restful）传递参数：' + req.query.id)
});
app.post('/axios', (req, res) => {
    res.send('axios post传递参数：' + req.body.uname + '--' + req.body.pwd)
});
app.put('/axios/:id', (req, res) => {
    res.send('axios put传递参数：' + '--' + req.body.pwd + '--' + req.body.uname + '--' + req.params.id)
});
app.put('/axios-json', (req, res) => {
    res.json({
        uname: 'lisi',
        age: 12
    });
});

app.get('/a1', (req, res) => {
    setTimeout(() => {
        res.send('Hello World!')
    }, 1000);
});
app.get('/a2', (req, res) => {
    setTimeout(() => {
        res.send('Hello Tom!')
    }, 2000);
});
app.get('/a3', (req, res) => {
    setTimeout(() => {
        res.send('Hello Jerry!')
    }, 3000);
});

// 监听端口
app.listen(3000, () => {
    console.log('running...');
});