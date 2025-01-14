import Header from "./header";
import { Outlet } from "react-router-dom";
import Footer from "./footer";

const Layout = () => {
  return (
    <div>
      <Header />
      <main className="min-vh-100">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
