import React from "react";
import { Button } from "@mui/material";
import Link from "next/link";

interface CustomButtonProps {
  children: React.ReactNode;
  href: string;
  fullWidth: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  children,
  href,
  fullWidth,
}) => {
  return (
    <Button
      component={Link}
      href={href}
      fullWidth={fullWidth ? fullWidth : false}
      sx={{
        padding: {
          xs: "4px 8px",
          sm: "6px 12px",
          md: "8px 16px",
          lg: "10px 20px",
        },
        fontSize: { xs: "12px", sm: "14px", md: "15px", lg: "16px" },
      }}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
