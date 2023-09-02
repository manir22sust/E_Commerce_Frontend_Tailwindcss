import { Outlet } from "react-router-dom";
import Navbar from "../features/navbar/Navbar";
import { Footer } from "./Footer";

export const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};
