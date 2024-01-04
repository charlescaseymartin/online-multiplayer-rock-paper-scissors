import { IOServerType, IOSocketType } from "../types";
import { v4 as uuid } from 'uuid';


type ResponseHandlerType = (arg: any) => void;

const FriendLobbySocketPrefix = 'friend-lobby';

const generateFriendLobbyUrl = (roomId: string) => {
  const protocol = process.env.NODE_ENV !== 'production' ? 'http://' : 'https://';
  const hostname = process.env.HOSTNAME || '';
  return `${protocol}${hostname}/arena/${roomId}/`;
}

/*
  create roomId
  assign current user to roomId
  create connection url
  send back roomId and url  
*/
function createLobby(socket: IOSocketType, responseHandler: ResponseHandlerType) {
  const roomId = uuid();
  socket.join(roomId);
  console.log({ currentUsersRooms: socket.rooms });
  const friendLobbyUrl = generateFriendLobbyUrl(roomId);
  responseHandler({ roomId, friendLobbyUrl });
}

function joinRoom(data: any) {
  console.log(data);
}

export default (io: IOServerType, socket: IOSocketType) => {
  console.log('friend lobby connection made by:', socket.id);
  
  socket.on(`${FriendLobbySocketPrefix}:create`, (callback) => createLobby(socket, callback));
  socket.on(`${FriendLobbySocketPrefix}:join`, joinRoom);
}