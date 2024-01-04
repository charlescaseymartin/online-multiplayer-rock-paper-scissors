import { IOServerType, IOSocketType } from "../types";


export default (io: IOServerType, socket: IOSocketType) => {
  console.log('stranger lobby connection made by:', socket.id);
  socket.emit('stranger:connected', { message: 'You are connected to stranger lobby', id: socket.id });
}