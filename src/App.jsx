import './App.css';
import Register from './pages/Register';
import Categories from './pages/Categories';
import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/categories" element={<Categories />} />
    </Routes>
  );
}

export default App;
