import './App.css';
import { Route, Routes } from 'react-router-dom';
import * as Page from './utils/lazy.ts';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Page.PageList bodies={[]} />} />
      </Routes>
    </>
  );
}

export default App;
