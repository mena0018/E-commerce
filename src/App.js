import {BrowserRouter, Routes, Route}from 'react-router-dom';
import Home from './Pages/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import FloatingCard from './Components/FloatingCart/FloatingCard';
import Contact from './Pages/Contact/Contact';
import Products from './Pages/Products/Products';
import ProductShowcase from './Pages/ProductShowcase/ProductShowcase';
import ShoppingCart from './Pages/ShopppingCart/ShoppingCart';


function App() {
  return (
    <BrowserRouter>
    
      <Navbar />
      <FloatingCard />

      <Routes>

        <Route path="/" element={<Home />}/>
        <Route path="/produits" element={<Products />}/>
        <Route path="/produits/:id" element={<ProductShowcase />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/panier" element={<ShoppingCart />}/>

      </Routes>

    </BrowserRouter>
  );
}

export default App;
