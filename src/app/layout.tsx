"use client";

import { usePathname } from "next/navigation";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import { SessionProvider } from "next-auth/react";

const theme = createTheme();

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith("/admin");

  return (
    <html lang="en">
      <body style={{ margin: "10px", paddingTop: "15px", height: "100vh", overflow: "hidden" }}>
        <SessionProvider>
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
        </SessionProvider>
      </body>
    </html>
  );
}
