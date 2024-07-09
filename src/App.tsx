import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import Layout from './Layout';
import Cart from './pages/Cart';
import Product from './pages/Product';
import Checkout from './pages/Checkout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Product />} />
          {/* <Route path="products" element={<ProductListing />} /> */}
          <Route path="cart" element={<Cart />} />
          <Route path="checkout" element={<Checkout />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
