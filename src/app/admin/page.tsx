"use client";

import React from "react";
import Link from "next/link";
import { Box, Grid, Typography, Card, CardActionArea } from "@mui/material";

const AdminDashboard: React.FC = () => {
  return (
    <Box sx={{ padding: "2rem" }}>
      <Typography variant="h4" gutterBottom>
        Admin Dashboard
      </Typography>
      <Grid container spacing={4}>
        {/* Review Moderation Section */}
        <Grid item xs={12}>
          <Link href="/admin/reviews" passHref legacyBehavior>
            <Card>
              <CardActionArea>
                <Box sx={{ padding: "1rem" }}>
                  <Typography variant="h6">Review Moderation</Typography>
                  <Typography variant="body2">
                    Approve or deny reviews.
                  </Typography>
                </Box>
              </CardActionArea>
            </Card>
          </Link>
        </Grid>
        {/* Contact Messages Section */}
        <Grid item xs={12}>
          <Link href="/admin/contacts" passHref legacyBehavior>
            <Card>
              <CardActionArea>
                <Box sx={{ padding: "1rem" }}>
                  <Typography variant="h6">Contact Messages</Typography>
                  <Typography variant="body2">
                    View and manage contact submissions.
                  </Typography>
                </Box>
              </CardActionArea>
            </Card>
          </Link>
        </Grid>
        {/* Product Image Management Section */}
        <Grid item xs={12}>
          <Link href="/admin/products" passHref legacyBehavior>
            <Card>
              <CardActionArea>
                <Box sx={{ padding: "1rem" }}>
                  <Typography variant="h6">
                    Product Image Management
                  </Typography>
                  <Typography variant="body2">
                    Manage images for products.
                  </Typography>
                </Box>
              </CardActionArea>
            </Card>
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AdminDashboard;
