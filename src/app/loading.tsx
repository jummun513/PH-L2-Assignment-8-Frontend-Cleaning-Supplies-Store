import { CircularProgress } from "@mui/material";

const LoadingPage = () => {
  return (
    <CircularProgress
      variant="indeterminate"
      sx={{
        borderRadius: "50%",
        boxShadow: `inset 0 0 0 ${(5 / 44) * 40}px #D1D5DB`,
        position: "absolute",
        left: "50%",
        bottom: "50vh",
      }}
      size={44}
      thickness={5}
    />
  );
};

export default LoadingPage;
