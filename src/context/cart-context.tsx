"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from "react";

export const ROASTED_TIERS = [
  { label: "100g",  grams: 100,   delivery: 60 },
  { label: "250g",  grams: 250,   delivery: 80 },
  { label: "500g",  grams: 500,   delivery: 100 },
  { label: "1kg",   grams: 1000,  delivery: 150 },
] as const;

export const GREEN_TIERS = [
  { label: "250g",  grams: 250,   delivery: 80 },
  { label: "1kg",   grams: 1000,  delivery: 150 },
  { label: "5kg",   grams: 5000,  delivery: 300 },
] as const;

export type RoastedTierLabel = (typeof ROASTED_TIERS)[number]["label"];
export type GreenTierLabel   = (typeof GREEN_TIERS)[number]["label"];
export type WeightLabel = RoastedTierLabel | GreenTierLabel;

export type CartItem = { productId: string; weight: WeightLabel };

export function computeItemPrice(pricePerKg: number, grams: number): number {
  return Math.ceil((pricePerKg / 1000) * grams);
}

type CartCtx = {
  items: CartItem[];
  add: (productId: string, weight: WeightLabel) => void;
  remove: (productId: string) => void;
  updateWeight: (productId: string, weight: WeightLabel) => void;
  isInCart: (productId: string) => boolean;
  clear: () => void;
  count: number;
};

const CartContext = createContext<CartCtx | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("odisha_cart");
      if (!raw) return;
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) setItems(parsed);
    } catch {}
  }, []);

  useEffect(() => {
    localStorage.setItem("odisha_cart", JSON.stringify(items));
  }, [items]);

  const add = useCallback((productId: string, weight: WeightLabel) => {
    setItems((prev) =>
      prev.some((i) => i.productId === productId) ? prev : [...prev, { productId, weight }]
    );
  }, []);

  const remove = useCallback((productId: string) => {
    setItems((prev) => prev.filter((i) => i.productId !== productId));
  }, []);

  const updateWeight = useCallback((productId: string, weight: WeightLabel) => {
    setItems((prev) => prev.map((i) => i.productId === productId ? { ...i, weight } : i));
  }, []);

  const isInCart = useCallback(
    (productId: string) => items.some((i) => i.productId === productId),
    [items]
  );

  const clear = useCallback(() => setItems([]), []);

  return (
    <CartContext.Provider value={{ items, add, remove, updateWeight, isInCart, clear, count: items.length }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
}
