import {
  Box,
  Divider,
  FormControl,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { UserMenu } from "../ClientNavbar/ClientNavbar";

const user = {
  name: { firstName: "Jummun", lastName: "Islam" },
  email: "jummunislam513@gmail.com",
  photoUrl:
    "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
};
// const user = null;

const DashboardNavbar = () => {
  return (
    <Box
      component="div"
      sx={{
        position: "sticky",
        top: 0,
        left: 0,
        width: "100%",
        bgcolor: "#fff",
        zIndex: 999,
      }}
    >
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
    </Box>
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
