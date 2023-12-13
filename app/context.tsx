'use client';

import { createContext, useEffect, useState } from 'react';
import { Socket, io } from 'socket.io-client';

type ContextProviderType = {
  children: JSX.Element | JSX.Element[];
}

type AppContextType = {
  socket: Socket;
  isDarkMode: boolean;
  toggleDarkMode: (value: boolean) => void;
} | undefined;

export const AppContext = createContext<AppContextType>(undefined);

export function ContextProvider({ children }: ContextProviderType) {
  const socket = io('/', { autoConnect: false });
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = (themeMode: boolean) => {
    setIsDarkMode(themeMode);
  }

  useEffect(() => {
    if(!socket.connected) socket.connect();

    socket.on('client:connected', (data) => console.log(data));
  }, [])

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

  return (
    <AppContext.Provider value={{ socket, isDarkMode, toggleDarkMode }}>
      {children}
    </AppContext.Provider>
  )
}