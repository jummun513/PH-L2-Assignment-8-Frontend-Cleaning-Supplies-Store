"use client";
import {
  Avatar,
  Box,
  Divider,
  FormControl,
  InputAdornment,
  Stack,
  TextField,
  Theme,
  Typography,
  useMediaQuery,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import { useState } from "react";
import { UserMenu } from "../ClientNavbar/ClientNavbar";

const user = {
  name: { firstName: "Jummun", lastName: "Islam" },
  email: "jummunislam513@gmail.com",
  photoUrl:
    "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
};
// const user = null;

const DashboardNavbar = () => {
  const isSmallDevice = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );
  return (
    <div>
      <Stack sx={{ position: "relative" }}>
        <Stack
          width="100%"
          padding="15px 30px"
          direction={{ xs: "column-reverse", md: "row" }}
          justifyContent="space-between"
          alignItems="center"
        >
          <SearchBar></SearchBar>
          <Stack
            direction={{ xs: "column-reverse", md: "row" }}
            justifyContent="space-between"
            alignItems="center"
            mb={{ xs: "15px", md: 0 }}
          >
            <Box component="div">
              <Typography
                textAlign={{ xs: "center", md: "end" }}
                fontWeight={600}
              >
                {user.name.firstName + " " + user.name.lastName}
              </Typography>
              <Typography textAlign={{ xs: "center", md: "left" }}>
                {user.email}
              </Typography>
            </Box>
            <UserMenu></UserMenu>
          </Stack>
        </Stack>
        <Divider variant="middle" style={{ backgroundColor: "black" }} />
      </Stack>
    </div>
  );
};

export default DashboardNavbar;

const SearchBar = () => {
  return (
    <FormControl>
      <TextField
        size="small"
        variant="outlined"
        fullWidth
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        sx={{ width: "100%" }}
      />
    </FormControl>
  );
};
