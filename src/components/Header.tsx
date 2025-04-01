import React from "react";
import Link from "next/link";
import MuiLink from "@mui/material/Link";
import { Box } from "@mui/material";

const navLinkStyles = {
  color: "#FFF",
  textDecoration: "none",
  fontSize: "1rem",
  "&:hover": {
    fontWeight: "bold",
    textDecoration: "underline",
  },
};

const Header: React.FC = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "70px",
        background: "#B4D15B",
        position: "sticky",
        top: 0,
        zIndex: 1000,
        margin: 0,
        padding: 0,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "1rem",
        }}
      >
        {/* Business Name (Left) */}
        <Box>
          <Link href="/" passHref legacyBehavior>
            <MuiLink
              sx={{
                fontSize: "1.5rem",
                fontWeight: "bold",
                color: "#FFF",
                textDecoration: "none",
              }}
            >
              Allenby Place Creations
            </MuiLink>
          </Link>
        </Box>

        {/* Navigation Links (Right) */}
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: "35px",
            paddingRight: "35px",
          }}
        >
          <Link href="/" passHref legacyBehavior>
            <MuiLink sx={navLinkStyles}>Home</MuiLink>
          </Link>
          <Link href="/product-portfolio" passHref legacyBehavior>
            <MuiLink sx={navLinkStyles}>Products</MuiLink>
          </Link>
          <Link href="/about" passHref legacyBehavior>
            <MuiLink sx={navLinkStyles}>About</MuiLink>
          </Link>
          <Link href="/contact" passHref legacyBehavior>
            <MuiLink sx={navLinkStyles}>Contact</MuiLink>
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Header;
