const express = require('express')
const app = express()
const http = require('http').createServer(app)
var io = require('socket.io')(http);

app.get(' / ', function(req, res){
    res.send('<h1>Hello World</h1>')
})

io.on('connection', function (socket){
    console.log(' A user is connected')
})

http.listen(3001, function (){
    console.log('listening on * :3001')
})
