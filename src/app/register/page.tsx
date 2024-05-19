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
const RegisterPage = () => {
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
          Register
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="given-name"
                name="firstName"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                size={isSmallDevice ? "small" : "medium"}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="family-name"
                size={isSmallDevice ? "small" : "medium"}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                size={isSmallDevice ? "small" : "medium"}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
                size={isSmallDevice ? "small" : "medium"}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label={
                  <Typography variant="body2" component="span" fontSize={{xs: '12px', md: '14px'}}>
                    I want to receive inspiration, marketing promotions and
                    updates via email.
                  </Typography>
                }
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 2, mb: 2 }}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Typography fontSize={{ xs: "12px", sm: "14px", lg: "16px" }}>
                <Link href="/login">{"Already have an account? Sign In"}</Link>
              </Typography>
            </Grid>
          </Grid>
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

export default RegisterPage;
