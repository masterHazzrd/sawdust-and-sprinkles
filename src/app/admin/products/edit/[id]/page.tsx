"use client";

import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { useRouter, useParams } from "next/navigation";
import { Box, TextField, Button, Typography } from "@mui/material";

interface Product {
  _id?: string;
  name: string;
  description: string;
  image: string;
  price: number;
  category: string;
}

const EditProductPage: React.FC = () => {
  const router = useRouter();
  const { id } = useParams() as { id: string };
  const [product, setProduct] = useState<Product | null>(null);
  const [error, setError] = useState<string>("");

  // Fetch product details by id when the component mounts
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`/api/products/${id}`);
        const data = await res.json();
        if (data.success) {
          setProduct(data.product);
        } else {
          setError("Product not found.");
        }
      } catch (err: any) {
        setError(err.message);
      }
    };

    if (id) fetchProduct();
  }, [id]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (product) {
      setProduct({
        ...product,
        [e.target.name]: e.target.name === "price" ? Number(e.target.value) : e.target.value,
      });
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await fetch(`/api/products/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(product),
      });
      const data = await res.json();
      if (data.success) {
        router.push("/admin/product-gallery"); // Redirect back after update
      } else {
        setError("Failed to update product.");
      }
    } catch (err: any) {
      setError(err.message);
    }
  };

  if (error) {
    return <Typography color="error">{error}</Typography>;
  }

  if (!product) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <Box sx={{ padding: "2rem" }}>
      <Typography variant="h4" gutterBottom>Edit Product</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          name="name"
          value={product.name}
          onChange={handleChange}
          fullWidth
          sx={{ mb: 2 }}
        />
        <TextField
          label="Description"
          name="description"
          value={product.description}
          onChange={handleChange}
          fullWidth
          sx={{ mb: 2 }}
        />
        <TextField
          label="Image URL"
          name="image"
          value={product.image}
          onChange={handleChange}
          fullWidth
          sx={{ mb: 2 }}
        />
        <TextField
          label="Price"
          name="price"
          type="number"
          value={product.price}
          onChange={handleChange}
          fullWidth
          sx={{ mb: 2 }}
        />
        <TextField
          label="Category"
          name="category"
          value={product.category}
          onChange={handleChange}
          fullWidth
          sx={{ mb: 2 }}
        />
        <Button type="submit" variant="contained">
          Update Product
        </Button>
      </form>
    </Box>
  );
};

export default EditProductPage;
