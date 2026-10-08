
import React, {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const CartContext = createContext(null);

const CART_STORAGE_KEY = "cart_items";

/**
 * ============================================================
 * CART PROVIDER
 * ============================================================
 */
export function CartProvider({ children }) {
  /**
   * Charger le panier depuis localStorage
   */
  const [items, setItems] = useState(() => {
    try {
      const savedCart = localStorage.getItem(
        CART_STORAGE_KEY
      );

      if (!savedCart) {
        return [];
      }

      const parsedCart = JSON.parse(savedCart);

      return Array.isArray(parsedCart)
        ? parsedCart
        : [];
    } catch (error) {
      console.error(
        "Erreur lors du chargement du panier:",
        error
      );

      return [];
    }
  });

  /**
   * Sauvegarder automatiquement le panier
   * à chaque modification
   */
  useEffect(() => {
    try {
      localStorage.setItem(
        CART_STORAGE_KEY,
        JSON.stringify(items)
      );
    } catch (error) {
      console.error(
        "Erreur lors de la sauvegarde du panier:",
        error
      );
    }
  }, [items]);

  /**
   * ============================================================
   * AJOUTER AU PANIER
   * ============================================================
   */
  function addToCart({
    product,
    color,
    taille,
    qty = 1,
  }) {
    if (!product) {
      console.error(
        "Impossible d'ajouter le produit: product manquant"
      );
      return;
    }

    if (!taille) {
      console.error(
        "Impossible d'ajouter le produit: taille manquante"
      );
      return;
    }

    const quantity = Number(qty);

    if (!Number.isFinite(quantity) || quantity < 1) {
      return;
    }

    /**
     * Un même produit avec :
     * - même couleur
     * - même taille
     *
     * sera considéré comme le même article.
     */
    const key = `${product.id}-${color || "default"}-${taille}`;

    setItems((prevItems) => {
      const existingItem = prevItems.find(
        (item) => item.key === key
      );

      /**
       * Produit déjà dans le panier
       * => augmenter seulement la quantité
       */
      if (existingItem) {
        return prevItems.map((item) =>
          item.key === key
            ? {
                ...item,
                qty: Number(item.qty) + quantity,
              }
            : item
        );
      }

      /**
       * Nouveau produit
       */
      return [
        ...prevItems,
        {
          key,
          product,
          color: color || null,
          taille,
          qty: quantity,
        },
      ];
    });
  }

  /**
   * ============================================================
   * SUPPRIMER UN ARTICLE
   * ============================================================
   */
  function removeFromCart(key) {
    setItems((prevItems) =>
      prevItems.filter(
        (item) => item.key !== key
      )
    );
  }

  /**
   * ============================================================
   * MODIFIER QUANTITÉ
   * ============================================================
   */
  function updateQty(key, qty) {
    const quantity = Number(qty);

    /**
     * Si quantité <= 0
     * => supprimer le produit
     */
    if (
      !Number.isFinite(quantity) ||
      quantity <= 0
    ) {
      removeFromCart(key);
      return;
    }

    setItems((prevItems) =>
      prevItems.map((item) =>
        item.key === key
          ? {
              ...item,
              qty: quantity,
            }
          : item
      )
    );
  }

  /**
   * ============================================================
   * VIDER TOUT LE PANIER
   * ============================================================
   */
  function clearCart() {
    setItems([]);

    /**
     * Suppression immédiate du localStorage
     */
    try {
      localStorage.removeItem(
        CART_STORAGE_KEY
      );
    } catch (error) {
      console.error(
        "Erreur lors de la suppression du panier:",
        error
      );
    }
  }

  /**
   * ============================================================
   * NOMBRE TOTAL D'ARTICLES
   * ============================================================
   */
  const cartCount = items.reduce(
    (total, item) =>
      total + Number(item.qty || 0),
    0
  );

  /**
   * ============================================================
   * TOTAL PANIER
   * ============================================================
   */
  const cartTotal = items.reduce(
    (total, item) => {
      const price = Number(
        item.product?.prix || 0
      );

      const quantity = Number(
        item.qty || 0
      );

      return total + price * quantity;
    },
    0
  );

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQty,
        clearCart,
        cartCount,
        cartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

/**
 * ============================================================
 * USE CART
 * ============================================================
 */
export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error(
      "useCart doit être utilisé à l'intérieur de <CartProvider>"
    );
  }

  return context;
}

