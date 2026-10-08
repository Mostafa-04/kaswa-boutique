import React from "react";
import { useNavigate } from "react-router-dom";
import { PRODUCTS } from "../Components/produits"; // عدّلي المسار حسب مكان produit.js عندك
import ProductImage from "../Components/ProductImage";

const INK = "#332B26";
const CREAM_BG = "#FAF6F2";

function formatPrice(prix) {
  return `${prix.toLocaleString("fr-FR")} DH`;
}

function ProductCard({ product, onSelect }) {
  return (
    <button
      onClick={() => onSelect(product.id)}
      className="group text-left bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
      style={{ boxShadow: "0 1px 3px rgba(51,43,38,0.08)" }}
    >
      <div className="aspect-[3/4] w-full">
        <ProductImage product={product} className="transition-transform duration-500 group-hover:scale-105" />
      </div>

      <div className="p-4 flex flex-col gap-1.5 flex-1">
        <h3 style={{ fontFamily: "'Cormorant Garamond', serif", color: INK, fontSize: "1.25rem" }}>
          {product.titre} 
        </h3>

        <p className="text-sm line-clamp-2" style={{ color: `${INK}99` }}>
          {product.description}
        </p>

        <div className="mt-auto pt-3 flex items-center justify-between">
          <span className="font-bold" style={{ color: "#B4726B" }}>
            {formatPrice(product.prix)}
          </span>
          <span className="flex items-center gap-1">
            {product.couleurs.slice(0, 3).map((c, i) => (
              <span
                key={i}
                className="rounded-full border border-white shadow-sm"
                style={{ width: 14, height: 14, backgroundColor: c }}
              />
            ))}
          </span>
        </div>
      </div>
    </button>
  );
}

/**
 * ProductsPage — صفحة مستقلة، رابطها مثلا: /produits
 * الضغط على أي بطاقة كيدير navigate("/produit/:id") لصفحة التفاصيل.
 */
export default function ProductsPage() {
  const navigate = useNavigate();

  function handleSelect(id) {
    navigate(`/produit/${id}`);
  }

  return (
    <div style={{ backgroundColor: CREAM_BG, minHeight: "100vh" }}>
      <div className="max-w-6xl mx-auto px-6 py-12 sm:py-16">
        <div className="text-center mb-10">
          <p className="text-xs font-bold uppercase" style={{ color: "#C4993D", letterSpacing: "0.25em" }}>
            المنتوجات 
          </p>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", color: INK, fontSize: "2.2rem" }} className="mt-2">
            جميع المنتوجات  
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} onSelect={handleSelect} />
          ))}
        </div>
      </div>
    </div>
  );
}