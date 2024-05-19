import ClientFooter from "@/component/shared/ClientFooter/ClientFooter";
import ClientNavbar from "@/component/shared/ClientNavbar/ClientNavbar";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ClientNavbar></ClientNavbar>
      {children}
      <ClientFooter></ClientFooter>
    </>
  );
};

export default CommonLayout;
