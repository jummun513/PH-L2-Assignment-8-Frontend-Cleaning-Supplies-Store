"use client";
import { Box, Typography } from "@mui/material";

const ErrorPage = ({ error }: { error: Error & { digest?: string } }) => {
  return (
    <Box
      height="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Typography
        variant="body1"
        component="h6"
        textAlign="center"
        color="red"
        fontWeight={600}
        fontSize={{ xs: "25px", md: "40px" }}
      >
        500
      </Typography>
      <Typography
        variant="body1"
        component="h6"
        textAlign="center"
        color="red"
        fontWeight={500}
        fontSize={{ xs: "14px", md: "18px" }}
      >
        {error.message || "Some-thing went wrong"}
      </Typography>
    </Box>
  );
};

export default ErrorPage;
