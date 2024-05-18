"use client";
import { ThemeProvider } from "@mui/material";
import { theme } from "../theme/theme";

const MuiThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default MuiThemeProvider;
