"use client";

import React, {
  useEffect,
  useRef,
  useState,
  ChangeEvent,
  FormEvent,
} from "react";
import { useRouter } from "next/navigation";
import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import Image from "next/image";
import RequireAuth from "@/components/RequireAuth";
import ProductCard from "@/components/ProductCard";

const ProductManagementPage: React.FC = () => {
  const router = useRouter();

  // Gallery settings for public image folders
  const [fauxCount, setFauxCount] = useState<number>(6);
  const [furnitureCount, setFurnitureCount] = useState<number>(6);
  const [imgSize, setImgSize] = useState<number>(325);

  // Dynamic gallery image data from API endpoints
  const [fauxImages, setFauxImages] = useState<string[]>([]);
  const [furnitureImages, setFurnitureImages] = useState<string[]>([]);
  const [galleryError, setGalleryError] = useState<string>("");

  // Refs for file inputs for gallery uploads
  const fauxInputRef = useRef<HTMLInputElement>(null);
  const furnitureInputRef = useRef<HTMLInputElement>(null);

  // Product management state (for Portfolio products)
  const [products, setProducts] = useState<any[]>([]);
  const [newProduct, setNewProduct] = useState({
    name: "",
    description: "",
    image: "",
    price: "",
    category: "", // New field for category selection
  });
  const [productError, setProductError] = useState<string>("");

  // Fetch gallery images from API endpoints on mount
  useEffect(() => {
    async function fetchFauxImages() {
      try {
        const res = await fetch("/api/gallery/faux-confection");
        if (!res.ok) throw new Error("Failed to fetch Faux Confection images");
        const data = await res.json();
        if (data.success) {
          setFauxImages(data.images);
        } else {
          throw new Error("Error in fetching Faux Confection images");
        }
      } catch (err: any) {
        setGalleryError(
          err.message || "An error occurred while fetching Faux Confection images."
        );
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
        setGalleryError(
          err.message || "An error occurred while fetching Furniture images."
        );
      }
    }
    fetchFauxImages();
    fetchFurnitureImages();
  }, []);

  // Fetch products for portfolio management
  const fetchProducts = async () => {
    try {
      const res = await fetch("/api/products");
      const data = await res.json();
      if (data.success) {
        setProducts(data.products);
      } else {
        setProductError("Failed to fetch products.");
      }
    } catch (err: any) {
      setProductError(err.message);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Placeholder upload handlers for gallery images
  const handleFauxUpload = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      console.log("Uploading Faux Confection image:", e.target.files[0].name);
      // TODO: Implement file upload to your API endpoint.
    }
  };

  const handleFurnitureUpload = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      console.log("Uploading Furniture image:", e.target.files[0].name);
      // TODO: Implement file upload to your API endpoint.
    }
  };

  // Handlers for new product form
  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | { name?: string; value: unknown }>
  ) => {
    setNewProduct({
      ...newProduct,
      [e.target.name as string]: e.target.value as string,
    });
  };

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...newProduct, price: Number(newProduct.price) }),
      });
      const data = await res.json();
      if (data.success) {
        setNewProduct({ name: "", description: "", image: "", price: "", category: "" });
        fetchProducts();
      } else {
        setProductError("Failed to add product.");
      }
    } catch (err: any) {
      setProductError(err.message);
    }
  };

  // Combine gallery images for the Select options
  const allImages = [...fauxImages, ...furnitureImages];

  // Handlers for product actions
  const handleApprove = async (product: any) => {
  console.log("Approving product:", product);
  try {
    const res = await fetch(`/api/products/${product._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ approved: true }),
    });
    const data = await res.json();
    if (data.success) {
      console.log("Product approved:", data.product);
      // Optionally refresh your product list to reflect the change.
    } else {
      console.error("Failed to approve product.");
    }
  } catch (err: any) {
    console.error("Error approving product:", err.message);
  }
};

  const handleEdit = (product: any) => {
  console.log("Editing product:", product);
  router.push(`/admin/products/edit/${product._id}`);
};


  const handleDelete = async (product: any) => {
    try {
      const res = await fetch(`/api/products/${product._id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (data.success) {
        console.log("Deleted product:", product);
        fetchProducts();
      } else {
        console.error("Failed to delete product.");
      }
    } catch (err: any) {
      console.error("Error deleting product:", err);
    }
  };

  return (
    <RequireAuth>
      <Box sx={{ padding: "2rem" }}>
        {/* Header Section */}
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
          <Box>
            <Button variant="outlined" onClick={() => router.back()} sx={{ mr: 2 }}>
              Back
            </Button>
            <Button variant="outlined" onClick={() => window.open("/", "_blank")}>
              Home
            </Button>
          </Box>
        </Box>
        {(galleryError || productError) && (
          <Typography variant="body1" color="error" sx={{ mb: 2 }}>
            {galleryError || productError}
          </Typography>
        )}

        {/* Faux Confection Gallery Section */}
        <Box sx={{ my: 4, border: "1px solid #ccc", p: 2, borderRadius: 1 }}>
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
            <Button variant="contained" onClick={() => fauxInputRef.current?.click()}>
              Upload Image
            </Button>
            {/* Hidden file input for Faux Confection Images */}
            <input
              type="file"
              accept="image/*"
              ref={fauxInputRef}
              onChange={handleFauxUpload}
              style={{ display: "none" }}
            />
          </Box>
          <Grid container spacing={2}>
            {fauxImages.slice(0, fauxCount).map((src, index) => (
              <Grid item key={index}>
                <Box sx={{ position: "relative", width: imgSize, height: imgSize }}>
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
        <Box sx={{ my: 4, border: "1px solid #ccc", p: 2, borderRadius: 1 }}>
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
            <Button variant="contained" onClick={() => furnitureInputRef.current?.click()}>
              Upload Image
            </Button>
            {/* Hidden file input for Furniture Images */}
            <input
              type="file"
              accept="image/*"
              ref={furnitureInputRef}
              onChange={handleFurnitureUpload}
              style={{ display: "none" }}
            />
          </Box>
          <Grid container spacing={2}>
            {furnitureImages.slice(0, furnitureCount).map((src, index) => (
              <Grid item key={index}>
                <Box sx={{ position: "relative", width: imgSize, height: imgSize }}>
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

        {/* New Product Management Section */}
        <Box sx={{ my: 4, border: "1px solid #ccc", p: 2, borderRadius: 1 }}>
          <Typography variant="h5" gutterBottom>
            Manage Portfolio Products
          </Typography>
          {/* New Product Form */}
          <Box component="form" onSubmit={handleFormSubmit} sx={{ mb: 4 }}>
            <Typography variant="h6" gutterBottom>
              Add New Product
            </Typography>
            <TextField
              label="Name"
              name="name"
              value={newProduct.name}
              onChange={handleInputChange}
              required
              sx={{ mr: 2, mb: 2 }}
            />
            <TextField
              label="Description"
              name="description"
              value={newProduct.description}
              onChange={handleInputChange}
              required
              sx={{ mr: 2, mb: 2 }}
            />
            <TextField
              label="Price"
              name="price"
              value={newProduct.price}
              onChange={handleInputChange}
              required
              sx={{ mr: 2, mb: 2 }}
            />
            {/* New Category Field */}
            <FormControl sx={{ mr: 2, mb: 2, minWidth: 150 }} required>
              <InputLabel id="category-select-label">Category</InputLabel>
              <Select
                labelId="category-select-label"
                id="category-select"
                name="category"
                value={newProduct.category}
                label="Category"
                onChange={handleInputChange}
              >
                <MenuItem value="refinishedFurniture">Refinished Furniture</MenuItem>
                <MenuItem value="fauxConfectionery">Faux Confectionery</MenuItem>
              </Select>
            </FormControl>
            {/* Replace Image URL TextField with a Select dropdown */}
            <FormControl sx={{ mr: 2, mb: 2, minWidth: 150 }} required>
              <InputLabel id="image-select-label">Image URL</InputLabel>
              <Select
                labelId="image-select-label"
                id="image-select"
                name="image"
                value={newProduct.image}
                label="Image URL"
                onChange={handleInputChange}
              >
                {allImages.map((src, index) => (
                  <MenuItem key={index} value={src}>
                    {src}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <Button type="submit" variant="contained">
              Add Product
            </Button>
          </Box>

          <Typography variant="h6" gutterBottom>
            Existing Products
          </Typography>
          <Grid container spacing={2}>
            {products.map((product) => (
              <Grid item key={product._id} xs={12} sm={6} md={4}>
                <ProductCard product={product} />
                {/* Product Actions */}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-around",
                    mt: 1,
                  }}
                >
                  <Button variant="outlined" size="small" onClick={() => handleApprove(product)}>
                    Approve
                  </Button>
                  <Button variant="outlined" size="small" onClick={() => handleEdit(product)}>
                    Edit
                  </Button>
                  <Button variant="outlined" size="small" color="error" onClick={() => handleDelete(product)}>
                    Delete
                  </Button>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </RequireAuth>
  );
};

export default ProductManagementPage;
