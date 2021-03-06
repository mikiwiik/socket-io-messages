import http from 'http';
import socketio from 'socket.io';

import messages from './messages.js';

const server = http.createServer();
const io = socketio(server)
    .on('connection', (client) => {
        client.on('get-messages', () =>
            io.emit('messages', messages.get())
        );

        client.on('add-message', () =>
            io.emit('message-added', messages.add())
        );

        client.on('toggle-message', (messageId) =>
            io.emit('message-updated', messages.toggle(messageId))
        );

        client.on('disconnect', () =>
            console.log('disconnect')
        );
    });

server.listen(8080, () => {
    console.log('API started');
});