import React from "react";
import { Link } from "react-router-dom";
import {
  MessageCircle,
  ArrowUp,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import {FaFacebook,FaInstagram} from "react-icons/fa";

const PAGE_BG = "#fbf8f3";
const CARD_BG = "#aeb09d";
const INK = "#332B26";
const ROSE = "#B4726B";

export default function Footer() {
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <footer
      dir="rtl"
      style={{
        backgroundColor: PAGE_BG,
        color: INK,
      }}
    >
      {/* =========================
          MAIN FOOTER
      ========================== */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 pt-16 sm:pt-20 lg:pt-24 pb-8">
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
            gap-10
            lg:gap-12
          "
        >
          {/* =========================
              BRAND
          ========================== */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link
              to="/"
              onClick={scrollToTop}
              className="inline-flex items-center"
            >
              <img
                src="/logo.png"
                alt="Logo"
                className="
                  w-auto
                  h-14
                  sm:h-16
                  object-contain
                "
              />
            </Link>

            <p
              className="
                mt-5
                max-w-sm
                text-sm
                sm:text-base
                leading-8
              "
              style={{ color: `${INK}B3` }}
            >
              أناقة مغربية بروح عصرية، حيث نلتقي بين جمال التفاصيل،
              أصالة الحرفة وأناقة المرأة المغربية.
            </p>

            <p
              className="mt-4 text-sm font-medium"
              style={{ color: ROSE }}
            >
              أناقة تُحكى بالتفاصيل.
            </p>

            {/* Social */}
            <div className="flex items-center gap-3 mt-6">
              <a
                href="#"
                aria-label="Instagram"
                className="social-link"
              >
                <FaInstagram size={18} />
              </a>

              <a
                href="#"
                aria-label="Facebook"
                className="social-link"
              >
                <FaFacebook size={18} />
              </a>

              <a
                href="https://wa.me/212617125803"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="social-link"
              >
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          {/* =========================
              NAVIGATION
          ========================== */}
          <div>
            <h3 className="footer-title">
              اكتشف
            </h3>

            <ul className="space-y-3">
              <li>
                <Link className="footer-link" to="/">
                  الرئيسية
                </Link>
              </li>

              <li>
                <Link className="footer-link" to="/produits">
                  مجموعتنا
                </Link>
              </li>

              <li>
                <Link className="footer-link" to="/panier">
                  سلة المشتريات
                </Link>
              </li>

              <li>
                <Link className="footer-link" to="/commande">
                  إتمام الطلب
                </Link>
              </li>
            </ul>
          </div>

          {/* =========================
              CONTACT
          ========================== */}
          <div>
            <h3 className="footer-title">
              تواصل معنا
            </h3>

            <div className="space-y-5">
              <div className="flex items-start gap-3">
                <span className="contact-icon">
                  <Phone size={16} />
                </span>

                <div>
                  <p className="contact-label">
                    الهاتف
                  </p>

                  <a
                    href="tel:+212617125803"
                    className="contact-value"
                    dir="ltr"
                  >
                    +212 6 17 12 58 03
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="contact-icon">
                  <MessageCircle size={16} />
                </span>

                <div>
                  <p className="contact-label">
                    واتساب
                  </p>

                  <a
                    href="https://wa.me/212617125803"
                    target="_blank"
                    rel="noreferrer"
                    className="contact-value"
                  >
                    تحدث معنا عبر واتساب
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="contact-icon">
                  <MapPin size={16} />
                </span>

                <div>
                  <p className="contact-label">
                    الموقع
                  </p>

                  <p className="contact-value">
                    المغرب
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="contact-icon">
                  <Mail size={16} />
                </span>

                <div>
                  <p className="contact-label">
                    البريد الإلكتروني
                  </p>

                  <a
                    href="mailto:contact@example.com"
                    className="contact-value"
                    dir="ltr"
                  >
                    contact@example.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* =========================
              MESSAGE CARD
          ========================== */}
          <div>
            <div
              className="
                rounded-3xl
                p-6
                sm:p-7
                h-full
                flex
                flex-col
                justify-between
              "
              style={{
                backgroundColor: CARD_BG,
              }}
            >
              <div>
                <p
                  className="text-xs tracking-[0.18em] uppercase mb-3"
                  style={{ color: `${INK}99` }}
                >
                  رسالتنا
                </p>

                <h3
                  className="
                    text-2xl
                    sm:text-3xl
                    font-semibold
                    leading-tight
                  "
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    color: INK,
                  }}
                >
                  الجمال يبدأ
                  <br />
                  من التفاصيل.
                </h3>

                <p
                  className="mt-4 text-sm leading-7"
                  style={{ color: `${INK}B8` }}
                >
                  نختار قطعنا بعناية لنقدم لك تجربة تجمع بين
                  الأصالة، الراحة والأناقة.
                </p>
              </div>

              <Link
                to="/produits"
                className="
                  inline-flex
                  items-center
                  justify-center
                  w-full
                  mt-7
                  rounded-full
                  px-5
                  py-3
                  text-sm
                  font-bold
                  transition-all
                  duration-300
                  hover:-translate-y-1
                "
                style={{
                  backgroundColor: INK,
                  color: "#fff",
                }}
              >
                اكتشفي المجموعة
              </Link>
            </div>
          </div>
        </div>

        {/* =========================
            DIVIDER
        ========================== */}
        <div
          className="my-10 sm:my-12 h-px w-full"
          style={{
            backgroundColor: `${INK}18`,
          }}
        />

        {/* =========================
            BOTTOM
        ========================== */}
        <div
          className="
            flex
            flex-col
            md:flex-row
            items-center
            justify-between
            gap-5
            text-center
            md:text-right
          "
        >
          <p
            className="text-xs sm:text-sm"
            style={{ color: `${INK}88` }}
          >
            © {new Date().getFullYear()} — جميع الحقوق محفوظة.
          </p>

          <p
            className="text-xs sm:text-sm"
            style={{ color: `${INK}88` }}
          >
            صُنع بحب في المغرب 🇲🇦
          </p>

          {/* Back to top */}
          <button
            type="button"
            onClick={scrollToTop}
            className="
              flex
              items-center
              justify-center
              gap-2
              rounded-full
              px-4
              py-2
              text-xs
              font-semibold
              transition-all
              duration-300
              hover:-translate-y-1
            "
            style={{
              backgroundColor: `${CARD_BG}88`,
              color: INK,
            }}
          >
            العودة للأعلى
            <ArrowUp size={14} />
          </button>
        </div>
      </div>

      {/* =========================
          STYLES
      ========================== */}
      <style>{`
        .footer-title {
          margin-bottom: 20px;
          font-size: 18px;
          font-weight: 700;
          color: ${INK};
        }

        .footer-link {
          display: inline-block;
          font-size: 14px;
          color: ${INK}B0;
          transition:
            color 0.3s ease,
            transform 0.3s ease;
        }

        .footer-link:hover {
          color: ${ROSE};
          transform: translateX(-4px);
        }

        .social-link {
          width: 40px;
          height: 40px;

          display: flex;
          align-items: center;
          justify-content: center;

          border-radius: 50%;

          background: ${CARD_BG}66;
          color: ${INK};

          transition:
            transform 0.3s ease,
            background 0.3s ease,
            color 0.3s ease;
        }

        .social-link:hover {
          transform: translateY(-4px);
          background: ${CARD_BG};
          color: ${ROSE};
        }

        .contact-icon {
          width: 34px;
          height: 34px;

          flex-shrink: 0;

          display: flex;
          align-items: center;
          justify-content: center;

          border-radius: 50%;

          background: ${CARD_BG}66;
          color: ${INK};
        }

        .contact-label {
          margin-bottom: 2px;
          font-size: 11px;
          color: ${INK}80;
        }

        .contact-value {
          font-size: 13px;
          color: ${INK}B8;
          transition: color 0.3s ease;
        }

        .contact-value:hover {
          color: ${ROSE};
        }

        @media (max-width: 640px) {
          .footer-title {
            font-size: 17px;
            margin-bottom: 16px;
          }
        }
      `}</style>
    </footer>
  );
}