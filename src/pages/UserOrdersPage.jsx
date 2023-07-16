import React from "react";
import { UserOrders } from "../features/user/components/UserOrders";

export const UserOrdersPage = () => {
  return (
    <>
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <h1 className="text-left text-2xl font-bold tracking-tight text-gray-900">
          My Orders
        </h1>
      </div>

      <UserOrders></UserOrders>
    </>
  );
};
