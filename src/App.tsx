// src/App.tsx
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import Layout from './Layout';
import Homepage from "./pages/Homepage";
import ProductListing from "./pages/Product";
import Cart from './pages/Cart';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="products" element={<ProductListing />} />
          <Route path="cart" element={<Cart />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
