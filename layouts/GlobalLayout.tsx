import react, { ReactNode } from "react";
import Header from "@components/Header";
import Sidebar from "@components/Sidebar";

interface GlobalLayoutProps {
  children: ReactNode;
}
function GlobalLayout({ children }: GlobalLayoutProps) {
  return (
    <>
      <Header />
      <Sidebar
        navigationData={["Home", "Gallery", "Store", "Favorites", "Saved"]}
      />
      <div className="p-20">{children}</div>
    </>
  );
}
export default GlobalLayout;
