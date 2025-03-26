"use client";

import React from "react";
import Image from "next/image";
import { Box, Typography } from "@mui/material";

interface Product {
  _id?: string;
  name: string;
  description: string;
  image: string;
  price: number; // Make it optional if some products might not have a price defined
}

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const formattedPrice =
    product.price !== undefined ? `$${product.price.toFixed(2)}` : "Price Unavailable";

  return (
    <Box sx={{ border: "1px solid #ccc", borderRadius: 1, p: 2 }}>
      <Box sx={{ position: "relative", width: "100%", height: 200, mb: 1 }}>
        <Image
          src={product.image}
          alt={product.name}
          fill
          style={{ objectFit: "cover", borderRadius: 4 }}
        />
      </Box>
      <Typography variant="h6">{product.name}</Typography>
      <Typography variant="body2">{product.description}</Typography>
      <Typography variant="subtitle1" color="primary">
        {formattedPrice}
      </Typography>
    </Box>
  );
};

export default ProductCard;
