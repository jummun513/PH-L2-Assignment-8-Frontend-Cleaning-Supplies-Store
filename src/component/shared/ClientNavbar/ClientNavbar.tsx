"use client";
import CustomButton from "@/component/ui/Button/CustomButton";
import {
  Box,
  Container,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  Theme,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const menuList = [
  { label: "Home", path: "/" },
  { label: "Categories", path: "/categories" },
  { label: "Products", path: "/products" },
  { label: "Flash Sale", path: "/flash-sale" },
  { label: "About Us", path: "/about-us" },
  { label: "Contact Us", path: "/contact-us" },
];

const ClientNavbar = () => {
  const pathName = usePathname();
  const isSmallDevice = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("md")
  );
  const [open, setOpen] = useState(false);
  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <Box component="div" sx={{ bgcolor: "#EEEEEE" }}>
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
                <CustomButton fullWidth={false} href="/login">
                  Login
                </CustomButton>
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
            <Drawer anchor="right" open={open}>
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
                    "&:hover": { bgcolor: "#222831", color: "#fff" },
                  }}
                >
                  {text.label}
                </Typography>
              ))}
            </Stack>
            <CustomButton fullWidth={false} href="/login">
              Login
            </CustomButton>
          </Stack>
        )}
      </Container>
    </Box>
  );
};

export default ClientNavbar;

{
  /* <List>
            <ListItem>
              <ListItemText>
                <Link href="/">Home</Link>
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>
                <Link href="/about">About</Link>
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>
                <Link href="/contact">Contact</Link>
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>
                <Link href="/about">Faq</Link>
              </ListItemText>
            </ListItem>
          </List> */
}
