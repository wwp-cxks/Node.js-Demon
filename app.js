const http = require("http");

const app = http.createServer();

app.on('request', (req, res) => {
    // console.log(req.method);
    if (req.method == 'GET') {
        res.end("gfpdsgdsgsfsdd" + req.method);
    } else {
        res.end("fail");
    }
});

app.listen(3000);
console.log('3000 is running....');