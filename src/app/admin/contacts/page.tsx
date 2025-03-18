"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Box, Typography, Button } from "@mui/material";

const AdminContactsPage: React.FC = () => {
  const router = useRouter();

  return (
    <Box sx={{ padding: "2rem" }}>
      <Typography variant="h4" gutterBottom>
        Contact Messages
      <Button variant="outlined" onClick={() => router.back()} sx={{ mb: 2 }}>
        Back
      </Button>
      </Typography>
      <Typography variant="body1">
        This page will display all contact messages with options to mark as read or delete.
      </Typography>
      {/* Additional content for contacts can be added here */}
    </Box>
  );
};

export default AdminContactsPage;
