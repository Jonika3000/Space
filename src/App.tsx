import './App.css';
import { Route, Routes } from 'react-router-dom';
import * as Page from './utils/lazy.ts';
import { InitialArray } from "./utils/raw-data.ts";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Page.PageList bodies={InitialArray} />} />
      </Routes>
    </>
  );
}

export default App;
