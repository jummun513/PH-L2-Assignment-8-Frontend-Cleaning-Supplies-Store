"use client";
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Container,
  CssBaseline,
  FormControlLabel,
  Grid,
  TextField,
  Theme,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Link from "next/link";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

const currentYear = new Date().getFullYear();
const LoginPage = () => {
  const isSmallDevice = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("md")
  );
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline></CssBaseline>
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography
          component="h1"
          variant="h5"
          fontWeight={600}
          marginTop={{ xs: 1, md: 2 }}
        >
          Sign In
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            size={isSmallDevice ? "small" : "medium"}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            size={isSmallDevice ? "small" : "medium"}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 2, mb: 2 }}
          >
            Sign In
          </Button>
          <Box
            component="div"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography fontSize={{ xs: "12px", sm: "14px", lg: "16px" }}>
              <Link href="#">Forgot password?</Link>
            </Typography>
            <Typography fontSize={{ xs: "12px", sm: "14px", lg: "16px" }}>
              <Link href="/register">{"Don't have an account? Sign Up"}</Link>
            </Typography>
          </Box>
        </Box>
      </Box>
      <Typography
        variant="body1"
        fontSize={{ xs: "12px", sm: "14px", md: "16px" }}
        fontWeight={500}
        textAlign="center"
        marginTop={{ xs: "100px", md: "80px" }}
      >
        &copy; {currentYear} <Link href="/">Wash Waste.</Link> All Rights
        Reserved.
      </Typography>
    </Container>
  );
};

export default LoginPage;
