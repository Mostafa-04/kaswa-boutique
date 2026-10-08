
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, MessageCircle, ShoppingBag } from "lucide-react";

import { useCart } from "../context/CartContext";
import ProductImage from "../Components/ProductImage";

const INK = "#332B26";
const CREAM_BG = "#FAF6F2";
const ROSE = "#B4726B";
const GREEN = "#707850";

// Numéro WhatsApp qui reçoit les commandes
const WHATSAPP_NUMBER = "212617125803";

function formatPrice(prix) {
  return `${Number(prix).toLocaleString("fr-FR")} DH`;
}

export default function CommandePage() {
  const navigate = useNavigate();

  const { items, cartTotal, clearCart } = useCart();

  const [form, setForm] = useState({
    nomComplet: "",
    telephone: "",
    ville: "",
    adresse: "",
    commentaire: "",
  });

  const [error, setError] = useState("");

  /**
   * Si le panier est vide
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
            size={42}
            color={`${INK}55`}
            className="mx-auto mb-4"
          />

          <h1
            className="font-semibold text-xl mb-3"
            style={{ color: INK }}
          >
            السلة ديالك خاوية
          </h1>

          <Link
            to="/produits"
            className="underline font-semibold"
            style={{ color: ROSE }}
          >
            الرجوع للمنتوجات
          </Link>

        </div>
      </div>
    );
  }

  /**
   * Modifier le formulaire
   */
  function handleChange(e) {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    setError("");
  }

  /**
   * Envoyer la commande vers WhatsApp
   */
  function handleSubmit(e) {
    e.preventDefault();

    // Vérification obligatoire
    if (
      !form.nomComplet.trim() ||
      !form.telephone.trim() ||
      !form.ville.trim() ||
      !form.adresse.trim()
    ) {
      setError(
        "خاصك تعمر الاسم الكامل، الهاتف، المدينة والعنوان."
      );
      return;
    }

    /**
     * Construction de la liste des produits
     */
    const productsText = items
      .map((item, index) => {
        const productName = item.product.titre;
        const price = Number(item.product.prix);
        const quantity = Number(item.qty);
        const subtotal = price * quantity;

        return (
          `${index + 1}. ${productName}\n` +
          `   - Couleur: ${item.color || "Non précisée"}\n` +
          `   - Taille: ${item.taille || "Non précisée"}\n` +
          `   - color: ${item.color || "Non précisée"}\n` +
          `   - Quantité: ${quantity}\n` +
          `   - Prix: ${formatPrice(price)}\n` +
          `   - Sous-total: ${formatPrice(subtotal)}`
        );
      })
      .join("\n\n");

    /**
     * Message WhatsApp
     */
    const message =
      `🛍️ *NOUVELLE COMMANDE*\n\n` +

      `👤 *Informations client*\n` +
      `Nom complet: ${form.nomComplet.trim()}\n` +
      `Téléphone: ${form.telephone.trim()}\n` +
      `Ville: ${form.ville.trim()}\n` +
      `Adresse: ${form.adresse.trim()}\n\n` +

      `🛒 *Produits commandés*\n` +
      `${productsText}\n\n` +

      `💰 *TOTAL: ${formatPrice(cartTotal)}*\n\n` +

      `💬 *Commentaire:*\n` +
      `${form.commentaire.trim() || "Aucun commentaire"}\n\n` +

      `Merci.`;

    /**
     * Encoder le message pour URL WhatsApp
     */
    const whatsappUrl =
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
        message
      )}`;

    /**
     * Ouvrir WhatsApp
     */
    window.open(whatsappUrl, "_blank");

    /**
     * Vider le panier après l'envoi
     */
    clearCart();
  }

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
          type="button"
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 text-sm font-semibold mb-8 hover:opacity-70"
          style={{ color: INK }}
        >
          <ArrowLeft size={17} />
          الرجوع للسلة
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* =====================================
              FORMULAIRE CLIENT
          ====================================== */}
          <div
            className="bg-white rounded-2xl p-6 sm:p-8"
            style={{
              boxShadow:
                "0 1px 3px rgba(51,43,38,0.08)",
            }}
          >

            <h1
              className="text-2xl sm:text-3xl font-semibold mb-2"
              style={{
                fontFamily:
                  "'Cormorant Garamond', serif",
                color: INK,
              }}
            >
              Informations de livraison
            </h1>

            <p
              className="text-sm mb-7"
              style={{ color: `${INK}88` }}
            >
              عمر المعلومات ديالك باش نكملو الطلب.
            </p>

            {error && (
              <div
                className="mb-5 rounded-xl p-3 text-sm"
                style={{
                  backgroundColor: "#FDECEC",
                  color: "#A33A3A",
                }}
              >
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit}>

              {/* Nom complet */}
              <div className="mb-5">
                <label
                  className="block text-sm font-semibold mb-2"
                  style={{ color: INK }}
                >
                  Nom complet *
                </label>

                <input
                  type="text"
                  name="nomComplet"
                  value={form.nomComplet}
                  onChange={handleChange}
                  placeholder="Votre nom complet"
                  required
                  className="w-full rounded-xl border px-4 py-3 outline-none focus:ring-2"
                  style={{
                    borderColor: `${INK}25`,
                  }}
                />
              </div>

              {/* Téléphone */}
              <div className="mb-5">
                <label
                  className="block text-sm font-semibold mb-2"
                  style={{ color: INK }}
                >
                  Téléphone *
                </label>

                <input
                  type="tel"
                  name="telephone"
                  value={form.telephone}
                  onChange={handleChange}
                  placeholder="06XXXXXXXX"
                  required
                  className="w-full rounded-xl border px-4 py-3 outline-none"
                  style={{
                    borderColor: `${INK}25`,
                  }}
                />
              </div>

              {/* Ville */}
              <div className="mb-5">
                <label
                  className="block text-sm font-semibold mb-2"
                  style={{ color: INK }}
                >
                  Ville *
                </label>

                <input
                  type="text"
                  name="ville"
                  value={form.ville}
                  onChange={handleChange}
                  placeholder="Casablanca"
                  required
                  className="w-full rounded-xl border px-4 py-3 outline-none"
                  style={{
                    borderColor: `${INK}25`,
                  }}
                />
              </div>

              {/* Adresse */}
              <div className="mb-5">
                <label
                  className="block text-sm font-semibold mb-2"
                  style={{ color: INK }}
                >
                  Adresse *
                </label>

                <textarea
                  name="adresse"
                  value={form.adresse}
                  onChange={handleChange}
                  placeholder="Votre adresse complète"
                  required
                  rows={3}
                  className="w-full rounded-xl border px-4 py-3 outline-none resize-none"
                  style={{
                    borderColor: `${INK}25`,
                  }}
                />
              </div>

              {/* Commentaire */}
              <div className="mb-6">
                <label
                  className="block text-sm font-semibold mb-2"
                  style={{ color: INK }}
                >
                  Commentaire
                  <span
                    className="font-normal text-xs ml-1"
                    style={{ color: `${INK}77` }}
                  >
                    (optionnel)
                  </span>
                </label>

                <textarea
                  name="commentaire"
                  value={form.commentaire}
                  onChange={handleChange}
                  placeholder="Une remarque concernant votre commande..."
                  rows={3}
                  className="w-full rounded-xl border px-4 py-3 outline-none resize-none"
                  style={{
                    borderColor: `${INK}25`,
                  }}
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 rounded-full py-3.5 font-bold text-white transition-transform hover:-translate-y-0.5"
                style={{
                  backgroundColor: GREEN,
                }}
              >
                <MessageCircle size={19} />

                Confirmer la commande sur WhatsApp
              </button>

            </form>
          </div>

          {/* =====================================
              RÉSUMÉ DE LA COMMANDE
          ====================================== */}
          <div>

            <div
              className="bg-white rounded-2xl p-6"
              style={{
                boxShadow:
                  "0 1px 3px rgba(51,43,38,0.08)",
              }}
            >

              <h2
                className="text-xl font-semibold mb-6"
                style={{
                  fontFamily:
                    "'Cormorant Garamond', serif",
                  color: INK,
                }}
              >
                Résumé de la commande
              </h2>

              <div className="space-y-4">

                {items.map((item) => (

                  <div
                    key={item.key}
                    className="flex gap-3"
                  >

                    {/* Image */}
                    <div className="w-16 h-20 rounded-lg overflow-hidden shrink-0">
                      <ProductImage
                        product={item.product}
                      />
                    </div>

                    {/* Info */}
                    <div className="flex-1 min-w-0">

                      <p
                        className="font-semibold text-sm"
                        style={{ color: INK }}
                      >
                        {item.product.titre}
                      </p>

                      <p
                        className="text-xs mt-1"
                        style={{ color: `${INK}88` }}
                      >
                        Quantité: {item.qty}
                      </p>

                      {item.taille && (
                        <p
                          className="text-xs"
                          style={{ color: `${INK}88` }}
                        >
                          Taille: {item.taille}
                        </p>
                      )}

                      <p
                        className="font-bold text-sm mt-1"
                        style={{ color: ROSE }}
                      >
                        {formatPrice(
                          item.product.prix * item.qty
                        )}
                      </p>

                    </div>

                  </div>

                ))}

              </div>

              {/* Total */}
              <div
                className="border-t mt-6 pt-5 flex items-center justify-between"
                style={{
                  borderColor: `${INK}15`,
                }}
              >

                <span
                  className="font-semibold"
                  style={{ color: INK }}
                >
                  Total
                </span>

                <span
                  className="text-xl font-bold"
                  style={{ color: ROSE }}
                >
                  {formatPrice(cartTotal)}
                </span>

              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
