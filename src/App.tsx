import './App.css';
import { Route, Routes } from 'react-router-dom';
import * as Page from './utils/lazy.ts';
import { InitialArray } from './utils/raw-data.ts';
import { DefaultLayout } from './layouts/DefaultLayout.tsx';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/" element={<Page.PageList bodies={InitialArray} />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
