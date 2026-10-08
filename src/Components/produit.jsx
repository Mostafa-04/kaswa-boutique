import React, { useState } from "react";
import { ShoppingBag, ChevronRight, Check, Minus, Plus } from "lucide-react";
import { PRODUCTS } from "./produits"; // ajustez le chemin selon l'emplacement réel de produit.js

/**
 * Produits.jsx — Kaswa Boutique
 * -----------------------------------------------------------------------
 * Un seul composant gère deux vues :
 *   - Grille de cartes produit (ProductCard)
 *   - Vue détail au clic sur une carte (ProductDetail), avec sélection
 *     couleur / taille / quantité et bouton "Ajouter au panier".
 *
 * Le panier est géré en local state ici à titre de démo (compteur affiché
 * dans l'en-tête). Remplacez `handleAddToCart` par votre logique réelle
 * (contexte global, Redux, appel API, etc.).
 *
 * Les images ne sont pas encore disponibles (produit.js ne contient que
 * des noms de fichiers) : en attendant, chaque produit affiche une
 * pastille dégradée générée à partir de sa palette `couleurs`. Dès que
 * vos visuels sont prêts, remplacez <ImagePlaceholder /> par :
 *   <img src={`/images/${images[i]}.jpg`} alt={titre} />
 */

const INK = "#332B26";
const CREAM_BG = "#FAF6F2";

function formatPrice(prix) {
  return `${prix.toLocaleString("fr-FR")} DH`;
}

/* --------------------------------------------------------------------- */
/* Placeholder visuel généré à partir de la palette du produit           */
/* --------------------------------------------------------------------- */
function ImagePlaceholder({ product, className = "" }) {
  const [c1, c2, c3] = product.couleurs;
  return (
    <div
      className={`relative w-full h-full flex items-center justify-center overflow-hidden ${className}`}
      style={{
        background: `linear-gradient(135deg, ${c1} 0%, ${c2 || c1} 55%, ${c3 || c2 || c1} 100%)`,
      }}
    >
      <span
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "2.4rem",
          color: "rgba(255,255,255,0.55)",
        }}
      >
        {product.titre.charAt(0)}
      </span>
    </div>
  );
}

