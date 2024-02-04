import {
  createHashRouter,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import Homepage from '../pages/Homepage';
import Register from '../pages/Register';
import Categories from '../pages/Categories';
import Entertainment from '../pages/Entertainment';
import Watch from '../pages/Watch';
import Error from '../pages/Error';

const routes = createRoutesFromElements(
  <Route>
    <Route index element={<Homepage />} />
    <Route path="/register" element={<Register />} />
    <Route path="/categories" element={<Categories />} />
    <Route path="/home" element={<Homepage />} />
    <Route path="/entertainment" element={<Entertainment />} />
    <Route path="/Watch" element={<Watch />} />
    <Route path="*" element={<Error />} />
  </Route>
);

export const router =
  import.meta.env.VITE_HASH_ROUTER === 'true'
    ? createHashRouter(routes)
    : createBrowserRouter(routes);
