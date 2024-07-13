import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import Layout from './Layout';
import Cart from './pages/Cart';
import Product from './pages/Product';
import Checkout from './pages/Checkout';
import Step1 from './pages/Step1';
import Step2 from './pages/Step2';
import Step3 from './pages/Step3';
import ProductDetail from './pages/ProductDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Product />} />
          <Route path="cart" element={<Cart />} />
          <Route path="step1" element={<Step1 />} />
          <Route path="step2" element={<Step2 />} />
          <Route path="step3" element={<Step3 />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="productdetail" element={<ProductDetail />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
