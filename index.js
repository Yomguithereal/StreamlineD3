
class Streamline {
    constructor(server) {
        this.io = require('socket.io').listen(server);
        this.connections = [];
    }

    connect(func) {
        this.io.sockets.on('connection', (socket) => {
            let newSocket = socket;
            this.connections.push(socket);
            console.log('CONNECTED: %s SOCKETS CONNECTED', this.connections.length)

            socket.on('disconnect', (data) => {
                this.connections.splice(this.connections.indexOf(socket), 1);
                console.log('CONNECTED: %s SOCKETS CONNECTED', this.connections.length);
            });
            return func(socket);
        })
    }

    line(socket, data) {
        setInterval(() => {
            socket.emit('sendStreamData', data);
        }, 1000);
    }
}

module.exports = Streamline;