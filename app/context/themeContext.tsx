'use client';

import { createContext, useEffect, useState } from 'react'

type ThemeContextProviderType = {
  children: JSX.Element | JSX.Element[];
}

type AppThemeContextType = {
  isDarkMode: boolean;
  toggleDarkMode: (value: boolean) => void;
} | undefined;

export const AppThemeContext = createContext<AppThemeContextType>(undefined);

export function ThemeContextProvider({ children }: ThemeContextProviderType) {
  const [isDarkMode, setIsDarkMode] = useState(false);

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

  useEffect(() => console.log({ isDarkMode }), [isDarkMode])

  return (
    <AppThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </AppThemeContext.Provider>
  )
}