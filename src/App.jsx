import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import NavigationBar from "./components/NavigationBar";
import Product from "./components/pages/Product";
import AboutUs from "./components/pages/AboutUs";
import ContactUs from "./components/pages/ContactUs";
import Login from "./components/pages/authentication/Login";
import Signup from "./components/pages/authentication/Signup";
import Cart from "./components/pages/Cart";
import Admin from "./components/pages/Admin";
import Collection from "./components/Collection";

function App() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/products" element={<Collection />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
