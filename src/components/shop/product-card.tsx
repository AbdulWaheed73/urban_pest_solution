"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Product } from "@/types";
import { useCart } from "@/providers/cart-provider";
import { getIcon } from "@/lib/icons";
import { ShoppingCart, Package } from "lucide-react";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart();
  const IconComponent = getIcon(product.icon, Package);

  return (
    <div className="group hover-card-premium rounded-2xl bg-white p-6 flex flex-col">
      {/* Badge */}
      {product.badge && (
        <Badge className="self-start mb-3 bg-amber text-white border-0 text-xs font-semibold">
          {product.badge}
        </Badge>
      )}

      {/* Icon */}
      <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-forest to-forest-dark shadow-lg shadow-forest/15 group-hover:scale-110 transition-transform duration-300">
        <IconComponent className="h-8 w-8 text-white" />
      </div>

      {/* Content */}
      <h3 className="text-lg font-bold text-charcoal mb-2 group-hover:text-forest transition-colors">
        {product.name}
      </h3>
      <p className="text-sm text-slate-mid leading-relaxed mb-5 flex-1">
        {product.description}
      </p>

      {/* Price */}
      <div className="flex items-baseline gap-2 mb-4">
        <span className="text-2xl font-extrabold text-charcoal">
          Rs. {product.price.toLocaleString()}
        </span>
        {product.originalPrice && (
          <span className="text-sm text-slate-mid line-through">
            Rs. {product.originalPrice.toLocaleString()}
          </span>
        )}
        {product.originalPrice && (
          <Badge className="bg-danger/10 text-danger border-0 text-xs">
            {Math.round(
              ((product.originalPrice - product.price) / product.originalPrice) * 100
            )}
            % OFF
          </Badge>
        )}
      </div>

      {/* Add to Cart */}
      <Button
        onClick={() => addItem(product)}
        className="w-full bg-forest hover:bg-forest-dark text-white font-semibold rounded-xl py-5 shadow-lg shadow-forest/15 transition-all"
      >
        <ShoppingCart className="mr-2 h-4 w-4" />
        Add to Cart
      </Button>
    </div>
  );
}
