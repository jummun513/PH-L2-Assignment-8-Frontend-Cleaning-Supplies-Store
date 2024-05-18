import ClientNavbar from "@/component/shared/ClientNavbar/ClientNavbar";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ClientNavbar></ClientNavbar>
      {children}
    </>
  );
};

export default CommonLayout;
