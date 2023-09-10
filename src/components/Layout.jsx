import { Outlet } from "react-router-dom";
import Navbar from "../features/navbar/Navbar";
import { Footer } from "./Footer";

export const Layout = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <div className="flex-grow">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
