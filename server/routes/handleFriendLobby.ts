import { FRIENDLOBBY, STRANGERLOBBY } from '../../utils/constants';
import { Router } from 'express';
import { Socket } from 'socket.io';
import { DefaultEventsMap } from 'socket.io/dist/typed-events';
import { v4 as uuid } from 'uuid';

const router = Router();

const isReqConnected = (reqId: string, nspSockets: Map<string, Socket<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, any>>) => {
  const validSocket = nspSockets.get(reqId);
  return validSocket ? true : false;
}

router.post('/create', (req: any, res) => {
  const io = req.io;
  const nspSockets = io.of(FRIENDLOBBY).sockets;
  const socketId: string = req.body.socketId;
  const rounds: number = parseFloat(req.body.rounds);
  const isConnected = isReqConnected(socketId, nspSockets);
  
  if (!Number.isNaN(rounds) && rounds < 3 || rounds > 7) {
    res.status(400).send({ message: 'Bad Request' });
  } else if (Number.isNaN(rounds)) {
    res.status(400).send({ message: 'Bad Request' });
  } else if (!isConnected) {
    console.log({ isConnected })
    res.status(400).send({ message: 'Bad Request' });
  } else {
    const roomId = uuid();
    const socket: Socket = nspSockets.get(socketId);
    socket.join(roomId);
    res.send({ roomId });
  }
});

router.get('/validate', (req, res) => {
  const socketId = req.body.socketId;
  res.send({ message: 'Validated user room connection' });
});

export default router;