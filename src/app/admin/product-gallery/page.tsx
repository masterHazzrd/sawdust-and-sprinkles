"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Box, Button, Grid, Typography, TextField } from "@mui/material";
import Image from "next/image";

const ProductManagementPage: React.FC = () => {
  const router = useRouter();

  // States for gallery settings
  const [fauxCount, setFauxCount] = useState<number>(4);
  const [furnitureCount, setFurnitureCount] = useState<number>(3);
  const [imgSize, setImgSize] = useState<number>(125);

  // States for image data fetched from API endpoints
  const [fauxConfectionImages, setFauxConfectionImages] = useState<string[]>([]);
  const [furnitureImages, setFurnitureImages] = useState<string[]>([]);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    async function fetchFauxConfectionImages() {
      try {
        const res = await fetch("/api/gallery/faux-confection");
        if (!res.ok) throw new Error("Failed to fetch Faux Confection images");
        const data = await res.json();
        if (data.success) {
          setFauxConfectionImages(data.images);
        } else {
          throw new Error("Error in fetching Faux Confection images");
        }
      } catch (err: any) {
        setError(err.message || "An error occurred while fetching Faux Confection images.");
      }
    }
    async function fetchFurnitureImages() {
      try {
        const res = await fetch("/api/gallery/furniture");
        if (!res.ok) throw new Error("Failed to fetch Furniture images");
        const data = await res.json();
        if (data.success) {
          setFurnitureImages(data.images);
        } else {
          throw new Error("Error in fetching Furniture images");
        }
      } catch (err: any) {
        setError(err.message || "An error occurred while fetching Furniture images.");
      }
    }
    fetchFauxConfectionImages();
    fetchFurnitureImages();
  }, []);

  return (
    <Box sx={{ padding: "2rem" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2,
        }}
      >
        <Typography variant="h4" gutterBottom>
          Product Management
        </Typography>
        <Button variant="outlined" onClick={() => router.back()} sx={{ mr: 2 }}>
          Back
        </Button>
      </Box>
      {error && (
        <Typography variant="body1" color="error" sx={{ mb: 2 }}>
          {error}
        </Typography>
      )}
      {/* Faux Confection Gallery Section */}
      <Box sx={{ my: 4 }}>
        <Typography variant="h5" gutterBottom>
          Faux Confection Gallery
        </Typography>
        <Box sx={{ display: "flex", gap: 2, alignItems: "center", mb: 2 }}>
          <TextField
            label="Images to Show"
            type="number"
            value={fauxCount}
            onChange={(e) => setFauxCount(Number(e.target.value))}
            sx={{ width: "150px" }}
          />
          <TextField
            label="Image Size (px)"
            type="number"
            value={imgSize}
            onChange={(e) => setImgSize(Number(e.target.value))}
            sx={{ width: "150px" }}
          />
        </Box>
        <Grid container spacing={2}>
          {fauxConfectionImages.slice(0, fauxCount).map((src, index) => (
            <Grid item key={index}>
              <Box
                sx={{
                  position: "relative",
                  width: imgSize,
                  height: imgSize,
                }}
              >
                <Image
                  src={src}
                  alt={`Faux Confection ${index + 1}`}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
      {/* Furniture Gallery Section */}
      <Box sx={{ my: 4 }}>
        <Typography variant="h5" gutterBottom>
          Furniture Gallery
        </Typography>
        <Box sx={{ display: "flex", gap: 2, alignItems: "center", mb: 2 }}>
          <TextField
            label="Images to Show"
            type="number"
            value={furnitureCount}
            onChange={(e) => setFurnitureCount(Number(e.target.value))}
            sx={{ width: "150px" }}
          />
          <TextField
            label="Image Size (px)"
            type="number"
            value={imgSize}
            onChange={(e) => setImgSize(Number(e.target.value))}
            sx={{ width: "150px" }}
          />
        </Box>
        <Grid container spacing={2}>
          {furnitureImages.slice(0, furnitureCount).map((src, index) => (
            <Grid item key={index}>
              <Box
                sx={{
                  position: "relative",
                  width: imgSize,
                  height: imgSize,
                }}
              >
                <Image
                  src={src}
                  alt={`Furniture ${index + 1}`}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default ProductManagementPage;
