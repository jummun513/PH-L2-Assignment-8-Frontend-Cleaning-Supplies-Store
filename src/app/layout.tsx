import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import MuiThemeProvider from "@/library/provider/MuiThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wash Waste",
  description: "A dish washing supplies store",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MuiThemeProvider>
          <AppRouterCacheProvider>{children}</AppRouterCacheProvider>
        </MuiThemeProvider>
      </body>
    </html>
  );
}
