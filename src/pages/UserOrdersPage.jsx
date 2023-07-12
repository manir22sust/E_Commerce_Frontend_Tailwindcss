import React from "react";
import { UserOrders } from "../features/user/components/UserOrders";

export const UserOrdersPage = () => {
  return (
    <>
      <h1 className="mx-auto text-2xl"> My Orders</h1>
      <UserOrders></UserOrders>
    </>
  );
};
