import { io } from 'socket.io-client';
import { version as uuidVersion, validate as uuidValidate } from 'uuid';

type GameSessionType = {
  lobbyId: string;
  lobbyUrl: string;
}

export default class ClientIOHandler {
  socket = io();
  gameSessionKey = 'game-session';
  gameSession = {
    lobbyId: '',
    lobbyUrl: '',
  };
  friendLobbyConnectionError = '';

  __isValidateLobbyId(lobbyId: string) {
    return lobbyId && uuidValidate(lobbyId) && uuidVersion(lobbyId) === 4;
  }

  __isValidateLobbyUrl(lobbyId: string, lobbyUrl: string) {
    return lobbyUrl && this.__isValidateLobbyId(lobbyId) && lobbyUrl.includes(lobbyId);
  }

  __isValidateGameSession(gameSession: GameSessionType) {
    const isValidId = this.__isValidateLobbyId(gameSession.lobbyId);
    const isValidUrl = this.__isValidateLobbyUrl(gameSession.lobbyId, gameSession.lobbyUrl);
    return isValidId && isValidUrl;
  }

  createGameSession(lobbyId: string, lobbyUrl: string) {
    const newGameSession: GameSessionType = { lobbyId, lobbyUrl };
    if (!this.__isValidateGameSession(newGameSession)) return '';
    return newGameSession;
  }

  setGameSession(gameSession: GameSessionType) {
    const jsonGameSession = JSON.stringify(gameSession);
    return localStorage.setItem(this.gameSessionKey, jsonGameSession);
  }

  getGameSession() {
    const storedSession = localStorage.getItem(this.gameSessionKey);
    return JSON.parse(storedSession || '');
  }

  hasGameSession() {
    return this.getGameSession() ? true : false;
  }

  createFriendLobby() {
    this.socket.emit('friend-lobby:create', (response: GameSessionType) => {
      console.log(response);
      if (response && response.lobbyId && response.lobbyUrl) {
        const session = this.createGameSession(response.lobbyId, response.lobbyUrl);
        if (session) this.setGameSession(session);
      }
    });
  }

  recconnectFriendLobby() {
    const storedGame = this.getGameSession();
    this.socket.emit('friend-lobby:join', storedGame, (response: { message: string }) => {
      if(response.message == 'Invalid Game Session.') return this.friendLobbyConnectionError = response.message; 
      if(response.message == 'Lobby Is Full.') return this.friendLobbyConnectionError = response.message;
      
    });
  }

  playWithFriend() {
    if(this.hasGameSession()) {
      this.recconnectFriendLobby();
    } else {
      this.createFriendLobby();
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