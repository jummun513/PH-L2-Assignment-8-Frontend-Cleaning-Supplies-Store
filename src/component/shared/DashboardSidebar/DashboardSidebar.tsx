"use client";
import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Theme,
  Typography,
  useMediaQuery,
} from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import MenuIcon from "@mui/icons-material/Menu";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";

const menuList = [
  { label: "Dashboard", path: "/dashboard" },
  { label: "All Products", path: "/dashboard/all-products" },
];

const DashboardSidebar = () => {
  const pathName = usePathname();
  const isExtraLargeDevice = useMediaQuery((theme: Theme) =>
    theme.breakpoints.up("xl")
  );

  const isLargeDevice = useMediaQuery((theme: Theme) =>
    theme.breakpoints.up("lg")
  );

  const [isOpenDrawer, setIsOpenDrawer] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setIsOpenDrawer(newOpen);
  };

  return (
    <div className="relative">
      {isLargeDevice ? (
        <Box
          sx={
            isExtraLargeDevice
              ? {
                  width: 320,
                  position: "sticky",
                  top: 0,
                  left: 0,
                  height: "100vh",
                  overflowY: "auto",
                }
              : {
                  width: 280,
                  position: "sticky",
                  top: 0,
                  left: 0,
                  height: "100vh",
                  overflowY: "auto",
                }
          }
          bgcolor="primary.main"
          padding="0 0 20px 0"
        >
          <Box
            component="div"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              padding: "20px 10px",
            }}
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
                bgcolor="primary.light"
                color="primary.main"
                sx={{
                  padding: { xs: "1px 4px", sm: "2px 5px" },
                }}
              >
                Wash
              </Box>
              <Box
                component="span"
                color="primary.light"
                sx={{
                  padding: { xs: "1px 4px", sm: "2px 5px" },
                }}
              >
                Waste.
              </Box>
            </Typography>
          </Box>
          <Divider
            variant="fullWidth"
            style={{ backgroundColor: "#fff", margin: "15px 0" }}
          />
          <List>
            {menuList.map((text, index) => (
              <ListItem key={index} sx={{ padding: "5px 8px" }}>
                <ListItemButton
                  selected={pathName === text.path}
                  sx={{
                    padding: 0,
                    backgroundColor: "#FFF",
                    "&.Mui-selected": {
                      backgroundColor: "#D1D5DB",
                    },
                    "&.Mui-selected:hover": {
                      backgroundColor: "#D1D5DB",
                    },
                    "&.Mui-focusVisible": {
                      backgroundColor: "#FFF",
                    },
                    ":hover": {
                      backgroundColor: "#D1D5DB",
                    },
                  }}
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
      ) : (
        <Box
          bgcolor="primary.main"
          sx={{
            width: "40px",
            position: "sticky",
            top: 18,
            left: 0,
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon sx={{ color: "#fff" }} />
          </IconButton>
        </Box>
      )}
      <Drawer anchor="left" open={isOpenDrawer}>
        <Box
          component="div"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "15px 20px 15px 8px",
          }}
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
          <IconButton
            color="inherit"
            aria-label="close drawer"
            edge="end"
            onClick={toggleDrawer(false)}
          >
            <ChevronLeftIcon />
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
    </div>
  );
};

export default DashboardSidebar;
