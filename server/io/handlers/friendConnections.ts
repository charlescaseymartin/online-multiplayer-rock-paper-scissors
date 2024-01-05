import { IOServerType, IOSocketType } from "../types";
import { v4 as uuid, version as uuidVersion, validate as uuidValidate } from 'uuid';

type ResponseHandlerType = (arg: any) => void;

type GameSessionType = { 
  lobbyId: string; 
  lobbyUrl: string;
};

const FriendLobbySocketPrefix = 'friend-lobby';

const generateFriendLobbyUrl = (lobbyId: string) => {
  const protocol = process.env.NODE_ENV !== 'production' ? 'http://' : 'https://';
  const hostname = process.env.HOSTNAME || '';
  return `${protocol}${hostname}/arena/${lobbyId}/`;
}

const isValidGameSession = (session: GameSessionType) => {
  const isValidLobbyId = session.lobbyId && uuidVersion(session.lobbyId) === 4 && uuidValidate(session.lobbyId);
  const isValidLobbyUrl = session.lobbyUrl && isValidLobbyId && session.lobbyUrl.includes(session.lobbyId);
  return session && isValidLobbyId && isValidLobbyUrl;
}

const createLobby = (socket: IOSocketType, responseHandler: ResponseHandlerType) => {
  const lobbyId = uuid();
  socket.join(lobbyId);
  console.log({ currentUsersRooms: socket.rooms });
  const lobbyUrl = generateFriendLobbyUrl(lobbyId);
  responseHandler({ lobbyId, lobbyUrl });
}

const joinLobby = async (io: IOServerType, socket: IOSocketType, gameSession: GameSessionType, responseHandler: ResponseHandlerType) => {
  if (!isValidGameSession(gameSession)) return responseHandler({ message: 'Invalid Game Session.' });
  console.log(gameSession);
  const playersConnected = await io.in(gameSession.lobbyId).fetchSockets();
  if(playersConnected.length > 1) return responseHandler({ message: 'Lobby Is Full.' });
  socket.join(gameSession.lobbyId);
  return responseHandler({ message: 'Joined Lobby.' });
}

export default (io: IOServerType, socket: IOSocketType) => {
  socket.on(`${FriendLobbySocketPrefix}:create`, (callback) => createLobby(socket, callback));
  socket.on(`${FriendLobbySocketPrefix}:join`, (gameSession, callback) => joinLobby(io, socket, gameSession, callback));
}