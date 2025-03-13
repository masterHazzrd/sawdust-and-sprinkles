"use client";

import { useMemo } from "react";
import { usePathname } from "next/navigation";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith("/admin");

  // Memoize the theme to ensure consistency between server and client.
  const theme = useMemo(() => createTheme(), []);

  return (
    <html lang="en">
      <body style={{ margin: 0, paddingTop: "15px", height: "91vh", overflow: "hidden" }}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div
            style={{
              display: "grid",
              gridTemplateRows: isAdmin ? "1fr" : "80px 1fr 40px",
              height: "100%",
            }}
          >
            {!isAdmin && <Header />}
            <main style={{ overflowY: "auto" }}>{children}</main>
            {!isAdmin && <Footer />}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
