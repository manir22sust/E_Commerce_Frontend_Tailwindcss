import React from "react";
import { UserOrders } from "../app/features/user/components/UserOrders";
import Navbar from "../app/features/navbar/Navbar";

export const UserOrdersPage = () => {
  return (
    <div>
      <Navbar>
        <h1 className="mx-auto text-2xl"> My Orders</h1>
        <UserOrders></UserOrders>
      </Navbar>
    </div>
  );
};
