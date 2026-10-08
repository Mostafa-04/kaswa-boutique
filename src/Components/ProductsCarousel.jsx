import React from "react";
import { useNavigate } from "react-router-dom";
import { PRODUCTS } from "./produits";

const PAGE_BG = "#fbf8f3";
const CARD_INFO = "#aeb09d";
const INK = "#332B26";

export default function ProductsCarousel() {
  const navigate = useNavigate();

  // نكرر المنتجات حتى تستمر الحركة بدون نهاية
  const products = [...PRODUCTS, ...PRODUCTS];

  function getImage(product) {
    const imageName = product?.images?.[0];

    if (!imageName) {
      return null;
    }

    return `/images/${imageName}.jpg`;
  }

  function handleProductClick(product) {
    navigate(`/produit/${product.id}`);
  }

  return (
    <section
      className="w-full overflow-hidden py-12 sm:py-16"
      style={{ backgroundColor: PAGE_BG }}
    >
      {/* HEADER */}
      <div className="px-6 mb-8 sm:mb-10 text-center">
        <p
          className="mb-2 text-xs sm:text-sm tracking-[0.3em] uppercase"
          style={{ color: "#B4726B" }}
        >
          Collection
        </p>

        <h2
          className="text-3xl sm:text-4xl lg:text-5xl font-semibold"
          style={{
            color: INK,
            fontFamily: "'Cormorant Garamond', serif",
          }}
        >
          Nos créations
        </h2>

        <p
          className="mt-3 max-w-xl mx-auto text-sm sm:text-base"
          style={{ color: `${INK}99` }}
        >
          Des pièces pensées avec élégance, simplicité et caractère.
        </p>
      </div>

      {/* CAROUSEL */}
      <div className="carousel-wrapper">
        <div className="products-marquee">
          {products.map((product, index) => {
            const image = getImage(product);

            return (
              <article
                key={`${product.id}-${index}`}
                onClick={() => handleProductClick(product)}
                className="product-card group"
              >
                {/* IMAGE */}
                <div className="product-image-wrapper">
                  {image ? (
                    <img
                      src={image}
                      alt={product.titre}
                      className="product-image"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />
                  ) : (
                    <div
                      className="product-placeholder"
                      style={{
                        background: `linear-gradient(
                          135deg,
                          ${product.couleurs?.[0] || "#D8C8BE"},
                          ${product.couleurs?.[1] || "#B4726B"}
                        )`,
                      }}
                    >
                      <span>
                        {product.titre?.charAt(0)?.toUpperCase()}
                      </span>
                    </div>
                  )}

                  {/* IMAGE OVERLAY */}
                  <div className="image-overlay" />

                  {/* INFO */}
                  <div className="product-info">
                    <div>
                      <h3
                        className="product-title"
                        style={{
                          fontFamily: "'Cormorant Garamond', serif",
                        }}
                      >
                        {product.titre}
                      </h3>

                      <p className="product-price">
                        {Number(product.prix).toLocaleString("fr-FR")} DH
                      </p>
                    </div>

                    <span className="product-arrow">
                      →
                    </span>
                  </div>

                  {/* TOP LABEL */}
                  <div className="product-label">
                    Découvrir
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      <style>{`
        .carousel-wrapper {
          width: 100%;
          overflow: hidden;
          position: relative;
        }

        .products-marquee {
          display: flex;
          width: max-content;
          gap: 22px;
          animation: products-scroll 42s linear infinite;
          will-change: transform;
        }

        /*
         * توقف الحركة بمجرد وضع la souris
         * على المنتجات.
         */
        .carousel-wrapper:hover .products-marquee {
          animation-play-state: paused;
        }

        .product-card {
          flex: 0 0 auto;
          width: 270px;
          cursor: pointer;
          user-select: none;
        }

        .product-image-wrapper {
          position: relative;
          width: 100%;
          height: 380px;
          overflow: hidden;
          border-radius: 22px;
          background: #e8e1da;
          box-shadow:
            0 10px 30px rgba(51, 43, 38, 0.08),
            0 2px 8px rgba(51, 43, 38, 0.05);
          transition:
            transform 0.5s ease,
            box-shadow 0.5s ease;
        }

        .product-card:hover .product-image-wrapper {
          transform: translateY(-5px);
          box-shadow:
            0 18px 40px rgba(51, 43, 38, 0.14),
            0 4px 12px rgba(51, 43, 38, 0.08);
        }

        .product-image {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 1s cubic-bezier(0.2, 0.7, 0.2, 1);
        }

        .product-card:hover .product-image {
          transform: scale(1.06);
        }

        /*
         * Overlay léger sur l'image
         */
        .image-overlay {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(
              to bottom,
              rgba(51, 43, 38, 0.02) 35%,
              rgba(51, 43, 38, 0.28) 100%
            );
          pointer-events: none;
        }

        /*
         * Information card
         */
        .product-info {
          position: absolute;
          left: 12px;
          right: 12px;
          bottom: 12px;

          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;

          padding: 14px 16px;

          background: rgba(174, 176, 157, 0.94);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);

          border: 1px solid rgba(255, 255, 255, 0.35);
          border-radius: 16px;

          opacity: 0;
          transform: translateY(15px);

          transition:
            opacity 0.4s ease,
            transform 0.4s ease;
        }

        .product-card:hover .product-info {
          opacity: 1;
          transform: translateY(0);
        }

        .product-title {
          margin: 0;
          color: ${INK};
          font-size: 22px;
          line-height: 1.1;
          font-weight: 600;
        }

        .product-price {
          margin-top: 5px;
          color: ${INK};
          font-size: 14px;
          font-weight: 700;
        }

        .product-arrow {
          width: 34px;
          height: 34px;

          display: flex;
          align-items: center;
          justify-content: center;

          flex-shrink: 0;

          border-radius: 50%;
          background: rgba(255, 255, 255, 0.35);

          color: ${INK};
          font-size: 18px;

          transition:
            transform 0.3s ease,
            background 0.3s ease;
        }

        .product-card:hover .product-arrow {
          transform: translateX(3px);
          background: rgba(255, 255, 255, 0.55);
        }

        /*
         * Petit label en haut
         */
        .product-label {
          position: absolute;
          top: 14px;
          left: 14px;

          padding: 7px 11px;

          border-radius: 999px;

          background: rgba(251, 248, 243, 0.78);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);

          color: ${INK};
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;

          opacity: 0;
          transform: translateY(-5px);

          transition:
            opacity 0.4s ease,
            transform 0.4s ease;
        }

        .product-card:hover .product-label {
          opacity: 1;
          transform: translateY(0);
        }

        /*
         * Placeholder
         */
        .product-placeholder {
          position: absolute;
          inset: 0;

          display: flex;
          align-items: center;
          justify-content: center;
        }

        .product-placeholder span {
          color: rgba(255, 255, 255, 0.65);
          font-family: "Cormorant Garamond", serif;
          font-size: 70px;
          font-weight: 600;
        }

        /*
         * Animation infinie
         */
        @keyframes products-scroll {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }

        /*
         * TABLET
         */
        @media (max-width: 1024px) {
          .products-marquee {
            gap: 18px;
            animation-duration: 36s;
          }

          .product-card {
            width: 235px;
          }

          .product-image-wrapper {
            height: 330px;
          }
        }

        /*
         * MOBILE
         */
        @media (max-width: 640px) {
          .products-marquee {
            gap: 14px;
            animation-duration: 30s;
          }

          .product-card {
            width: 185px;
          }

          .product-image-wrapper {
            height: 270px;
            border-radius: 18px;
          }

          .product-info {
            left: 8px;
            right: 8px;
            bottom: 8px;
            padding: 10px 11px;
            border-radius: 13px;
          }

          .product-title {
            font-size: 18px;
          }

          .product-price {
            font-size: 12px;
          }

          .product-arrow {
            width: 28px;
            height: 28px;
            font-size: 15px;
          }

          .product-label {
            top: 9px;
            left: 9px;
            padding: 5px 8px;
            font-size: 8px;
          }
        }

        /*
         * Accessibility
         */
        @media (prefers-reduced-motion: reduce) {
          .products-marquee {
            animation: none;
          }

          .product-image,
          .product-image-wrapper,
          .product-info {
            transition: none;
          }
        }
      `}</style>
    </section>
  );
}