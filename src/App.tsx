import './App.css';
import { Route, Routes } from 'react-router-dom';
import * as Page from './utils/lazy.ts';
import { DefaultLayout } from './layouts/DefaultLayout.tsx';
import React from 'react';

function App() {
  console.log('version', React.version);

  return (
    <>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/" element={<Page.PageList />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
