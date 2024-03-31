import React, { useState } from 'react';
import { Mode, ThemeContext } from '../utils/context.ts';
import { Outlet } from 'react-router-dom';
import { useStyles } from './DefaultLayoutStyle.ts';

export const DefaultLayout = () => {
  const [mode, setMode] = useState<Mode>('dark');
  const theme = React.useMemo(() => ({ mode }), [mode]);
  const classes = useStyles();

  const toggleMode = () => {
    const newMode: Mode = mode === 'dark' ? 'light' : 'dark';
    setMode(newMode);
  };

  return (
    <>
      <ThemeContext.Provider value={theme}>
        <div
          className={`${mode === 'light' ? classes.backgroundLightTheme : classes.backgroundDarkTheme}`}
        >
          <button onClick={toggleMode}>{mode === 'light' ? '&#9788;' : '&#127769;'}</button>
          <Outlet />
        </div>
      </ThemeContext.Provider>
    </>
  );
};
