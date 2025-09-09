import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import AddProduct from "./pages/AddProduct";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        
        <Route path="/product" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/addProduct" element={<AddProduct />} />
      </Routes>
    </div>
  );
}

export default App;
