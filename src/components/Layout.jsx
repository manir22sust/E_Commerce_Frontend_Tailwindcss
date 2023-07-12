import { Outlet } from "react-router-dom";
import Navbar from "../features/navbar/Navbar";

export const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};
