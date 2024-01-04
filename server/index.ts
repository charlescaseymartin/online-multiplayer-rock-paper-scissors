import express, { Express } from 'express';
import * as http from 'http';
import next, { NextApiHandler } from 'next';
import { Server, Socket } from 'socket.io';
import 'dotenv/config';
import IOHandler from './io/handlers';

const port: number = parseInt(process.env.PORT || '3000', 10);
const hostname: string = process.env.HOSTNAME || 'localhost';
const dev: boolean = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev });
const nextHandler: NextApiHandler = nextApp.getRequestHandler();

nextApp.prepare().then(async () => {
    const app: Express = express();
    const server: http.Server = http.createServer(app);
    const io: Server = new Server();
    
    // connect sockets
    io.attach(server);
    io.on('connection', (socket: Socket) => IOHandler(io, socket));

    // serve web application
    app.all('*', (req: any, res: any) => nextHandler(req, res));

    server.listen(port, () => {
        console.log(`> Ready on http://${hostname}:${port}`);
    });
});