import React from "react";
import { Link } from "react-router-dom";
import {
  Trash2,
  Minus,
  Plus,
  ShoppingBag,
} from "lucide-react";

import { useCart } from "../context/CartContext";
import ProductImage from "../Components/ProductImage";

const INK = "#332B26";
const CREAM_BG = "#FAF6F2";
const ROSE = "#B4726B";
const GREEN = "#707850";

function formatPrice(prix) {
  return `${Number(prix).toLocaleString("fr-FR")} DH`;
}

export default function CartPage() {
  const {
    items,
    removeFromCart,
    updateQty,
    cartTotal,
    cartCount,
    clearCart,
  } = useCart();

  /**
   * Panier vide
   */
  if (items.length === 0) {
    return (
      <div
        style={{
          backgroundColor: CREAM_BG,
          minHeight: "100vh",
        }}
      >
        <div className="max-w-2xl mx-auto px-6 py-24 text-center">

          <ShoppingBag
            size={40}
            color={`${INK}55`}
            className="mx-auto mb-4"
          />

          <p
            className="font-semibold mb-2"
            style={{ color: INK }}
          >
            السلة ديالك خاوية.
          </p>

          <Link
            to="/produits"
            className="underline font-semibold"
            style={{ color: ROSE }}
          >
            رجعي للمنتوجات
          </Link>

        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        backgroundColor: CREAM_BG,
        minHeight: "100vh",
      }}
    >
      <div className="max-w-3xl mx-auto px-6 py-12 sm:py-16">

        {/* Header */}
        <div className="flex items-center justify-between mb-8">

          <div>
            <h1
              style={{
                fontFamily:
                  "'Cormorant Garamond', serif",
                color: INK,
                fontSize: "2.2rem",
              }}
            >
              سلة التسوق
            </h1>

            <p
              className="text-sm mt-1"
              style={{ color: `${INK}88` }}
            >
              {cartCount} منتج
            </p>
          </div>

          <button
            type="button"
            onClick={clearCart}
            className="text-sm underline"
            style={{ color: ROSE }}
          >
            إفراغ السلة
          </button>

        </div>

        {/* Products */}
        <div className="space-y-4">

          {items.map((item) => (

            <div
              key={item.key}
              className="bg-white rounded-2xl p-4 flex items-center gap-4"
              style={{
                boxShadow:
                  "0 1px 3px rgba(51,43,38,0.08)",
              }}
            >

              {/* Image */}
              <div className="w-20 h-24 rounded-xl overflow-hidden shrink-0">
                <ProductImage
                  product={item.product}
                />
              </div>

              {/* Product info */}
              <div className="flex-1 min-w-0">

                <h3
                  style={{
                    fontFamily:
                      "'Cormorant Garamond', serif",
                    color: INK,
                    fontSize: "1.2rem",
                  }}
                >
                  {item.product.titre}
                </h3>

                <div className="flex items-center gap-3 mt-1">

                  {/* Color */}
                  {item.color && (
                    <span
                      className="rounded-full border border-white shadow-sm"
                      style={{
                        width: 14,
                        height: 14,
                        backgroundColor: item.color,
                      }}
                    />
                  )}

                  {/* Size */}
                  {item.taille && (
                    <span
                      className="text-sm"
                      style={{ color: `${INK}99` }}
                    >
                      مقاس {item.taille}
                    </span>
                  )}

                </div>

                <p
                  className="mt-1 font-bold text-sm"
                  style={{ color: ROSE }}
                >
                  {formatPrice(item.product.prix)}
                </p>

                {/* Sous-total */}
                <p
                  className="mt-1 text-xs"
                  style={{ color: `${INK}88` }}
                >
                  المجموع:{" "}
                  {formatPrice(
                    item.product.prix * item.qty
                  )}
                </p>

              </div>

              {/* Actions */}
              <div className="flex flex-col items-end gap-2">

                {/* Delete */}
                <button
                  type="button"
                  onClick={() =>
                    removeFromCart(item.key)
                  }
                  aria-label="حذف من السلة"
                  className="text-red-400 hover:text-red-600 transition-colors"
                >
                  <Trash2 size={17} />
                </button>

                {/* Quantity */}
                <div
                  className="inline-flex items-center rounded-lg border"
                  style={{
                    borderColor: `${INK}33`,
                  }}
                >

                  <button
                    type="button"
                    onClick={() =>
                      updateQty(
                        item.key,
                        item.qty - 1
                      )
                    }
                    className="p-1.5 hover:bg-black/5 transition-colors"
                    aria-label="تنقيص"
                  >
                    <Minus
                      size={13}
                      color={INK}
                    />
                  </button>

                  <span
                    className="w-7 text-center text-sm font-semibold"
                    style={{ color: INK }}
                  >
                    {item.qty}
                  </span>

                  <button
                    type="button"
                    onClick={() =>
                      updateQty(
                        item.key,
                        item.qty + 1
                      )
                    }
                    className="p-1.5 hover:bg-black/5 transition-colors"
                    aria-label="زيادة"
                  >
                    <Plus
                      size={13}
                      color={INK}
                    />
                  </button>

                </div>

              </div>

            </div>
          ))}

        </div>

        {/* Total */}
        <div
          className="mt-8 bg-white rounded-2xl p-6"
          style={{
            boxShadow:
              "0 1px 3px rgba(51,43,38,0.08)",
          }}
        >

          <div className="flex items-center justify-between">

            <span
              className="font-semibold"
              style={{ color: INK }}
            >
              المجموع
            </span>

            <span
              className="font-bold text-xl"
              style={{ color: ROSE }}
            >
              {formatPrice(cartTotal)}
            </span>

          </div>

          {/* Checkout */}
          <Link to="/commande" className="mt-6 w-full rounded-full py-3.5 font-bold text-white transition-transform hover:-translate-y-0.5 flex items-center justify-center" style={{ backgroundColor: GREEN }} >
          إتمام الطلب 
          </Link>

        </div>

      </div>
    </div>
  );
}