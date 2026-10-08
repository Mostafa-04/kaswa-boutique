import React from "react";
import Hero from "./hero";
import About from "./about";
import Produitsprincipal from "./produit";
import ProductsCarousel from "./ProductsCarousel";
import CTA from "./CTA";
export default function Index() {
  return (
    <div>
        <Hero />
        <About />
        <ProductsCarousel />
        <CTA />
    </div>
  );
}