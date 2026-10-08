import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Sparkles } from "lucide-react";

const PAGE_BG = "#fbf8f3";
const CARD_BG = "#aeb09d";
const INK = "#332B26";
const ROSE = "#B4726B";

export default function CTA() {
  const navigate = useNavigate();

  return (
    <section
      dir="rtl"
      className="w-full px-4 sm:px-6 lg:px-8 py-14 sm:py-20 lg:py-28"
      style={{ backgroundColor: PAGE_BG }}
    >
      <div className="max-w-7xl mx-auto">
        <div
          className="relative overflow-hidden rounded-[28px] sm:rounded-[36px]"
          style={{
            backgroundColor: CARD_BG,
            boxShadow: "0 20px 60px rgba(51,43,38,0.10)",
          }}
        >
          {/* الدوائر الزخرفية */}
          <div
            className="absolute -top-24 -left-24 w-64 h-64 rounded-full opacity-20"
            style={{
              backgroundColor: "#fbf8f3",
            }}
          />

          <div
            className="absolute -bottom-32 -right-20 w-72 h-72 rounded-full opacity-10"
            style={{
              backgroundColor: ROSE,
            }}
          />

          {/* المحتوى */}
          <div className="relative z-10 px-6 py-12 sm:px-10 sm:py-16 lg:px-20 lg:py-20">
            <div className="max-w-3xl mx-auto text-center">

              {/* العنوان الصغير */}
              <div
                className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-6"
                style={{
                  backgroundColor: "rgba(251,248,243,0.45)",
                  color: INK,
                }}
              >
                <Sparkles size={15} />

                <span className="text-xs sm:text-sm font-semibold tracking-wide">
                  المجموعة الجديدة
                </span>
              </div>

              {/* العنوان الرئيسي */}
              <h2
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold leading-[1.05]"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  color: INK,
                }}
              >
                أناقة
                <br />

                <span style={{ color: ROSE }}>
                  تشبهكِ
                </span>
              </h2>

              {/* الوصف */}
              <p
                className="max-w-2xl mx-auto mt-6 text-sm sm:text-base lg:text-lg leading-8"
                style={{ color: `${INK}CC` }}
              >
                اكتشفي مجموعتنا المختارة بعناية، حيث تلتقي
                الأناقة المغربية الأصيلة بلمسة عصرية
                تناسب كل مناسبة.
              </p>

              {/* الأزرار */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mt-8">

                {/* الزر الرئيسي */}
                <button
                  type="button"
                  onClick={() => navigate("/produits")}
                  className="
                    group
                    w-full
                    sm:w-auto
                    min-w-[210px]
                    inline-flex
                    items-center
                    justify-center
                    gap-3
                    rounded-full
                    px-7
                    py-3.5
                    text-sm
                    sm:text-base
                    font-bold
                    transition-all
                    duration-300
                    hover:-translate-y-1
                  "
                  style={{
                    backgroundColor: INK,
                    color: "#fff",
                    boxShadow: "0 8px 25px rgba(51,43,38,0.18)",
                  }}
                >
                  اكتشفي المجموعة

                  <ArrowLeft
                    size={18}
                    className="transition-transform duration-300 group-hover:-translate-x-1"
                  />
                </button>

                {/* الزر الثاني */}
                <button
                  type="button"
                  onClick={() => navigate("/produits")}
                  className="
                    w-full
                    sm:w-auto
                    min-w-[170px]
                    rounded-full
                    px-7
                    py-3.5
                    text-sm
                    sm:text-base
                    font-semibold
                    transition-all
                    duration-300
                    hover:-translate-y-1
                  "
                  style={{
                    backgroundColor: "rgba(251,248,243,0.45)",
                    color: INK,
                    border: `1px solid ${INK}22`,
                  }}
                >
                  مشاهدة المنتجات
                </button>
              </div>

              {/* العبارة الأخيرة */}
              <div
                className="mt-7 text-xs sm:text-sm"
                style={{ color: `${INK}99` }}
              >
                قطع مختارة بعناية لترافقكِ في كل مناسبة.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}