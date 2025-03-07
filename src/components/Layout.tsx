import { Outlet } from "react-router-dom";
import Footer from "./Footer.tsx";
import Header from "./Header.tsx";

const Layout: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
