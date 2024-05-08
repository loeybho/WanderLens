import { Outlet } from "react-router-dom";
import Footer from "@components/Footer";
import Header from "@components/NavigationMenu/Header";

function Layout() {
  return (
    <>
      <Header />
      <div className="flex max-w-[800px] mx-auto px-4">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default Layout;
