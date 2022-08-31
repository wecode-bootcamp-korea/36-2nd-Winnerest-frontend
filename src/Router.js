import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Upload from './pages/Upload/Upload';
import Login from './pages/Login/Login';
import Main from './pages/Main/Main';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/upload" element={<Upload />} />
        <Route path="/pins" element={<Main />} />
        <Route path="/auth/signIn" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
