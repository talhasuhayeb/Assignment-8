import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Navber from "../Components/Navber";

const MainLayout = () => {
  return (
    <div>
      {/* NAVBAR */}
      <Navber />
      {/* DYNAMIC SECTION */}
      <div className="min-h-[calc(100vh-400px)]">
        <Outlet/>
      </div>
      {/* FOOTER */}
      <Footer />
    </div>
  );
};

export default MainLayout;
