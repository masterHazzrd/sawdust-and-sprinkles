"use client";

import React from "react";
import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import ProductCard from "../../components/ProductCard";

interface Product {
  id: number;
  price: string;
  name: string;
  description: string;
  image: string;
}

const products: Product[] = [
  {
    id: 1,
    price: "$13.99",
    name: "Holiday Hot Chocolate",
    description: "A unique piece made with care.",    
    image: "/FauxConfectionImages/Photoroom-20241120_123910.jpg",
  },
  {
    id: 2,
    name: "Holiday Hot Chocolate",
    description: "A unique piece made with care.",
    price: "$13.99",
    image: "/FauxConfectionImages/Photoroom-20241120_123910.jpg",
  },
  {
    id: 3,
    name: "Holiday Hot Chocolate",
    description: "A unique piece made with care.",
    price: "$13.99",
    image: "/FauxConfectionImages/Photoroom-20241120_123910.jpg",
  },
  {
    id: 4,
    name: "Holiday Hot Chocolate",
    description: "A unique piece made with care.",
    price: "$13.99",
    image: "/FauxConfectionImages/Photoroom-20241120_123910.jpg",
  },
  {
    id: 5,
    name: "Holiday Hot Chocolate",
    description: "A unique piece made with care.",
    price: "$13.99",
    image: "/FauxConfectionImages/Photoroom-20241120_123910.jpg",
  },
  {
    id: 6,
    name: "Holiday Hot Chocolate",
    description: "A unique piece made with care.",
    price: "$13.99",
    image: "/FauxConfectionImages/Photoroom-20241120_123910.jpg",
  },
  {
    id: 7,
    name: "Holiday Hot Chocolate",
    description: "A unique piece made with care.",
    price: "$13.99",
    image: "/FauxConfectionImages/Photoroom-20241120_123910.jpg",
  },
  {
    id: 8,
    name: "Holiday Hot Chocolate",
    description: "A unique piece made with care.",
    price: "$13.99",
    image: "/FauxConfectionImages/Photoroom-20241120_123910.jpg",
  },
];

const Portfolio: React.FC = () => {
  return (
    <Box sx={{ padding: "1rem" }}>
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
