"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Box, Button, Grid, Typography, TextField } from "@mui/material";
import Image from "next/image";

const ProductManagementPage: React.FC = () => {
  const router = useRouter();

  // States for FauxConfectionImages settings
  const [fauxCount, setFauxCount] = useState<number>(3);
  // States for FurnitureImages settings
  const [furnitureCount, setFurnitureCount] = useState<number>(3);
  // Common state for image size (in pixels)
  const [imgSize, setImgSize] = useState<number>(200);

  // For demonstration, we use static arrays for image paths.
  // In a real project, these might be fetched dynamically.
  const fauxConfectionImages = [
    "/FauxConfectionImages/img1.jpg",
    "/FauxConfectionImages/img2.jpg",
    "/FauxConfectionImages/img3.jpg",
    "/FauxConfectionImages/img4.jpg",
    // ... add more paths as needed
  ];

  const furnitureImages = [
    "/FurnitureImages/img1.jpg",
    "/FurnitureImages/img2.jpg",
    "/FurnitureImages/img3.jpg",
    "/FurnitureImages/img4.jpg",
    // ... add more paths as needed
  ];

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
