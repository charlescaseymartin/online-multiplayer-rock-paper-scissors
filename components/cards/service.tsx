'use client';

import { useContext } from 'react';
import Paragraph from '../shared/paragraph';
import { AppThemeContext } from '@/app/context/themeContext';
import BtnLink from '../shared/btnLink';

export type ServiceItemType = {
  title: string;
  description: string;
  icon: JSX.Element;
  href: string;
}

export default function Service({ title, description, icon, href }: ServiceItemType) {
  const themeContext = useContext(AppThemeContext);
  const isDarkMode = themeContext && themeContext.isDarkMode;

  return (
    <div className='p-5 sm:p-6 lg:p-8 rounded-3xl border border-box-border bg-box-bg shadow-lg shadow-box-shadow relative overflow-hidden'>
      <div className='flex flex-col h-full'>
        <div className='space-y-4 relative flex-1'>
          <div className='flex items-center'>
            <h2 className='text-lg md:text-2xl font-semibold text-heading-1 flex-1'>
              {title}
            </h2>
            <div data-service-icon-bg className={`rounded-xl p-3 text-heading-1 w-max relative ${isDarkMode ? 'bg-gray-950' : 'bg-gray-300'}`}>
              {icon}
            </div>
          </div>
          <Paragraph>
            {description}
          </Paragraph>
        </div>

        <div className='mt-6'>
          <BtnLink href={href} text='Learn more' />
        </div>
      </div>

      <span className='absolute w-32 aspect-square -bottom-16 -right-16 bg-primary/10 rounded-full' />
    </div>
  )
}