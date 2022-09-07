import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import Upload from './pages/Upload/Upload';
import Login from './pages/Login/Login';
import MyPage from './pages/Mypage/MyPage';
import Pin from './pages/Detail/Pin';
import Nav from './components/Nav.js/Nav';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/upload" element={<Upload />} />
        <Route path="/pins" element={<Main />} />
        <Route path="/auth/signIn" element={<Login />} />
        <Route path="/auth" element={<MyPage />} />
        <Route path="/pins/:id" element={<Pin />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
