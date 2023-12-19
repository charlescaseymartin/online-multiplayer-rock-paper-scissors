import express, { Express } from 'express';
import * as http from 'http';
import next, { NextApiHandler } from 'next';
import { Server, Socket } from 'socket.io';
import 'dotenv/config';
import handleFriendLobby from './routes/handleFriendLobby';
import { FRIENDLOBBY, STRANGERLOBBY } from '../utils/constants';

const port: number = parseInt(process.env.PORT || '3000', 10);
const hostname: string = process.env.HOSTNAME || 'localhost';
const dev: boolean = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev });
const nextHandler: NextApiHandler = nextApp.getRequestHandler();

nextApp.prepare().then(async () => {
    const app: Express = express();
    const server: http.Server = http.createServer(app);
    const io: Server = new Server();
    io.attach(server);

    io.of(FRIENDLOBBY).on('connection', (socket: Socket) => {
        console.log('friend lobby connection made by:', socket.id);
        socket.on('friend:join', (data) => console.log(data));
    });

    io.of(STRANGERLOBBY).on('connection', (socket: Socket) => {
        console.log('stranger lobby connection made by:', socket.id);
        socket.emit('stranger:connected', { message: 'You are connected to stranger lobby', id: socket.id });
    });

    app.use(express.json());
    app.use((req: any, res, next) => {
        req.io = io;
        next();
    })
    app.use(FRIENDLOBBY, handleFriendLobby);
    app.all('*', (req: any, res: any) => nextHandler(req, res));

    server.listen(port, () => {
        console.log(`> Ready on http://${hostname}:${port}`);
    });
});