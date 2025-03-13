"use client";

import React, { useState } from "react";
import { Box, TextField, Button, Typography, Divider } from "@mui/material";

interface ContactData {
  name: string;
  email: string;
  message: string;
}

interface ReviewData {
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const buttonStyles = {
    backgroundColor: "#B4D15B",
    color: "#fff",
    textTransform: "none",
    "&:hover": {
      opacity: 0.8,
      fontWeight: "bold",
      backgroundColor: "#B4D15B",
    },
  };

  const [contactData, setContactData] = useState<ContactData>({
    name: "",
    email: "",
    message: "",
  });
  const [contactResponse, setContactResponse] = useState<string>("");

  const handleContactChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setContactData((prev) => ({ ...prev, [name]: value }));
  };

  const handleContactSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(contactData),
      });
      // Log the raw response text for debugging
      const text = await res.text();
      console.log("Raw contact response:", text);
      // Parse as JSON
      const data = JSON.parse(text);
      setContactResponse(data.message || "Contact form submitted successfully.");
      setContactData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error submitting contact form:", error);
      setContactResponse("Error submitting contact form.");
    }
  };

  const [reviewData, setReviewData] = useState<ReviewData>({
    email: "",
    message: "",
  });
  const [reviewResponse, setReviewResponse] = useState<string>("");

  const handleReviewChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setReviewData((prev) => ({ ...prev, [name]: value }));
  };

  const handleReviewSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(reviewData),
      });
      const data = await res.json();
      setReviewResponse(data.message || "Review submitted successfully.");
      setReviewData({ email: "", message: "" });
    } catch (error) {
      console.error("Error submitting review:", error);
      setReviewResponse("Error submitting review.");
    }
  };

  return (
    <Box sx={{ padding: "2rem", maxWidth: "600px", margin: "0 auto" }}>
      {/* Contact Form Section */}
      <Typography variant="h4" component="h1" gutterBottom>
        Contact Us
      </Typography>
      <form
        onSubmit={handleContactSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
      >
        <TextField
          label="Name"
          name="name"
          variant="outlined"
          value={contactData.name}
          onChange={handleContactChange}
          required
        />
        <TextField
          label="Email"
          name="email"
          variant="outlined"
          type="email"
          value={contactData.email}
          onChange={handleContactChange}
          required
        />
        <TextField
          label="Message"
          name="message"
          variant="outlined"
          multiline
          rows={4}
          value={contactData.message}
          onChange={handleContactChange}
          required
        />
        <Button type="submit" variant="contained" sx={buttonStyles}>
          Send Message
        </Button>
      </form>
      {contactResponse && (
        <Typography variant="body1" sx={{ marginTop: "1rem" }}>
          {contactResponse}
        </Typography>
      )}

      <Divider sx={{ marginY: "2rem" }} />

      {/* Review Form Section */}
      <Typography variant="h4" component="h1" gutterBottom>
        Leave a Review
      </Typography>
      <form
        onSubmit={handleReviewSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
      >
        <TextField
          label="Email"
          name="email"
          variant="outlined"
          type="email"
          value={reviewData.email}
          onChange={handleReviewChange}
          required
        />
        <TextField
          label="Review Message"
          name="message"
          variant="outlined"
          multiline
          rows={4}
          value={reviewData.message}
          onChange={handleReviewChange}
          required
        />
        <Button type="submit" variant="contained" sx={buttonStyles}>
          Submit Review
        </Button>
      </form>
      {reviewResponse && (
        <Typography variant="body1" sx={{ marginTop: "1rem" }}>
          {reviewResponse}
        </Typography>
      )}
    </Box>
  );
};

export default Contact;
