"use client";

import React from "react";
import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import ProductCard from "../../components/ProductCard";

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Handcrafted Item 1",
    description: "A unique piece made with care.",
    image: "/next.svg", // replace with your image path
  },
  {
    id: 2,
    name: "Handcrafted Item 2",
    description: "Another unique creation.",
    image: "/vercel.svg", // replace with your image path
  },
  {
    id: 3,
    name: "Handcrafted Item 3",
    description: "A special creation that stands out.",
    image: "/globe.svg", // replace with your image path
  },
  {
    id: 4,
    name: "Handcrafted Item 1",
    description: "A special creation that stands out.",
    image: "/globe.svg",
  },
  {
    id: 5,
    name: "Handcrafted Item 2",
    description: "A unique piece made with care.",
    image: "/next.svg",
  },
  {
    id: 6,
    name: "Handcrafted Item 3",
    description: "Another unique creation.",
    image: "/vercel.svg",
  },
  {
    id: 7,
    name: "Handcrafted Item 1",
    description: "A special creation that stands out.",
    image: "/globe.svg",
  },
  {
    id: 8,
    name: "Handcrafted Item 2",
    description: "A special creation that stands out.",
    image: "/globe.svg",
  },
];

const Portfolio: React.FC = () => {
  return (
    <Box sx={{ padding: "2rem" }}>
      <Typography variant="h3" gutterBottom>
        Faux Confectionerys&apos;
      </Typography>
      <Grid container spacing={6}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Portfolio;
