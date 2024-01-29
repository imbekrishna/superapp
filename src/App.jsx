import './App.css';
import Register from './pages/Register';
import Categories from './pages/Categories';
import HomePage from './pages/Homepage';

import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/home" element={<HomePage />} />
    </Routes>
  );
}

export default App;
