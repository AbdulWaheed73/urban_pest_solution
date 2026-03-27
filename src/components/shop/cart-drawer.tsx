"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useCart } from "@/providers/cart-provider";
import { ShoppingCart, Plus, Minus, Trash2, ShoppingBag } from "lucide-react";
import { getIcon } from "@/lib/icons";
import { Package } from "lucide-react";

export function CartDrawer() {
  const {
    items,
    removeItem,
    updateQuantity,
    clearCart,
    totalItems,
    totalPrice,
    isOpen,
    setIsOpen,
  } = useCart();

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger className="relative inline-flex items-center justify-center rounded-xl p-2.5 hover:bg-black/5 transition-colors">
        <ShoppingCart className="h-5 w-5 text-charcoal" />
        {totalItems > 0 && (
          <span className="absolute -top-0.5 -right-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-forest text-white text-[10px] font-bold">
            {totalItems}
          </span>
        )}
      </SheetTrigger>
      <SheetContent side="right" className="w-96 p-0 flex flex-col">
        {/* Header */}
        <div className="p-6 border-b border-black/5">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-forest-light">
              <ShoppingBag className="h-5 w-5 text-forest" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-charcoal">Your Cart</h2>
              <p className="text-xs text-slate-mid">
                {totalItems} {totalItems === 1 ? "item" : "items"}
              </p>
            </div>
          </div>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center py-12">
              <ShoppingCart className="h-16 w-16 text-forest-light mb-4" />
              <p className="text-charcoal font-semibold mb-1">Cart is empty</p>
              <p className="text-sm text-slate-mid">
                Browse our shop and add some products!
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => {
                const IconComponent = getIcon(item.product.icon, Package);
                return (
                  <div
                    key={item.product.id}
                    className="flex gap-4 p-3 rounded-xl bg-off-white"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-forest-light">
                      <IconComponent className="h-5 w-5 text-forest" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-charcoal truncate">
                        {item.product.name}
                      </p>
                      <p className="text-xs text-slate-mid">
                        Rs. {item.product.price.toLocaleString()} each
                      </p>
                      <div className="flex items-center gap-2 mt-2">
                        <button
                          onClick={() =>
                            updateQuantity(item.product.id, item.quantity - 1)
                          }
                          className="flex h-7 w-7 items-center justify-center rounded-lg bg-white border border-black/10 hover:bg-forest-light transition-colors"
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="text-sm font-bold text-charcoal w-6 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.product.id, item.quantity + 1)
                          }
                          className="flex h-7 w-7 items-center justify-center rounded-lg bg-white border border-black/10 hover:bg-forest-light transition-colors"
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                        <button
                          onClick={() => removeItem(item.product.id)}
                          className="ml-auto flex h-7 w-7 items-center justify-center rounded-lg hover:bg-danger/10 transition-colors"
                        >
                          <Trash2 className="h-3.5 w-3.5 text-danger" />
                        </button>
                      </div>
                    </div>
                    <p className="text-sm font-bold text-charcoal whitespace-nowrap">
                      Rs. {(item.product.price * item.quantity).toLocaleString()}
                    </p>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="p-6 border-t border-black/5 space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-slate-mid">Subtotal</span>
              <span className="text-xl font-extrabold text-charcoal">
                Rs. {totalPrice.toLocaleString()}
              </span>
            </div>
            <Button
              className="w-full bg-forest hover:bg-forest-dark text-white font-semibold rounded-xl py-5 shadow-lg"
              onClick={() => {
                alert(
                  "This is a mockup. In production, this would proceed to checkout."
                );
              }}
            >
              Proceed to Checkout
            </Button>
            <button
              onClick={clearCart}
              className="w-full text-sm text-slate-mid hover:text-danger transition-colors text-center"
            >
              Clear Cart
            </button>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
