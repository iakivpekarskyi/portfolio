'use client';

// import { useTheme } from '@/context/theme-context';
import React, { useState } from 'react';
import { BsMoon, BsSun } from 'react-icons/bs';

export default function ThemeSwitch() {
  //   const { theme, toggleTheme } = useTheme();

  type Theme = 'light' | 'dark';

  const [theme, setTheme] = useState<Theme>('light');

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  return (
    <button
      className='fixed bottom-0 right-0 bg-white mb-4 mr-4 w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950'
      onClick={toggleTheme}>
      {theme === 'light' ? <BsSun /> : <BsMoon />}
    </button>
  );
}
