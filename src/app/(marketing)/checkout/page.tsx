"use client";

import { useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { CheckoutForm } from "@/components/checkout-form";
import { products, type Product } from "@/data/products";
import { ROASTED_TIERS, GREEN_TIERS, computeItemPrice } from "@/context/cart-context";

type CheckoutRow = { product: Product; weight: string; price: number; delivery: number; entry: string };

function CheckoutContent() {
  const params = useSearchParams();
  const productsParam = params.get("products") || "";
  const totalParam    = Number(params.get("total") || 0);

  const cartItems: CheckoutRow[] = useMemo(() => {
    if (!productsParam) return [];
    return productsParam.split(",").flatMap((entry) => {
      const [productId, weight] = entry.split(":");
      const product = products.find((p) => p.id === productId);
      if (!product) return [];
      const tiers = product.isGreen ? GREEN_TIERS : ROASTED_TIERS;
      const tier  = tiers.find((t) => t.label === weight) ?? tiers[0];
      const price = computeItemPrice(product.pricePerKg, tier.grams);
      return [{ product, weight: tier.label, price, delivery: tier.delivery, entry }];
    });
  }, [productsParam]);

  const productStrings = cartItems.map((i) => i.entry);
  const total = totalParam || cartItems.reduce((s, i) => s + i.price + i.delivery, 0);

  return (
    <div>
      {/* Header */}
      <section className="bg-odisha-red pattachitra-pattern-red border-b-2 border-odisha-black">
        <div className="max-w-7xl mx-auto px-4 lg:px-6 py-10">
          <div className="flex items-center gap-3 mb-3">
            <Link href="/" className="text-xs text-white/40 hover:text-white/70 uppercase tracking-widest transition-colors">Home</Link>
            <span className="text-white/20">/</span>
            <Link href="/cart" className="text-xs text-white/40 hover:text-white/70 uppercase tracking-widest transition-colors">Cart</Link>
            <span className="text-white/20">/</span>
            <span className="text-xs text-white/60 uppercase tracking-widest">Checkout</span>
          </div>
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-white">Checkout</h1>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 lg:px-6 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Form */}
          <div className="lg:col-span-3">
            <CheckoutForm
              products={productStrings}
              totalAmount={total}
              onBack={() => window.history.back()}
            />
          </div>

          {/* Order summary */}
          <div className="lg:col-span-2">
            <div className="border-2 border-odisha-black bg-white p-6 sticky top-24">
              <h2 className="font-serif font-bold text-odisha-black text-base mb-5 pb-3 border-b-2 border-odisha-black uppercase tracking-widest text-sm">
                Your Order
              </h2>
              <div className="space-y-4 mb-5">
                {cartItems.map(({ product, weight, price, delivery }) => (
                  <div key={product.id} className="flex gap-3">
                    <div className="w-12 h-12 border-2 border-odisha-black shrink-0 overflow-hidden relative bg-odisha-offwhite">
                      {product.image && (
                        <Image src={`/products/${product.image}`} alt={product.name} fill className="object-cover" />
                      )}
                    </div>
                    <div className="flex-1">
                      <p className="text-xs font-semibold text-odisha-black leading-snug">{product.name}</p>
                      <p className="text-[10px] text-odisha-black/50 mt-0.5">{weight} · +₹{delivery} delivery</p>
                    </div>
                    <p className="text-sm font-bold text-odisha-black whitespace-nowrap">
                      ₹{(price + delivery).toLocaleString("en-IN")}
                    </p>
                  </div>
                ))}
              </div>
              <div className="border-t-2 border-odisha-black pt-4">
                <div className="flex justify-between font-bold text-odisha-black text-base">
                  <span>Total</span>
                  <span>₹{total.toLocaleString("en-IN")}</span>
                </div>
                <p className="text-[10px] text-odisha-black/40 mt-2">Secure payment via Cashfree</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function CheckoutPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-odisha-black/40">Loading…</div>}>
      <CheckoutContent />
    </Suspense>
  );
}
