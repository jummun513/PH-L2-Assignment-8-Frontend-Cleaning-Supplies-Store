import DashboardNavbar from "@/component/shared/DashboardNavbar/DashboardNavbar";
import DashboardSidebar from "@/component/shared/DashboardSidebar/DashboardSidebar";
import { Box } from "@mui/material";

const DashBoardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box
      component="div"
      sx={{
        display: "flex",
        width: "100%",
      }}
    >
      <DashboardSidebar />
      <Box
        component="div"
        sx={{
          width: "100%",
          overflowX: { xs: "hidden", lg: "auto" },
          position: "relative",
          height: "100vh",
        }}
      >
        <DashboardNavbar></DashboardNavbar>
        {children}
      </Box>
    </Box>
  );
};

export default DashBoardLayout;
