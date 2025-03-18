"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Box, Typography, Button } from "@mui/material";

const AdminReviewsPage: React.FC = () => {
  const router = useRouter();

  return (
    <Box sx={{ padding: "2rem" }}>
      <Typography variant="h4" gutterBottom>
        Review Moderation
      <Button variant="outlined" onClick={() => router.back()} sx={{ mb: 2 }}>
        Back
      </Button>        
      </Typography>
      <Typography variant="body1">
        This page will list all reviews for detailed moderation actions.
      </Typography>
      {/* Additional content for reviews can be added here */}
    </Box>
  );
};

export default AdminReviewsPage;
