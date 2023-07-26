import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchLoggedInUserOrdersAsync } from "../userSlice";
import { discountedPrice } from "../../../app/constants";

export function UserOrders() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.loggedInUser);
  const orders = useSelector((state) => state.user.userOrders);
  // const user = useSelector((state) => state.user.userInfo);

  useEffect(() => {
    dispatch(fetchLoggedInUserOrdersAsync(user?.id));
  }, [dispatch]);

  return (
    <div>
      {orders &&
        orders.length > 0 &&
        orders.map((order, index) => (
          <div key={index}>
            <div className="mx-auto mt-12 max-w-7xl bg-white px-4 py-6 sm:px-6 lg:px-8">
              <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                <h1 className="my-5 text-4xl font-bold tracking-tight text-gray-900">
                  Order #{order?.id}
                </h1>
                <h3 className="my-5 text-xl font-bold tracking-tight text-red-900">
                  Order Status: {order.status}
                </h3>
                <div className="flow-root">
                  <ul role="list" className="-my-6 divide-y divide-gray-200">
                    {order.items.map((item) => (
                      <li key={item.id} className="flex py-6">
                        <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                          <img
                            src={item.thumbnail}
                            alt={item.title}
                            className="h-full w-full object-cover object-center"
                          />
                        </div>

                        <div className="ml-4 flex flex-1 flex-col">
                          <div>
                            <div className="flex justify-between text-base font-medium text-gray-900">
                              <h3>
                                <a href={item.href}>{item.title}</a>
                              </h3>
                              <p className="ml-4">€ {discountedPrice(item)}</p>
                            </div>
                            <p className="mt-1 text-sm text-gray-500">
                              {item.brand}
                            </p>
                          </div>
                          <div className="flex flex-1 items-end justify-between text-sm">
                            <div className="text-gray-500">
                              <label
                                htmlFor="quantity"
                                className="mr-5 inline text-sm font-medium leading-6 text-gray-900"
                              >
                                Qty:{item.quantity}
                              </label>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                <div className="my-2 flex justify-between text-base font-medium text-gray-900">
                  <p>Subtotal</p>
                  <p>€ {order.totalAmount}</p>
                </div>

                <div className="my-2 flex justify-between text-base font-medium text-gray-900">
                  <p> Total Items in Cart</p>
                  <p>{order.totalItems} Items</p>
                </div>
                <p className="mt-0.5 text-sm text-gray-500">
                  Shipping Address:
                </p>

                <div className="flex justify-between gap-x-6 border-2 border-solid border-gray-200 px-5 py-5">
                  <div className="flex gap-x-4">
                    <div className="min-w-0 flex-auto">
                      <p className="text-sm font-semibold leading-6 text-gray-900">
                        {order.selectedAddress.firstName}
                        {order.selectedAddress.lastName}
                      </p>
                      <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                        {order.selectedAddress.street}
                      </p>
                      <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                        {order.selectedAddress.postCode}
                      </p>
                    </div>
                  </div>
                  <div className="hidden sm:flex sm:flex-col sm:items-end">
                    <p className="text-sm leading-6 text-gray-900">
                      Phone: {order.selectedAddress.phone}
                    </p>
                    <p className="text-sm leading-6 text-gray-900">
                      {order.selectedAddress.city}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
