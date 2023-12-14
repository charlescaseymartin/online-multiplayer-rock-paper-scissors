import express, { Express } from 'express';
import * as http from 'http';
import next, { NextApiHandler } from 'next';
import * as socketio from 'socket.io';
import 'dotenv/config';
import handleInviteForm from './routes/handleInviteForm';

const port: number = parseInt(process.env.PORT || '3000', 10);
const hostname: string = process.env.HOSTNAME || 'localhost';
const dev: boolean = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev });
const nextHandler: NextApiHandler = nextApp.getRequestHandler();

nextApp.prepare().then(async() => {
    const app: Express = express();
    const server: http.Server = http.createServer(app);
    const io: socketio.Server = new socketio.Server();
    io.attach(server);

    io.on('connection', (socket: socketio.Socket) => {
        console.log('connection made by:', socket.id);
        socket.emit('client:connected', { message: 'You are connected', id: socket.id });
    });

    app.use('/invite-form', handleInviteForm);
    app.all('*', (req: any, res: any) => nextHandler(req, res));

    server.listen(port, () => {
        console.log(`> Ready on http://${hostname}:${port}`);
    });
});