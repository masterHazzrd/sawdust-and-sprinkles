"use client";

import { useMemo } from "react";
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  // Memoize the theme for consistency.
  const theme = useMemo(() => createTheme(), []);

  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <main style={{ overflowY: "auto", height: "100%" }}>
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
