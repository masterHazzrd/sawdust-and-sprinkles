"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { signOut } from "next-auth/react";
import {
  Box,
  Grid,
  Typography,
  Card,
  CardActionArea,
  CardContent,
  Button,
} from "@mui/material";
import RequireAuth from "../../components/RequireAuth";

interface Review {
  _id: string;
  email: string;
  message: string;
  approved: boolean;
}

interface ContactMessage {
  _id: string;
  name: string;
  email: string;
  message: string;
}

const AdminDashboard: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [contacts, setContacts] = useState<ContactMessage[]>([]);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    async function fetchReviews() {
      try {
        const res = await fetch("/api/admin/reviews");
        if (!res.ok) throw new Error("Failed to fetch reviews");
        const data = await res.json();
        const pendingReviews = data.reviews.filter((r: Review) => !r.approved);
        setReviews(pendingReviews.slice(0, 3));
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred while fetching reviews.");
        }
      }
    }
    async function fetchContacts() {
      try {
        const res = await fetch("/api/admin/contacts");
        if (!res.ok) throw new Error("Failed to fetch contact messages");
        const data = await res.json();
        setContacts(data.messages.slice(0, 3));
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred while fetching messages.");
        }
      }
    }
    fetchReviews();
    fetchContacts();
  }, []);

  return (
    <RequireAuth>
      <Box sx={{ padding: "2rem" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mb: 2,
          }}
        >
          <Typography variant="h4" gutterBottom>
            Admin Dashboard
          </Typography>
          <Button variant="outlined" onClick={() => signOut()} sx={{ mr: 2 }}>
            Logout
          </Button>
          <Button variant="outlined" onClick={() => window.open("/", "_blank")}>
            Home
          </Button>
        </Box>
        {error && <Typography color="error">{error}</Typography>}
        <Grid container spacing={4}>
          {/* Reviews Preview Card */}
          <Grid item xs={12}>
            <Link href="/admin/reviews" passHref legacyBehavior>
              <Card>
                <CardActionArea>
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      Review Moderation
                    </Typography>
                    {reviews.length === 0 ? (
                      <Typography variant="body2">
                        No reviews waiting for approval.
                      </Typography>
                    ) : (
                      reviews.map((review) => (
                        <Box key={review._id} sx={{ mb: 1 }}>
                          <Typography variant="body2">
                            {review.message}
                          </Typography>
                          <Typography variant="caption">
                            From: {review.email}
                          </Typography>
                        </Box>
                      ))
                    )}
                  </CardContent>
                </CardActionArea>
              </Card>
            </Link>
          </Grid>
          {/* Contacts Preview Card */}
          <Grid item xs={12}>
            <Link href="/admin/contacts" passHref legacyBehavior>
              <Card>
                <CardActionArea>
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      Contact Messages
                    </Typography>
                    {contacts.length === 0 ? (
                      <Typography variant="body2">
                        No contact messages.
                      </Typography>
                    ) : (
                      contacts.map((contact) => (
                        <Box key={contact._id} sx={{ mb: 1 }}>
                          <Typography variant="body2">
                            {contact.message}
                          </Typography>
                          <Typography variant="caption">
                            From: {contact.name} ({contact.email})
                          </Typography>
                        </Box>
                      ))
                    )}
                  </CardContent>
                </CardActionArea>
              </Card>
            </Link>
          </Grid>
          {/* Product Image Management Preview Card */}
          <Grid item xs={12}>
            <Link href="/admin/product-gallery" passHref legacyBehavior>
              <Card>
                <CardActionArea>
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      Product Image Management
                    </Typography>
                    <Typography variant="body2">
                      Manage images for products.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Link>
          </Grid>
        </Grid>
      </Box>
    </RequireAuth>
  );
};

export default AdminDashboard;
