import React from "react";
import { AdminOrders } from "../features/admin/components/AdminOrders";
import Navbar from "../features/navbar/Navbar";

export const AdminOrdersPage = () => {
  return (
    <div>
      <Navbar />
      <AdminOrders />
    </div>
  );
};
