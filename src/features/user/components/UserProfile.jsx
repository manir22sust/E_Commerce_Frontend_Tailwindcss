import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../userSlice";

export function UserProfile() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.loggedInUser);

  return (
    <>
      <div className="mx-auto mt-12 max-w-7xl bg-white px-4 py-6 sm:px-6 lg:px-8">
        <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
          <h1 className="my-5 text-4xl font-bold tracking-tight text-gray-900">
            Name:
            {user.addresses.firstName ? (
              <>
                {user.addresses.firstName} {user.addresses.lastName}
              </>
            ) : (
              "New User"
            )}
          </h1>
          <h3 className="my-5 text-xl font-bold tracking-tight text-red-900">
            Email address: {user.email}
          </h3>
        </div>

        <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
          <p className="mt-0.5 text-sm text-gray-500">Your Address:</p>
          {user.addresses.map((address, index) => (
            <div
              key={index}
              className="flex justify-between gap-x-6 border-2 border-solid border-gray-200 px-5 py-5"
            >
              <div className="flex gap-x-4">
                <div className="min-w-0 flex-auto">
                  <p className="text-sm font-semibold leading-6 text-gray-900">
                    {address.firstName}
                    {address.lastName}
                  </p>
                  <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                    {address.street}
                  </p>
                  <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                    {address.postCode}
                  </p>
                </div>
              </div>
              <div className="hidden sm:flex sm:flex-col sm:items-end">
                <p className="text-sm leading-6 text-gray-900">
                  Phone: {address.phone}
                </p>
                <p className="text-sm leading-6 text-gray-900">
                  {address.city}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
