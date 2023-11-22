import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Main from "./Pages/Main/Main";
import Catalog from "./Pages/Catalog/Catalog";
import Product from "./Pages/Product/Product";

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/product" element={<Product />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;