/* --------------------------------------------------------------------- */
/* Carte produit                                                         */
/* --------------------------------------------------------------------- */
function ProductCard({ product, onSelect }) {
  return (
    <button
      onClick={() => onSelect(product)}
      className="group text-left bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
      style={{ boxShadow: "0 1px 3px rgba(51,43,38,0.08)" }}
    >
      <div className="aspect-[3/4] w-full">
        <ImagePlaceholder
          product={product}
          className="transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-4 flex flex-col gap-1.5 flex-1">
        <h3
          style={{ fontFamily: "'Cormorant Garamond', serif", color: INK, fontSize: "1.25rem" }}
        >
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

/* --------------------------------------------------------------------- */
/* Vue détail produit                                                    */
/* --------------------------------------------------------------------- */
function ProductDetail({ product, onBack, onAddToCart }) {
  const [activeImage, setActiveImage] = useState(0);
  const [color, setColor] = useState(product.couleurs[0]);
  const [taille, setTaille] = useState(null);
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  const canAdd = Boolean(taille);

  function handleAdd() {
    if (!canAdd) return;
    onAddToCart({ product, color, taille, qty });
    setAdded(true);
    setTimeout(() => setAdded(false), 2200);
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-10 sm:py-14">
      <button
        onClick={onBack}
        className="inline-flex items-center gap-1.5 text-sm font-semibold mb-8 hover:opacity-70 transition-opacity"
        style={{ color: INK }}
      >
        <ChevronRight size={16} style={{ transform: "rotate(180deg)" }} />
        Retour aux produits
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Galerie */}
        <div>
          <div className="aspect-[3/4] rounded-2xl overflow-hidden">
            <ImagePlaceholder product={product} />
          </div>
          {product.images.length > 1 && (
            <div className="flex gap-2 mt-3">
              {product.images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className="w-14 h-16 rounded-lg overflow-hidden transition-all"
                  style={{
                    boxShadow: activeImage === i ? `0 0 0 2px #B4726B` : "0 0 0 1px rgba(51,43,38,0.1)",
                  }}
                >
                  <ImagePlaceholder product={product} />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Infos */}
        <div>
          <h1
            style={{ fontFamily: "'Cormorant Garamond', serif", color: INK, fontSize: "2.4rem", lineHeight: 1.15 }}
          >
            {product.titre}
          </h1>
          <p className="mt-2 text-xl font-bold" style={{ color: "#B4726B" }}>
            {formatPrice(product.prix)}
          </p>

          <p className="mt-5 leading-relaxed" style={{ color: `${INK}b3` }}>
            {product.description}
          </p>

          {/* Couleurs */}
          <div className="mt-7">
            <p className="text-sm font-bold mb-2.5" style={{ color: INK }}>
              Couleur
            </p>
            <div className="flex items-center gap-2.5">
              {product.couleurs.map((c) => (
                <button
                  key={c}
                  onClick={() => setColor(c)}
                  aria-label={c}
                  className="rounded-full transition-transform"
                  style={{
                    width: 30,
                    height: 30,
                    backgroundColor: c,
                    boxShadow:
                      color === c
                        ? `0 0 0 2px white, 0 0 0 4px ${INK}`
                        : "0 0 0 1px rgba(0,0,0,0.08)",
                    transform: color === c ? "scale(1.05)" : "scale(1)",
                  }}
                />
              ))}
            </div>
          </div>

          {/* Tailles */}
          <div className="mt-6">
            <p className="text-sm font-bold mb-2.5" style={{ color: INK }}>
              Taille
            </p>
            <div className="flex flex-wrap gap-2">
              {product.taille.map((t) => (
                <button
                  key={t}
                  onClick={() => setTaille(t)}
                  className="rounded-lg px-4 py-2 text-sm font-semibold border transition-colors"
                  style={{
                    borderColor: taille === t ? INK : `${INK}33`,
                    backgroundColor: taille === t ? INK : "white",
                    color: taille === t ? "white" : INK,
                  }}
                >
                  {t}
                </button>
              ))}
            </div>
            {!taille && (
              <p className="text-xs mt-2" style={{ color: "#B4726B" }}>
                Choisissez une taille pour continuer
              </p>
            )}
          </div>

          {/* Quantité */}
          <div className="mt-6">
            <p className="text-sm font-bold mb-2.5" style={{ color: INK }}>
              Quantité
            </p>
            <div className="inline-flex items-center rounded-lg border" style={{ borderColor: `${INK}33` }}>
              <button
                onClick={() => setQty((q) => Math.max(1, q - 1))}
                className="p-2.5 hover:bg-black/5 transition-colors"
                aria-label="Diminuer la quantité"
              >
                <Minus size={15} color={INK} />
              </button>
              <span className="w-10 text-center font-semibold" style={{ color: INK }}>
                {qty}
              </span>
              <button
                onClick={() => setQty((q) => q + 1)}
                className="p-2.5 hover:bg-black/5 transition-colors"
                aria-label="Augmenter la quantité"
              >
                <Plus size={15} color={INK} />
              </button>
            </div>
          </div>

          {/* Ajouter au panier */}
          <button
            onClick={handleAdd}
            disabled={!canAdd}
            className="mt-8 w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full px-9 py-3.5 font-bold text-white transition-all disabled:opacity-40 disabled:cursor-not-allowed"
            style={{ backgroundColor: added ? "#707850" : "#B4726B" }}
          >
            {added ? (
              <>
                <Check size={18} /> Ajouté au panier
              </>
            ) : (
              <>
                <ShoppingBag size={18} /> Ajouter au panier
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

/* --------------------------------------------------------------------- */
/* Composant principal                                                   */
/* --------------------------------------------------------------------- */
export default function Produitsprincipal() {
  const [selected, setSelected] = useState(null);
  const [cart, setCart] = useState([]);

  function handleAddToCart(item) {
    setCart((prev) => [...prev, item]);
  }

  function handleSelect(product) {
    setSelected(product);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0);

  return (
    <div style={{ backgroundColor: CREAM_BG, minHeight: "100%" }}>
      {/* En-tête simple avec compteur panier */}
      <div className="sticky top-0 z-10 backdrop-blur border-b" style={{ backgroundColor: `${CREAM_BG}e6`, borderColor: `${INK}14` }}>
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.6rem", color: INK }}>
            kaswa
          </span>
          <span className="relative">
            <ShoppingBag size={22} color={INK} />
            {cartCount > 0 && (
              <span
                className="absolute -top-2 -right-2 text-[10px] font-bold text-white rounded-full flex items-center justify-center"
                style={{ width: 17, height: 17, backgroundColor: "#B4726B" }}
              >
                {cartCount}
              </span>
            )}
          </span>
        </div>
      </div>

      {selected ? (
        <ProductDetail
          product={selected}
          onBack={() => setSelected(null)}
          onAddToCart={handleAddToCart}
        />
      ) : (
        <div className="max-w-6xl mx-auto px-6 py-12 sm:py-16">
          <div className="text-center mb-10">
            <p className="text-xs font-bold uppercase" style={{ color: "#C4993D", letterSpacing: "0.25em" }}>
              La collection
            </p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", color: INK, fontSize: "2.2rem" }} className="mt-2">
              Nos pièces
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {PRODUCTS.map((product) => (
              <ProductCard key={product.id} product={product} onSelect={handleSelect} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}