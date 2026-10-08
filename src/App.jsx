import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";

import Navbar from "./Components/navbar";
import Index from "./Components/index";

import ProductsPage from "./pages/ProductsPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import CartPage from "./pages/CartPage";
import CommandePage from "./Components/commande";
import Footer from "./Components/footer";

export default function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Navbar />

        <Routes>
          {/* Page d'accueil */}
          <Route path="/" element={<Index />} />

          {/* Produits */}
          <Route path="/produits" element={<ProductsPage />} />

          {/* Détail produit */}
          <Route path="/produit/:id" element={<ProductDetailPage />} />

          {/* Panier */}
          <Route path="/panier" element={<CartPage />} />

          {/* Commande */}
          <Route path="/commande" element={<CommandePage />} />
        </Routes>

        <Footer />
      </CartProvider>
    </BrowserRouter>
  );
}