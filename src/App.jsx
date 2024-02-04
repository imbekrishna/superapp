import React from 'react';
import './App.css';
import Categories from './pages/Categories';
import Entertainment from './pages/Entertainment';
import HomePage from './pages/Homepage';
import Register from './pages/Register';
import Watch from './pages/Watch';

import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/register" element={<Register />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/entertainment" element={<Entertainment />} />
      <Route path="/Watch" element={<Watch />} />
    </Routes>
  );
}

export default App;
