"use client";

import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import ProductCard from "@/components/ProductCard";

interface Product {
  _id?: string;
  name: string;
  description: string;
  image: string;
  category: "refinishedFurniture" | "fauxConfectionery";
  approved: boolean; // New field added
}

const Portfolio: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string>("");

  const fetchProducts = async () => {
    try {
      const res = await fetch("/api/products");
      const data = await res.json();
      if (data.success) {
        setProducts(data.products);
      } else {
        setError("Failed to fetch products.");
      }
    } catch (err: any) {
      setError(err.message);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Filter out only approved products
  const approvedProducts = products.filter((p) => p.approved);

  // Split approved products into two groups by category.
  const furnitureProducts = approvedProducts.filter(
    (p) => p.category === "refinishedFurniture"
  );
  const confectionProducts = approvedProducts.filter(
    (p) => p.category === "fauxConfectionery"
  );

  return (
    <Box sx={{ padding: "1rem" }}>
      <div style={{ textAlign: "center" }}>
        <h3>Refinished Furniture</h3>
      </div>
      {/* Refinished Furniture Section */}
      <Box
        sx={{
          display: "grid",
          gap: 2,
          gridTemplateColumns: { xs: "1fr", md: "1fr 3fr 1fr" },
          mb: 4,
        }}
      >
        <Box />
        <Box
          sx={{
            display: "grid",
            gap: 2,
            gridTemplateColumns: {
              xs: "repeat(2, 1fr)",
              sm: "repeat(auto-fit, minmax(150px, 1fr))",
            },
          }}
        >
          {furnitureProducts.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </Box>
        <Box />
      </Box>

      {/* Faux Confectionery Section */}
      <div style={{ textAlign: "center" }}>
        <h3>Faux Confectionery&apos;s</h3>
      </div>
      <Box
        sx={{
          display: "grid",
          gap: 2,
          gridTemplateColumns: { xs: "1fr", md: "1fr 3fr 1fr" },
        }}
      >
        <Box />
        <Box
          sx={{
            display: "grid",
            gap: 2,
            gridTemplateColumns: {
              xs: "repeat(2, 1fr)",
              sm: "repeat(auto-fit, minmax(150px, 1fr))",
            },
          }}
        >
          {confectionProducts.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </Box>
        <Box />
      </Box>
    </Box>
  );
};

export default Portfolio;
