import React from "react";

/**
 * ProductImage
 * ---------------------------------------------------------
 * - Affiche automatiquement la première image de product.images
 * - Compatible avec ProductsPage
 * - Compatible avec ProductDetailPage
 * - Compatible avec CartPage
 * - Accepte aussi une prop "image" pour afficher une image précise
 */
export default function ProductImage({
  product,
  image = null,
  className = "",
}) {
  // Sécurité si product n'existe pas
  if (!product) {
    return (
      <div
        className={`relative w-full h-full flex items-center justify-center ${className}`}
        style={{
          backgroundColor: "#E8E0DA",
        }}
      >
        <span
          style={{
            color: "rgba(51,43,38,0.45)",
            fontSize: "1rem",
          }}
        >
          Produit
        </span>
      </div>
    );
  }

  const couleurs = Array.isArray(product.couleurs)
    ? product.couleurs
    : [];

  const c1 = couleurs[0] || "#D8C8BE";
  const c2 = couleurs[1] || c1;
  const c3 = couleurs[2] || c2;

  /**
   * ---------------------------------------------------------
   * IMAGE
   * ---------------------------------------------------------
   *
   * Priorité :
   * 1. image passée directement via prop
   * 2. première image de product.images
   */
  const productImage =
    image ||
    (Array.isArray(product.images) && product.images.length > 0
      ? product.images[0]
      : null);

  /**
   * Si une vraie image existe
   */
  if (productImage) {
    return (
      <img
        src={productImage}
        alt={product.titre || "Produit"}
        className={`w-full h-full object-cover ${className}`}
        onError={(e) => {
          console.error(
            "Image introuvable :",
            productImage
          );

          // Cache l'image si elle n'existe pas
          e.currentTarget.style.display = "none";

          // Affiche le fond de secours
          const parent = e.currentTarget.parentElement;

          if (parent) {
            parent.style.background = `linear-gradient(
              135deg,
              ${c1} 0%,
              ${c2} 55%,
              ${c3} 100%
            )`;
          }
        }}
      />
    );
  }

  /**
   * ---------------------------------------------------------
   * FALLBACK
   * ---------------------------------------------------------
   * Si aucune image n'est disponible
   */
  return (
    <div
      className={`relative w-full h-full flex items-center justify-center overflow-hidden ${className}`}
      style={{
        background: `linear-gradient(
          135deg,
          ${c1} 0%,
          ${c2} 55%,
          ${c3} 100%
        )`,
      }}
    >
      {/* Effet décoratif */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 30% 20%, rgba(255,255,255,0.25), transparent 35%)",
        }}
      />

      {/* Première lettre du produit */}
      <span
        className="relative"
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "2.4rem",
          fontWeight: 600,
          color: "rgba(255,255,255,0.65)",
        }}
      >
        {product.titre?.charAt(0)?.toUpperCase() || "P"}
      </span>
    </div>
  );
}