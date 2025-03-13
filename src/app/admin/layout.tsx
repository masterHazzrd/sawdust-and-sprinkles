// src/app/admin/layout.tsx
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import "../../master.css";

const theme = createTheme();

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, height: "100vh", overflow: "hidden" }}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <main style={{ overflowY: "auto", height: "100%" }}>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
