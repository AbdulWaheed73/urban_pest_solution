"use client";

import { useState } from "react";
import { HeroSection } from "@/components/sections/hero-section";
import { SectionHeading } from "@/components/shared/section-heading";
import { ProductCard } from "@/components/shop/product-card";
import { CategoryFilter } from "@/components/shop/category-filter";
import { products } from "@/data/products";

export default function ShopPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProducts =
    activeCategory === "all"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <>
      <HeroSection
        title="Pest Control Shop"
        subtitle="Professional-grade pest control products for your home and business. Traps, bait stations, sprays, and more — delivered to your door."
        compact
      />

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Shop"
            title="Browse Our Products"
            subtitle="Everything you need to protect your space from pests. All products are professional-grade and eco-friendly where possible."
          />

          {/* Category Filter */}
          <div className="mb-12">
            <CategoryFilter
              active={activeCategory}
              onChange={setActiveCategory}
            />
          </div>

          {/* Products Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-slate-mid text-lg">
                No products found in this category.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
