import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Pin from './pages/Detail/Pin';
import Main from './pages/Main/Main';
import Upload from './pages/Upload/Upload';
import Login from './pages/Login/Login';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/auth/signIn" element={<Login />} />
        <Route path="/pin/:id" element={<Pin />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
