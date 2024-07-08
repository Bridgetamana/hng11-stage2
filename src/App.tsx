import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import Homepage from "./pages/Homepage";
import ProductListing from "./pages/Product";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/products" element={<ProductListing />} />
      </Routes>
    </Router>
  );
}

export default App;
