"use client";

import React from "react";
import { signIn } from "next-auth/react";
import { Box, Typography, Button } from "@mui/material";

const LoginPage: React.FC = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* Sign In Section */}
      <Box sx={{ mb: 4, textAlign: "center" }}>
        <Typography variant="h4" gutterBottom>
          Admin Login
        </Typography>
        <Button
          variant="contained"
          onClick={() =>
            signIn("credentials", { callbackUrl: "/admin" })
          }
        >
          Sign In
        </Button>
      </Box>
    </Box>
  );
};

export default LoginPage;
