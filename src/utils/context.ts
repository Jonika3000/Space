import { createContext, useContext } from 'react';

export type Mode = 'dark' | 'light';
export const ThemeContext = createContext<Mode>('dark');

export const useTheme = () => {
  return useContext(ThemeContext);
};
