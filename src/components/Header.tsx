import React from "react";
import Link from "next/link";
import Button from "@mui/material/Button";

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

const Header: React.FC = () => {
  return (
    <header
      style={{
        display: "flex",
        alignItems: "center",
        padding: "1rem",
        background: "var(--background)",
      }}
    >
      {/* Right Navigation */}
      <nav
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "space-evenly",
          gap: "1rem",
        }}
      >
      <Link href="/" passHref legacyBehavior>
          <Button variant="contained" sx={buttonStyles}>
            Home
          </Button>
        </Link>
        <Link href="/product-portfolio" passHref legacyBehavior>
          <Button variant="contained" sx={buttonStyles}>
            Products
          </Button>
        </Link>
      
        <Link href="/about" passHref legacyBehavior>
          <Button variant="contained" sx={buttonStyles}>
            About
          </Button>
        </Link>
        <Link href="/contact" passHref legacyBehavior>
          <Button variant="contained" sx={buttonStyles}>
            Contact
          </Button>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
