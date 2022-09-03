import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import Upload from './pages/Upload/Upload';
import Login from './pages/Login/Login';
import MyPage from './pages/Mypage/MyPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/pins" element={<Main />} />
        <Route path="/auth/signIn" element={<Login />} />
        <Route path="/auth" element={<MyPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
