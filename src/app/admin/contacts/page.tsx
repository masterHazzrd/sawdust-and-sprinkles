"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Box, Typography, Button } from "@mui/material";

const AdminContactsPage: React.FC = () => {
  const router = useRouter();

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
          Contact Messages
        </Typography>
        <Button variant="outlined" onClick={() => router.back()} sx={{ mr: 2 }}>
          Back
        </Button>
      </Box>
      <Typography variant="body1">
        This page will display all contact messages with options to mark as read or delete.
      </Typography>
      {/* Add additional contact management functionality here */}
    </Box>
  );
};

export default AdminContactsPage;
