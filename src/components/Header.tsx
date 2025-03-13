import React from "react";
import Link from "next/link";
import Image from "next/image";
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
      {/* Left Navigation */}
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
      </nav>

      {/* Center Logo */}
      <div style={{ flexShrink: 0, textAlign: "center" }}>
        <Image
          src="/logo2.jpeg"
          alt="Logo"
          width={120}
          height={50}
          style={{ width: "100%", height: "auto" }}
        />
      </div>

      {/* Right Navigation */}
      <nav
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "space-evenly",
          gap: "1rem",
        }}
      >
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
