import React, { createContext, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./App.css";
import Home from "./components/Home";
import Favouritelist from "./components/Favouritelist";
import Cartlist from "./components/Cartlist";
import AllProducts from "./components/AllProducts";
import AllOffers from "./components/AllOffers";
import Aboutus from "./components/Aboutus";
import Contactus from "./components/Contactus";

export const AppContext = createContext();

const App = () => {
  const [favorites, setFavorites] = useState([]);
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const isInCart = cart.some((item) => item.id === product.id);
    if (isInCart) {
      toast.warning("هذا المنتج موجود بالفعل في السلة!");
    } else {
      setCart((prev) => [...prev, product]);
      toast.success("تمت إضافة المنتج إلى السلة!");
    }
  };

  const removeFromCart = (productId) => {
    setCart((prev) => prev.filter((item) => item.id !== productId));
    toast.info("تمت إزالة المنتج من السلة!");
  };

  const toggleFavorite = (product) => {
    const isAlreadyFavorited = favorites.some((item) => item.id === product.id);
    if (isAlreadyFavorited) {
      toast.warning("هذا المنتج موجود بالفعل في المفضلة!");
    } else {
      setFavorites((prev) => [...prev, product]);
      toast.success("تمت إضافة المنتج إلى المفضلة!");
    }
  };

  return (
    <AppContext.Provider
      value={{ favorites, cart, addToCart, removeFromCart, toggleFavorite }}
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Favouritelist" element={<Favouritelist />} />
        <Route path="/Cartlist" element={<Cartlist />} />
        <Route path="/AllProducts" element={<AllProducts />} />
        <Route path="/AllOffers" element={<AllOffers />} />
        <Route path="/Aboutus" element={<Aboutus />} />
        <Route path="/Contactus" element={<Contactus />} />
      </Routes>
      <ToastContainer position="bottom-right" autoClose={3000} />
    </AppContext.Provider>
  );
};

export default App;
