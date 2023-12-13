'use client';

import { useContext } from 'react';
import Container from '../shared/container';
import Logo from '../shared/logo';
import { AppContext } from '@/app/context';


enum AppThemeModes {
  light = 'light',
  dark = 'dark',
}

export default function Navbar() {
  const appThemeStorgeItem = 'appTheme';
  const themeContext = useContext(AppContext);
  const isDarkMode = themeContext && themeContext.isDarkMode;
  const toggleSwitchColor = isDarkMode ? 'bg-white' : '';

  const onToggleTheme = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const appTheme = localStorage.getItem(appThemeStorgeItem);
    if (document && themeContext) {
      const { toggleDarkMode } = themeContext;
      const docElement = document.documentElement;
      const themeSwitch = document.querySelector('[data-switch-theme]') as HTMLButtonElement;
      themeSwitch.children[0].classList.toggle('hidden');
      themeSwitch.children[1].classList.toggle('hidden');

      if (appTheme && appTheme === AppThemeModes.light) {
        docElement.classList.toggle(AppThemeModes.dark);
        localStorage.setItem(appThemeStorgeItem, AppThemeModes.dark);
        toggleDarkMode(true);
      }
      if (appTheme && appTheme === AppThemeModes.dark) {
        docElement.classList.toggle(AppThemeModes.dark);
        localStorage.setItem(appThemeStorgeItem, AppThemeModes.light);
        toggleDarkMode(false);
      }
      if (!appTheme && docElement.classList.contains(AppThemeModes.dark)) {
        docElement.classList.toggle(AppThemeModes.dark);
        localStorage.setItem(appThemeStorgeItem, AppThemeModes.light);
        toggleDarkMode(false);
      }
      if (!appTheme && !docElement.classList.contains(AppThemeModes.light)) {
        docElement.classList.toggle(AppThemeModes.light);
        localStorage.setItem(appThemeStorgeItem, AppThemeModes.dark);
        toggleDarkMode(true);
      }
    }
  }

  return (
    <header className='absolute inset-x-0 top-0 z-50 py-6'>
      <Container>
        <nav className='w-full flex justify-between gap-6 relative'>
          <div className='min-w-max inline-flex relative'>
            <Logo />
          </div>

          <div className='min-w-max flex items-center gap-x-3'>
            <button data-switch-theme onClick={onToggleTheme} className={`outline-none flex relative text-heading-2 rounded-full p-2 lg:p-3 border border-box-border ${toggleSwitchColor}`}>
              <img src='/images/power-off.png' alt='dark mode off' className='w-8 h-8' />
              <img src='/images/power-on.png' alt='dark mode on' className='w-8 h-8 hidden' />
              <span className='sr-only'>switch theme</span>
            </button>
          </div>
        </nav>
      </Container>
    </header>
  )
}