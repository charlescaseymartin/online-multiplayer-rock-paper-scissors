import { IOServerType, IOSocketType } from "../types";


export default (io: IOServerType, socket: IOSocketType) => {
  socket.emit('stranger:connected', { message: 'You are connected to stranger lobby', id: socket.id });
}