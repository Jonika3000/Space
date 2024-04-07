import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { fetcher } from './api/fetcher.ts';
import { SWRConfig } from 'swr';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <React.Suspense fallback={<>...</>}>
        <SWRConfig
          value={{
            fetcher,
            suspense: true
          }}
        >
          <App />
        </SWRConfig>
      </React.Suspense>
    </BrowserRouter>
  </React.StrictMode>
);
