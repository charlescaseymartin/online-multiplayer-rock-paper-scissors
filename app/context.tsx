'use client';

import { createContext, useEffect, useState } from 'react';
import ClientIOHandler from './client-io';

type ContextProviderType = {
  children: JSX.Element | JSX.Element[];
}

type AppContextType = {
  socket: ClientIOHandler;
  isDarkMode: boolean;
  // lobby: ClientSocketLobbies | null;
  // selectLobby: (value: ClientSocketLobbies) => void;
  toggleDarkMode: (value: boolean) => void;
} | undefined;

// export enum ClientSocketLobbies {
//   friend = '/friend-lobby',
//   stranger = '/stranger-lobby',
// }

const clientIOHandler = new ClientIOHandler();

export const AppContext = createContext<AppContextType>(undefined);

export function ContextProvider({ children }: ContextProviderType) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const socket = clientIOHandler;
  
  const toggleDarkMode = (themeMode: boolean) => {
    setIsDarkMode(themeMode);
  }

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

  const providerValue: AppContextType = { 
    socket, 
    isDarkMode, 
    toggleDarkMode 
  };

  return (
    <AppContext.Provider value={providerValue}>
      {children}
    </AppContext.Provider>
  )
}