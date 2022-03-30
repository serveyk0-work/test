import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './containers/Home/Home';

const App: FC = (): JSX.Element => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/:id" element={<Home/>}/>
        <Route path="*" element={<h1>NOT FOUND PAGE</h1>}/>
      </Routes>
    </div>
  );
}

export default App;
