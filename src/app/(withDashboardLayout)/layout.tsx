import DashboardNavbar from "@/component/shared/DashboardNavbar/DashboardNavbar";
import DashboardSidebar from "@/component/shared/DashboardSidebar/DashboardSidebar";

const DashBoardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex">
      <DashboardSidebar />
      <div className="w-full">
        <DashboardNavbar></DashboardNavbar>
        {children}
      </div>
    </div>
  );
};

export default DashBoardLayout;
