import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ShoppingBag } from "lucide-react";
import { useCart } from "../context/CartContext";

const INK = "#332B26";
const CREAM_BG = "#fbf8f3";
const ROSE = "#B4726B";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const { cartCount } = useCart();

  const isProductsPage = location.pathname === "/produits";

  return (
    <header
      dir="rtl"
      className="sticky top-0 z-50 w-full backdrop-blur-xl border-b"
      style={{
        backgroundColor: `${CREAM_BG}E8`,
        borderColor: `${INK}14`,
      }}
    >
      <div
        className="
          relative
          max-w-7xl
          mx-auto
          h-[68px]
          sm:h-[74px]
          px-4
          sm:px-6
          lg:px-8
          flex
          items-center
          justify-between
        "
      >

        
        {/* =========================
            CART
        ========================== */}
        <button
          type="button"
          onClick={() => navigate("/panier")}
          className="
            relative
            z-10
            shrink-0
            w-10
            h-10
            sm:w-11
            sm:h-11
            flex
            items-center
            justify-center
            rounded-full
            transition-all
            duration-300
            hover:-translate-y-0.5
          "
          style={{
            color: INK,
          }}
          aria-label="سلة التسوق"
        >
          <ShoppingBag
            size={21}
            strokeWidth={1.8}
          />

          {/* Cart badge */}
          {cartCount > 0 && (
            <span
              className="
                absolute
                -top-0.5
                -right-0.5
                min-w-[18px]
                h-[18px]
                px-1
                rounded-full
                flex
                items-center
                justify-center
                text-[10px]
                font-bold
                text-white
              "
              style={{
                backgroundColor: ROSE,
              }}
            >
              {cartCount > 99 ? "99+" : cartCount}
            </span>
          )}
        </button>


        {/* =========================
            NAVIGATION CENTER
        ========================== */}
        <nav
          className="
            absolute
            left-1/2
            top-1/2
            -translate-x-1/2
            -translate-y-1/2
            flex
            items-center
          "
        >
          <Link
            to="/produits"
            className="
              relative
              px-3
              sm:px-5
              py-2
              text-sm
              sm:text-base
              font-semibold
              whitespace-nowrap
              transition-colors
              duration-300
            "
            style={{
              color: isProductsPage ? ROSE : INK,
            }}
          >
            المنتوجات

            {/* Active underline */}
            <span
              className={`
                absolute
                bottom-0
                left-1/2
                -translate-x-1/2
                h-[2px]
                rounded-full
                transition-all
                duration-300
                ${
                  isProductsPage
                    ? "w-8 sm:w-10 opacity-100"
                    : "w-0 opacity-0"
                }
              `}
              style={{
                backgroundColor: ROSE,
              }}
            />
          </Link>
        </nav>

                {/* =========================
            LOGO
        ========================== */}
        <Link
          to="/"
          className="
            relative
            z-10
            shrink-0
            flex
            items-center
            transition-transform
            duration-300
            hover:scale-[1.03]
          "
          aria-label="Kaswa - الصفحة الرئيسية"
        >
          <img
            src="/logo.png"
            alt="Kaswa"
            className="
              h-10
              sm:h-20
              lg:h-22
              w-auto
              max-w-[120px]
              sm:max-w-[145px]
              object-contain
            "
          />
        </Link>
      </div>
    </header>
  );
}