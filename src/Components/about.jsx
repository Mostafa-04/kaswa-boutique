import React from "react";
import { Gem, Moon, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

/**
 * About — Kaswa Boutique
 * -----------------------------------------------------------------------
 * يكمّل نفس نظام التصميم ديال Hero.jsx: نفس الألوان، نفس الخطوط،
 * ونفس روح الهلال/الوشاح كتوقيع بصري، لكن بتركيبة جديدة (لوحة + نص)
 * باش يبقى القسم مميز وماشي تكرار للـ Hero.
 *
 * الخطوط (زيديها فـ index.html للأداء الأفضل):
 * <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600&family=Aref+Ruqaa:wght@700&family=Tajawal:wght@300;400;500;700&display=swap" rel="stylesheet" />
 */

const COLORS = {
  cream: "#F5F0E8",
  creamSoft: "#FBF8F3",
  olive: "#6B7052",
  oliveDark: "#565B43",
  rose: "#C99B92",
  roseDark: "#A97367",
  gold: "#B8935F",
  ink: "#2E2A24",
};

const VALUES = [
  {
    icon: Moon,
    title: "حشمة بلا تنازل",
    desc: "كل قطعة مدروسة باش تجمعي بين الستر والراحة، بلا ما تخسري الأناقة.",
  },
  {
    icon: Gem,
    title: "جودة مختارة بعين",
    desc: "أقمشة وخياطة كنختاروها بيدنا، قطعة قطعة، قبل ما توصل ليك.",
  },
  {
    icon: Sparkles,
    title: "لمسة مغربية أصيلة",
    desc: "إلهام من التراث المغربي، بقصّات عصرية كتلائم يومك.",
  },
];

function EmblemWatermark() {
  return (
    <svg
      viewBox="0 0 220 220"
      className="absolute -bottom-10 -left-10 w-56 h-56 sm:w-64 sm:h-64"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M118 24C79 24 47 58 47 100c0 42 32 76 71 76 15 0 29-4.5 41-12.5-12 6-25 9-38 9-38 0-69-33-69-73.5S91 25.5 129 25.5c9.5 0 18.5 1.8 27 5C144 27 132 24 118 24Z"
        stroke={COLORS.creamSoft}
        strokeWidth="2"
        opacity="0.9"
      />
      <circle cx="182" cy="66" r="2.6" fill={COLORS.creamSoft} opacity="0.9" />
      <circle cx="196" cy="108" r="2" fill={COLORS.creamSoft} opacity="0.7" />
    </svg>
  );
}

export default function About() {
  return (
    <section
      id="about"
      dir="rtl"
      className="relative"
      style={{ backgroundColor: COLORS.creamSoft, fontFamily: "'Tajawal', sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600&family=Aref+Ruqaa:wght@700&family=Tajawal:wght@300;400;500;700&display=swap');
        .kaswa-heading { font-family: 'Aref Ruqaa', serif; }
        .kaswa-wordmark { font-family: 'Cormorant Garamond', 'Times New Roman', serif; }
      `}</style>

      <div className="max-w-6xl mx-auto px-6 py-16 sm:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* اللوحة البصرية */}
<div className="relative order-2 lg:order-1">
  <div
    className="relative overflow-hidden rounded-[2rem] aspect-[4/5] max-w-md mx-auto shadow-xl"
    style={{
      background: `linear-gradient(
        155deg,
        ${COLORS.roseDark} 0%,
        ${COLORS.rose} 35%,
        ${COLORS.creamSoft} 62%,
        ${COLORS.olive} 100%
      )`,
    }}
  >
    <EmblemWatermark />

    {/* Logo */}
    <div className="absolute inset-0 flex items-center justify-center">
      <img
        src="/logo.png"
        alt="Kaswa"
        className="w-[65%] max-w-[260px] h-auto object-contain"
      />
    </div>
  </div>

  {/* بطاقة عائمة */}
  <div
    className="absolute -bottom-6 right-6 sm:right-10 rounded-2xl px-6 py-4 shadow-lg text-center"
    style={{
      backgroundColor: "#FFFFFF",
    }}
  >
    <p
      className="kaswa-wordmark"
      style={{
        fontSize: "1.9rem",
        color: COLORS.roseDark,
        lineHeight: 1,
      }}
    >
      +10
    </p>

    <p
      className="text-xs font-bold mt-1"
      style={{
        color: COLORS.olive,
        letterSpacing: "0.08em",
      }}
    >
      قطعة مختارة بعناية
    </p>
  </div>
</div>

        {/* النص */}
        <div className="order-1 lg:order-2">
          <p
            className="text-xs sm:text-sm font-bold uppercase"
            style={{ color: COLORS.gold, letterSpacing: "0.25em" }}
          >
            قصتنا
          </p>

          <h2
            className="kaswa-heading mt-4 leading-[1.35]"
            style={{ fontSize: "clamp(1.9rem, 4vw, 2.6rem)", color: COLORS.ink }}
          >
            كسوة ولدات من رغبة بسيطة:
            <br />
            نلبسو حشمتنا بأسلوبنا
          </h2>

          <p className="mt-5 leading-relaxed" style={{ color: `${COLORS.ink}b3`, fontSize: "1.02rem" }}>
            كسوة بوتيك هي وجهتك للملابس النسائية المحتشمة — من البوركيني للشاطئ،
            للعباية والسلهام للمناسبات. كنختارو كل قطعة بحب، بأقمشة مريحة وقصّات
            كتحترم جسمك، باش تعيشي يومك بثقة، فين ما كنتي.
          </p>

          <div className="mt-9 space-y-5">
            {VALUES.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex items-start gap-4">
                <span
                  className="flex items-center justify-center rounded-full shrink-0"
                  style={{ width: 44, height: 44, backgroundColor: `${COLORS.olive}1a` }}
                >
                  <Icon size={20} color={COLORS.olive} strokeWidth={1.8} />
                </span>
                <div>
                  <h3 className="font-bold" style={{ color: COLORS.ink, fontSize: "1.02rem" }}>
                    {title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed" style={{ color: `${COLORS.ink}99` }}>
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <Link
            to="/produits"
            className="inline-block mt-10 rounded-full px-8 py-3 font-bold text-white transition-transform hover:-translate-y-0.5"
            style={{ backgroundColor: COLORS.olive }}
          >
            تصفّحي المجموعة
          </Link>
        </div>
      </div>
    </section>
  );
}