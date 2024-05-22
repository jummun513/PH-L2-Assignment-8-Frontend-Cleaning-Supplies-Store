"use client";
import CustomButton from "@/component/ui/Button/CustomButton";
import {
  Avatar,
  Box,
  Container,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Stack,
  Theme,
  Tooltip,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Dashboard, Logout } from "@mui/icons-material";

const menuList = [
  { label: "Home", path: "/" },
  { label: "Categories", path: "/categories" },
  { label: "Products", path: "/dishwashing-items" },
  { label: "Flash Sale", path: "/flash-sale" },
  { label: "About Us", path: "/about-us" },
  { label: "Contact Us", path: "/contact-us" },
];

const user = {
  name: { firstName: "Jummun", lastName: "Islam" },
  email: "jummunislam513@gmail.com",
  photoUrl:
    "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
};
// const user = null;

const ClientNavbar = () => {
  const pathName = usePathname();
  const isSmallDevice = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("md")
  );
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setIsOpenDrawer(newOpen);
  };

  return (
    <Box
      component="div"
      bgcolor="secondary.main"
      sx={{ position: "sticky", top: 0, left: 0, zIndex: "999" }}
    >
      <Container>
        {isSmallDevice ? (
          <Box component="div">
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              padding="10px 0px"
            >
              <Typography
                component={Link}
                href="/"
                sx={{
                  textTransform: "uppercase",
                  fontWeight: 600,
                  fontSize: { xs: "18px", sm: "20px" },
                }}
              >
                <Box
                  component="span"
                  bgcolor="primary.main"
                  color="primary.light"
                  sx={{
                    padding: { xs: "1px 4px", sm: "2px 5px" },
                  }}
                >
                  Wash
                </Box>
                <Box
                  component="span"
                  sx={{
                    padding: { xs: "1px 4px", sm: "2px 5px" },
                  }}
                >
                  Waste.
                </Box>
              </Typography>
              <Stack direction="row" alignItems="center" gap={{ xs: 1, sm: 2 }}>
                {user ? (
                  <UserMenu></UserMenu>
                ) : (
                  <CustomButton fullWidth={false} href="/login">
                    Login
                  </CustomButton>
                )}
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="end"
                  onClick={toggleDrawer(true)}
                >
                  <MenuIcon />
                </IconButton>
              </Stack>
            </Stack>
            <Drawer anchor="right" open={isOpenDrawer}>
              <Box
                component="div"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  padding: "8px",
                }}
              >
                <IconButton
                  color="inherit"
                  aria-label="close drawer"
                  edge="end"
                  onClick={toggleDrawer(false)}
                >
                  <ChevronRightIcon />
                </IconButton>
              </Box>
              <Divider />
              <Box
                sx={{ width: 280 }}
                role="presentation"
                onClick={toggleDrawer(false)}
              >
                <List>
                  {menuList.map((text, index) => (
                    <ListItem key={index} sx={{ padding: "3px 5px" }}>
                      <ListItemButton
                        selected={pathName === text.path}
                        sx={{ padding: 0 }}
                      >
                        <Link
                          href={text.path}
                          style={{
                            width: "100%",
                            height: "100%",
                            padding: "8px 16px",
                          }}
                        >
                          <ListItemText primary={text.label} />
                        </Link>
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Drawer>
          </Box>
        ) : (
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            padding="10px 0px"
          >
            <Typography
              variant="h5"
              component={Link}
              href="/"
              sx={{
                textTransform: "uppercase",
                fontWeight: { md: 600, lg: 800 },
              }}
            >
              <Box
                component="span"
                bgcolor="primary.main"
                color="primary.light"
                sx={{
                  padding: { md: "3px 7px", lg: "4px 10px" },
                }}
              >
                Wash
              </Box>
              <Box
                component="span"
                sx={{
                  padding: { md: "3px 7px", lg: "4px 10px" },
                }}
              >
                Waste.
              </Box>
            </Typography>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              gap={1}
            >
              {menuList.map((text, index) => (
                <Typography
                  key={index}
                  variant="body1"
                  component={Link}
                  href={text.path}
                  bgcolor={pathName === text.path ? "primary.main" : ""}
                  color={pathName === text.path ? "primary.light" : ""}
                  sx={{
                    borderRadius: "5px",
                    padding: { md: "3px 7px", lg: "4px 10px" },
                    transition: "0.2s linear",
                    "&:hover": { bgcolor: "#002379", color: "#fff" },
                  }}
                >
                  {text.label}
                </Typography>
              ))}
            </Stack>
            {user ? (
              <UserMenu />
            ) : (
              <CustomButton fullWidth={false} href="/login">
                Login
              </CustomButton>
            )}
          </Stack>
        )}
      </Container>
    </Box>
  );
};

export default ClientNavbar;

export const UserMenu = () => {
  const pathName = usePathname();
  const isSmallDevice = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("md")
  );
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <Avatar
              alt={user?.name?.firstName + "image"}
              src={
                user?.photoUrl ||
                "https://t3.ftcdn.net/jpg/05/53/79/60/360_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg"
              }
              sx={
                isSmallDevice
                  ? { width: 36, height: 36 }
                  : { width: 48, height: 48 }
              }
            />
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&::before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem onClick={handleClose}>
          <Avatar /> Profile
        </MenuItem>
        <Divider />
        <Link href="/dashboard">
          <MenuItem selected={pathName === "/dashboard"} onClick={handleClose}>
            <ListItemIcon>
              <Dashboard fontSize="small" />
            </ListItemIcon>
            Dashboard
          </MenuItem>
        </Link>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </>
  );
};
