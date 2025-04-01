"use client";

import React from "react";
import Image from "next/image";
import { Box, Typography } from "@mui/material";

interface Product {
  _id?: string;
  name: string;
  description: string;
  image: string;
  price: number; // Assumed to be a number after conversion
}

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const formattedPrice =
    product.price !== undefined ? `$${product.price.toFixed(2)}` : "Price Unavailable";

  return (
    <Box sx={{ border: "1px solid #ccc", borderRadius: 1, p: 2 }}>
      <Box sx={{ position: "relative", width: "auto", height: 500, mb: 1 }}>
        <Image
          src={product.image}
          alt={product.name}
          fill
          style={{ objectFit: "contain", borderRadius: 4 }}
        />
      </Box>
      <Typography variant="h5">{product.name}</Typography>
      <Typography
        variant="body2"
        sx={{
          height: "80px",         // Fixed height (adjust as needed)
          overflow: "hidden",      // Hide overflow text
          display: "flex",
          alignItems: "flex-start",
          padding: "0.5rem",
        }}
      >
        {product.description}
      </Typography>
      <Typography variant="subtitle1" color="primary">
        {formattedPrice}
      </Typography>
    </Box>
  );
};

export default ProductCard;
