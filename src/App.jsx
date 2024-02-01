import './App.css';
import Register from './pages/Register';
import Categories from './pages/Categories';
import HomePage from './pages/Homepage';
import Entertainment from './pages/Entertainment';

import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/register" element={<Register />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/entertainment" element={<Entertainment />} />
    </Routes>
  );
}

export default App;
