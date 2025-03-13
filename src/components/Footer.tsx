import React from "react";
import Link from "next/link";
import { Box, Typography, IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "var(--background)",
        padding: "1rem",
        textAlign: "center",
      }}
    >
      {/* Social Media Links */}
      <Box sx={{ display: "flex", justifyContent: "center", gap: "1rem", mb: 1 }}>
        <IconButton
          component="a"
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <FacebookIcon />
        </IconButton>
        <IconButton
          component="a"
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
        >
          <TwitterIcon />
        </IconButton>
        <IconButton
          component="a"
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <InstagramIcon />
        </IconButton>
        <IconButton
          component="a"
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <LinkedInIcon />
        </IconButton>
      </Box>

      {/* Copyright and Additional Links */}
      <Typography variant="body2" color="textSecondary">
        &copy; {new Date().getFullYear()} Sawdust & Sprinkles. All rights reserved.
      </Typography>
      <Box sx={{ mt: 1 }}>
        <Link href="/privacy" passHref legacyBehavior>
          <Typography component="a" variant="body2" color="inherit" sx={{ mr: 1 }}>
            Privacy Policy
          </Typography>
        </Link>
        <Link href="/terms" passHref legacyBehavior>
          <Typography component="a" variant="body2" color="inherit">
            Terms of Service
          </Typography>
        </Link>
      </Box>
    </Box>
  );
};

export default Footer;
