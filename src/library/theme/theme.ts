import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 500,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  palette: {
    primary: {
      main: "#002379",
      light: "#fff",
      contrastText: "#D1D5DB",
    },
    secondary: {
      main: "#F3F4F6",
      light: "",
      dark: "",
      contrastText: "",
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        variant: "contained",
        size: "medium",
      },
    },
    MuiContainer: {
      defaultProps: {
        maxWidth: "xl",
      },
      styleOverrides: {
        root: {
          backgroundColor: "",
        },
      },
    },
  },
  typography: {
    body1: {
      color: "#0B1134CC",
    },
  },
});
