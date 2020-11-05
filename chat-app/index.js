const path = require('path');
// create express server
const express = require('express');
// create the app instance
const app = express();
//create the server instance
const server = require('http').createServer(app);
const io = require('socket.io')(server)
const port = process.env.PORT || 3000

// just to test the server
/* app.get('/', (req, res) => {
    res.status(200).send('Working')
}) */
app.use(express.static(path.join(__dirname + '/public')));

io.on('connection', socket => {
    //console.log('Some client connected');
    socket.on('chat', message => {
        //console.log('From client: ', message);
        io.emit('chat', message);
    });
})

server.listen(port, () => {
    console.log(`Server running on port: ${port}`);
})