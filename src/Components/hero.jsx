import React from "react";
import { Link } from "react-router-dom";

/**
 * Hero — Kaswa Boutique
 * -----------------------------------------------------------------------
 * يعتمد على هوية الشعار: هلال ذهبي مزدوج الخط + وشاح قماش متدرّج
 * (وردي مغبر → كريمي → أخضر زيتوني)، مع خط سيريف فاخر للاسم اللاتيني
 * وخط عربي أنيق للمحتوى. النجمة والنقاط المتفرقة توقيع بصري متكرر.
 *
 * الخطوط: أضيفي هاذ السطر فـ index.html ديالك (فـ <head>) للأداء الأفضل:
 * <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600&family=Aref+Ruqaa:wght@700&family=Tajawal:wght@300;400;500;700&display=swap" rel="stylesheet" />
 * (الـ @import أسفله كـ fallback باش يخدم الكومبونا حتى بلا ما تزيدي الرابط)
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

function EmblemMoon({ size = 210 }) {
  return (
    <svg
      viewBox="0 0 220 220"
      width={size}
      height={size}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="fabricGradient" x1="20%" y1="0%" x2="85%" y2="100%">
          <stop offset="0%" stopColor={COLORS.roseDark} />
          <stop offset="38%" stopColor={COLORS.rose} />
          <stop offset="62%" stopColor={COLORS.creamSoft} />
          <stop offset="100%" stopColor={COLORS.olive} />
        </linearGradient>
      </defs>

      {/* الهلال — خطان ذهبيان متداخلان */}
      <path
        d="M118 24C79 24 47 58 47 100c0 42 32 76 71 76 15 0 29-4.5 41-12.5-12 6-25 9-38 9-38 0-69-33-69-73.5S91 25.5 129 25.5c9.5 0 18.5 1.8 27 5C144 27 132 24 118 24Z"
        stroke={COLORS.gold}
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M112 40c-32 0-58 27-58 60s26 60 58 60c9 0 17.5-2 25-5.6-30-3-53-29-53-59.5S121 41.4 151 44.4c-11.5-3-24.5-4.4-39-4.4Z"
        stroke={COLORS.gold}
        strokeWidth="1.2"
        opacity="0.75"
      />

      {/* وشاح القماش المتدرّج المنسدل من داخل الهلال */}
      <path
        d="M95 55C78 78 66 104 63 130c-2.5 22 4 40 20 52 8 6 17.5 9 27 9-9-4-16-11-19-20-4-11.5-1.5-24 6-33.5 9-11 22-15 34-13-13-6-22-17-27-30-6-15.5-6-32 1-46-4 2-7.5 4.5-10 7Z"
        fill="url(#fabricGradient)"
        opacity="0.95"
      />
      <path
        d="M108 52c-9 20-9.5 40-2 57 6.5 15 18.5 26.5 33 31.5-3-3-5-7-5.5-11.5-1-9 4-17.5 12.5-21 8-3.3 16.5-1.8 22.5 3.3-4-9-11-16.5-20-21-13-6.6-21-19-24-33-1-4.7-1.5-9.6-1.5-14.5-5 2.6-10 5.5-14.5 9.2Z"
        fill={COLORS.oliveDark}
        opacity="0.5"
      />

      {/* نجمة */}
      <path
        d="M182 66l3.2 9.4 9.4 3.2-9.4 3.2-3.2 9.4-3.2-9.4-9.4-3.2 9.4-3.2 3.2-9.4Z"
        fill={COLORS.gold}
      />
      {/* نقاط متناثرة */}
      <circle cx="196" cy="108" r="3" fill={COLORS.gold} />
      <circle cx="188" cy="122" r="2.2" fill={COLORS.gold} opacity="0.8" />
      <circle cx="178" cy="132" r="1.6" fill={COLORS.gold} opacity="0.65" />
    </svg>
  );
}

