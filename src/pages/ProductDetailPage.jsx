import React, { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import {
  ShoppingBag,
  ChevronRight,
  Check,
  Minus,
  Plus,
} from "lucide-react";

import { PRODUCTS } from "../Components/produits";
import ProductImage from "../Components/ProductImage";
import { useCart } from "../context/CartContext";

const INK = "#332B26";
const CREAM_BG = "#FAF6F2";
const ROSE = "#B4726B";
const GREEN = "#707850";

function formatPrice(prix) {
  return `${Number(prix).toLocaleString("fr-FR")} DH`;
}

export default function ProductDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { addToCart } = useCart();

  /**
   * مهم:
   * String(product.id) === String(id)
   * باش يخدم سواء id رقم أو string
   */
  const product = PRODUCTS.find(
    (p) => String(p.id) === String(id)
  );

  const [activeImage, setActiveImage] = useState(0);
  const [color, setColor] = useState(
    product?.couleurs?.[0] ?? null
  );
  const [taille, setTaille] = useState(null);
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  /**
   * Produit غير موجود
   */
  if (!product) {
    return (
      <div
        className="max-w-2xl mx-auto px-6 py-24 text-center"
        style={{ backgroundColor: CREAM_BG }}
      >
        <p
          className="font-semibold mb-4"
          style={{ color: INK }}
        >
          المنتوج ماكاينش.
        </p>

        <Link
          to="/produits"
          className="underline"
          style={{ color: ROSE }}
        >
          الرجوع للائحة المنتوجات
        </Link>
      </div>
    );
  }

  const canAdd = Boolean(taille && qty >= 1);

  /**
   * Ajouter au panier
   */
  function handleAdd() {
    if (!canAdd) return;

    addToCart({
      product,
      color,
      taille,
      qty,
    });

    setAdded(true);

    setTimeout(() => {
      setAdded(false);
    }, 2200);
  }

  /**
   * Image actuelle
   */
  const currentImage =
    product.images?.[activeImage] ??
    product.images?.[0];

  return (
    <div
      style={{
        backgroundColor: CREAM_BG,
        minHeight: "100vh",
      }}
    >
      <div className="max-w-5xl mx-auto px-6 py-10 sm:py-14">

        {/* Retour */}
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-1.5 text-sm font-semibold mb-8 hover:opacity-70 transition-opacity"
          style={{ color: INK }}
        >
          <ChevronRight
            size={16}
            style={{
              transform: "rotate(180deg)",
            }}
          />

          الرجوع
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* =========================
              GALERIE
          ========================== */}
          <div>

            <div className="aspect-[3/4] rounded-2xl overflow-hidden">
              <ProductImage
                product={product}
                image={currentImage}
              />
            </div>

            {/* Thumbnails */}
            {product.images?.length > 1 && (
              <div className="flex gap-2 mt-3">

                {product.images.map((image, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() =>
                      setActiveImage(index)
                    }
                    className="w-14 h-16 rounded-lg overflow-hidden transition-all"
                    style={{
                      boxShadow:
                        activeImage === index
                          ? `0 0 0 2px ${ROSE}`
                          : "0 0 0 1px rgba(51,43,38,0.1)",
                    }}
                  >
                    <ProductImage
                      product={product}
                      image={image}
                    />
                  </button>
                ))}

              </div>
            )}
          </div>

          {/* =========================
              INFORMATIONS
          ========================== */}
          <div>

            {/* Nom */}
            <h1
              style={{
                fontFamily:
                  "'Cormorant Garamond', serif",
                color: INK,
                fontSize: "2.4rem",
                lineHeight: 1.15,
              }}
            >
              {product.titre}
            </h1>

            {/* Prix */}
            <p
              className="mt-2 text-xl font-bold"
              style={{ color: ROSE }}
            >
              {formatPrice(product.prix)}
            </p>

            {/* Description */}
            {product.description && (
              <p
                className="mt-5 leading-relaxed"
                style={{ color: `${INK}b3` }}
              >
                {product.description}
              </p>
            )}

            {/* =========================
                COULEURS
            ========================== */}
            {product.couleurs?.length > 0 && (
              <div className="mt-7">

                <p
                  className="text-sm font-bold mb-2.5"
                  style={{ color: INK }}
                >
                  اللون
                </p>

                <div className="flex items-center gap-2.5">

                  {product.couleurs.map((c) => (
                    <button
                      key={c}
                      type="button"
                      onClick={() => setColor(c)}
                      aria-label={`اختيار اللون ${c}`}
                      className="rounded-full transition-transform"
                      style={{
                        width: 30,
                        height: 30,
                        backgroundColor: c,
                        boxShadow:
                          color === c
                            ? `0 0 0 2px white, 0 0 0 4px ${INK}`
                            : "0 0 0 1px rgba(0,0,0,0.08)",
                        transform:
                          color === c
                            ? "scale(1.05)"
                            : "scale(1)",
                      }}
                    />
                  ))}

                </div>
              </div>
            )}

            {/* =========================
                TAILLES
            ========================== */}
            {product.taille?.length > 0 && (
              <div className="mt-6">

                <p
                  className="text-sm font-bold mb-2.5"
                  style={{ color: INK }}
                >
                  المقاس
                </p>

                <div className="flex flex-wrap gap-2">

                  {product.taille.map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setTaille(t)}
                      className="rounded-lg px-4 py-2 text-sm font-semibold border transition-colors"
                      style={{
                        borderColor:
                          taille === t
                            ? INK
                            : `${INK}33`,
                        backgroundColor:
                          taille === t
                            ? INK
                            : "white",
                        color:
                          taille === t
                            ? "white"
                            : INK,
                      }}
                    >
                      {t}
                    </button>
                  ))}

                </div>

                {!taille && (
                  <p
                    className="text-xs mt-2"
                    style={{ color: ROSE }}
                  >
                    خاصك تختاري المقاس باش تكملي
                  </p>
                )}

              </div>
            )}

            {/* =========================
                QUANTITÉ
            ========================== */}
            <div className="mt-6">

              <p
                className="text-sm font-bold mb-2.5"
                style={{ color: INK }}
              >
                الكمية
              </p>

              <div
                className="inline-flex items-center rounded-lg border"
                style={{
                  borderColor: `${INK}33`,
                }}
              >

                <button
                  type="button"
                  onClick={() =>
                    setQty((q) => Math.max(1, q - 1))
                  }
                  className="p-2.5 hover:bg-black/5 transition-colors"
                  aria-label="تنقيص الكمية"
                >
                  <Minus size={15} color={INK} />
                </button>

                <span
                  className="w-10 text-center font-semibold"
                  style={{ color: INK }}
                >
                  {qty}
                </span>

                <button
                  type="button"
                  onClick={() =>
                    setQty((q) => q + 1)
                  }
                  className="p-2.5 hover:bg-black/5 transition-colors"
                  aria-label="زيادة الكمية"
                >
                  <Plus size={15} color={INK} />
                </button>

              </div>
            </div>

            {/* =========================
                AJOUTER AU PANIER
            ========================== */}
            <button
              type="button"
              onClick={handleAdd}
              disabled={!canAdd}
              className="mt-8 w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full px-9 py-3.5 font-bold text-white transition-all disabled:opacity-40 disabled:cursor-not-allowed hover:-translate-y-0.5"
              style={{
                backgroundColor: added
                  ? GREEN
                  : ROSE,
              }}
            >

              {added ? (
                <>
                  <Check size={18} />
                  تزادت للسلة
                </>
              ) : (
                <>
                  <ShoppingBag size={18} />
                  أضيفي للسلة
                </>
              )}

            </button>

            {/* Aller au panier */}
            {added && (
              <p className="mt-3 text-sm">

                <Link
                  to="/panier"
                  className="underline font-semibold"
                  style={{ color: GREEN }}
                >
                  عايني السلة →
                </Link>

              </p>
            )}

          </div>
        </div>
      </div>
    </div>
  );
}