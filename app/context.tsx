'use client';

import { createContext, useEffect, useState } from 'react';
import { Socket, io } from 'socket.io-client';

type ContextProviderType = {
  children: JSX.Element | JSX.Element[];
}

type AppContextType = {
  socket: Socket | null;
  isDarkMode: boolean;
  lobby: ClientSocketLobbies | null;
  selectLobby: (value: ClientSocketLobbies) => void;
  toggleDarkMode: (value: boolean) => void;
} | undefined;

export enum ClientSocketLobbies {
  friend = '/friend-lobby',
  stranger = '/stranger-lobby',
}

export const AppContext = createContext<AppContextType>(undefined);

export function ContextProvider({ children }: ContextProviderType) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [socket, setSocket] = useState<Socket | null>(null);
  const [lobby, setLobby] = useState<ClientSocketLobbies | null>(null);
  
  const toggleDarkMode = (themeMode: boolean) => {
    setIsDarkMode(themeMode);
  }
  
  const selectLobby = (lobby: ClientSocketLobbies | null) => setLobby(lobby);

  useEffect(() => {
    const appTheme = localStorage.getItem('appTheme');
    const docElement = document.documentElement;
    const themeSwitchBtn = document.querySelector('[data-switch-theme]') as HTMLButtonElement;
    
    if (appTheme === 'dark' || !appTheme && window.matchMedia('(perfers-color-scheme: dark)').matches) {
      docElement.classList.add('dark');
      themeSwitchBtn.children[0].classList.add('hidden');
      themeSwitchBtn.children[1].classList.remove('hidden');
      setIsDarkMode(true);
    } else {
      docElement.classList.remove('dark');
      themeSwitchBtn.children[0].classList.remove('hidden');
      themeSwitchBtn.children[1].classList.add('hidden');
      setIsDarkMode(false);
    }
  }, [])

  useEffect(() => {
    if (lobby) {
      const clientSocket = io(lobby);
      setSocket(clientSocket);
    } else {
      setSocket(null);
    }
  }, [lobby])
  
  const providerValue: AppContextType = { 
    socket, 
    lobby, 
    isDarkMode, 
    selectLobby, 
    toggleDarkMode 
  };

  return (
    <AppContext.Provider value={providerValue}>
      {children}
    </AppContext.Provider>
  )
}