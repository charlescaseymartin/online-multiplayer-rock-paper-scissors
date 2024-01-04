import { Socket, io } from 'socket.io-client';
import { DefaultEventsMap } from 'socket.io/dist/typed-events';
// import { ClientSocketLobbies } from '@/app/context';

type ClientIOSocketType = Socket<DefaultEventsMap, DefaultEventsMap> | null;

type FriendLobbyCreatedResponse = {
  roomId: string;
};

export default class ClientIOHandler {
  socket: ClientIOSocketType = null;
  roomIdKey = 'roomId';

  constructor() {
    if (!this.socket || !this.socket.active) {
      this.socket = io();
    }
  }

  getStoredRoomId() {
    return localStorage.getItem(this.roomIdKey);
  }

  hasStoredRoomId() {
    return this.getStoredRoomId() ? true : false;
  }

  createFriendLobby() {
    if (this.socket) {
      this.socket.emit('friend-lobby:create', (response: FriendLobbyCreatedResponse) => {
        console.log(response);
        if (response.roomId) localStorage.setItem(this.roomIdKey, response.roomId);
      })
    }
  }

  playWithStranger() {
    console.log('Create a new lobby and send players to the arena');
    if (this.socket) {
      this.socket.emit('stranger-lobby:create', () => {
        // console.log(response);
        // if (response.roomId) localStorage.setItem(this.roomIdKey, response.roomId);
      })
    }
  }
}