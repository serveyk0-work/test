import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './containers/Home/Home';
import DefaultLayout from './layouts/DefaultLayout/DefaultLayout';

const App: FC = (): JSX.Element => {
  return (
    <DefaultLayout>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/:id" element={<Home/>}/>
        <Route path="*" element={<h1>NOT FOUND PAGE</h1>}/>
      </Routes>
    </DefaultLayout>
  );
}

export default App;
