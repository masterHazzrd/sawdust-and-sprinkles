// src/app/layout.tsx
"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import "../global.css";

const theme = createTheme();

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, height: "100vh", overflow: "hidden" }}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Header />
          <main
            style={{
              overflowY: "auto",
              height: "calc(100% - 120px)", // assuming header is 80px and footer 40px
            }}
          >
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