function OrnamentDivider() {
  return (
    <div className="flex items-center justify-center gap-3" aria-hidden="true">
      <span style={{ width: 56, height: 1, background: COLORS.gold, opacity: 0.55 }} />
      <span className="flex items-center gap-1">
        <span style={{ width: 4, height: 4, borderRadius: 9999, background: COLORS.gold }} />
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M7 0l1.8 5.2L14 7l-5.2 1.8L7 14l-1.8-5.2L0 7l5.2-1.8L7 0Z" fill={COLORS.gold} />
        </svg>
        <span style={{ width: 4, height: 4, borderRadius: 9999, background: COLORS.gold }} />
      </span>
      <span style={{ width: 56, height: 1, background: COLORS.gold, opacity: 0.55 }} />
    </div>
  );
}

export default function Hero() {
  return (
    <section
      dir="rtl"
      className="relative overflow-hidden"
      style={{ backgroundColor: COLORS.cream, fontFamily: "'Tajawal', sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600&family=Aref+Ruqaa:wght@700&family=Tajawal:wght@300;400;500;700&display=swap');
        .kaswa-wordmark { font-family: 'Cormorant Garamond', 'Times New Roman', serif; }
        .kaswa-heading { font-family: 'Aref Ruqaa', serif; }
        @keyframes kaswaFadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .kaswa-fade { animation: kaswaFadeUp 0.8s ease-out both; }
      `}</style>

      {/* توهّج زخرفي خفيف فالخلفية */}
      <div
        className="absolute -top-24 -right-20 rounded-full blur-3xl"
        style={{ width: 320, height: 320, background: COLORS.rose, opacity: 0.18 }}
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-28 -left-16 rounded-full blur-3xl"
        style={{ width: 320, height: 320, background: COLORS.gold, opacity: 0.15 }}
        aria-hidden="true"
      />

      <div className="relative max-w-4xl mx-auto px-6 pt-16 pb-20 sm:pt-20 sm:pb-24 flex flex-col items-center text-center">
        {/* الشعار */}
        <div className="kaswa-fade">
          <EmblemMoon size={170} />
        </div>

        <h1
          className="kaswa-wordmark kaswa-fade mt-1 leading-none"
          style={{
            fontSize: "clamp(3rem, 9vw, 5.5rem)",
            color: COLORS.roseDark,
            animationDelay: "0.1s",
          }}
        >
          kaswa
        </h1>

        <p
          className="kaswa-fade mt-1 font-semibold"
          style={{
            color: COLORS.olive,
            letterSpacing: "0.42em",
            fontSize: "0.85rem",
            animationDelay: "0.15s",
          }}
        >
          BOUTIQUE
        </p>

        <div className="kaswa-fade mt-4" style={{ animationDelay: "0.2s" }}>
          <OrnamentDivider />
        </div>

        {/* المحتوى العربي */}
        <p
          className="kaswa-fade mt-8 text-xs sm:text-sm font-bold uppercase"
          style={{ color: COLORS.gold, letterSpacing: "0.25em", animationDelay: "0.25s" }}
        >
          أناقة تحت ضوء القمر
        </p>

        <h2
          className="kaswa-heading kaswa-fade mt-4 leading-[1.35]"
          style={{
            fontSize: "clamp(1.9rem, 4.5vw, 2.75rem)",
            color: COLORS.ink,
            animationDelay: "0.3s",
          }}
        >
          كسوة تلفّ حشمتك بثوب من الأناقة
        </h2>

        <p
          className="kaswa-fade mt-5 max-w-xl leading-relaxed"
          style={{ color: `${COLORS.ink}b3`, fontSize: "1.05rem", animationDelay: "0.35s" }}
        >
          بوركيني، عبايات وسلاهم مُنتقاة بعناية، بلمسة مغربية أصيلة —
          لتعيشي قيمك بأسلوبك الخاص، فكل لحظة.
        </p>

        <div
          className="kaswa-fade mt-9 flex flex-col sm:flex-row items-center gap-3"
          style={{ animationDelay: "0.4s" }}
        >
          <Link
            to="/produits"
            className="rounded-full px-9 py-3.5 font-bold text-white shadow-lg transition-transform hover:-translate-y-0.5"
            style={{ backgroundColor: COLORS.gold, boxShadow: `0 12px 30px -12px ${COLORS.gold}80` }}
          >
            اكتشفي المجموعة
          </Link>
          <span className="text-sm" style={{ color: `${COLORS.ink}99` }}>
            توصيل لجميع المدن المغربية
          </span>
        </div>
      </div>
    </section>
  );
}