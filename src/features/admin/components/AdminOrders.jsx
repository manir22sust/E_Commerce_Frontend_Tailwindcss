import React, { useEffect, useState } from "react";
import {
  PencilIcon,
  EyeIcon,
  ArrowUpIcon,
  ArrowDownIcon,
} from "@heroicons/react/24/outline";
import { ITEMS_PER_PAGE, discountedPrice } from "../../../app/constants";

import { useDispatch, useSelector } from "react-redux";
import { fetchAllOrderAsync, updateOrderAsync } from "../../order/orderSlice";
import { Pagination } from "../../shared/Pagination";

export const AdminOrders = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const orders = useSelector((state) => state.order.orders);
  const totalOrders = useSelector((state) => state.order.totalOrders);
  const [editableOrderId, setEditableOrderId] = useState(-1);
  const [sort, setSort] = useState({});

  const handleEdit = (order) => {
    setEditableOrderId(order.id);
  };
  const handleShow = () => {
    console.log("handleShow");
  };
  const handleUpdate = (e, order) => {
    const updatedOrder = { ...order, status: e.target.value };
    dispatch(updateOrderAsync(updatedOrder));
    setEditableOrderId(-1);
  };

  const chooseColor = (status) => {
    switch (status) {
      case "pending":
        return " bg-purple-200  text-purple-600";
      case "dispatched":
        return " bg-yellow-200  text-yellow-600";
      case "delivered":
        return " bg-green-200  text-green-600";
      case "cancelled":
        return " bg-red-200  text-red-600";
      default:
        return " bg-purple-200  text-purple-600";
    }
  };

  const handlePage = (page) => {
    setPage(page);
  };
  const handleSort = (sortOption) => {
    const sort = { _sort: sortOption.sort, _order: sortOption.order };
    console.log({ sort });
    setSort(sort);
  };

  useEffect(() => {
    const pagination = { _page: page, _limit: ITEMS_PER_PAGE };
    dispatch(fetchAllOrderAsync({ sort, pagination }));
    //TODO : Server will filter deleted products
  }, [dispatch, page, sort]);
  return (
    <div className="m-5 overflow-x-auto">
      <div className="bg-gray-100 bg-gray-100 font-sans">
        <div className="w-full">
          <div className="my-6 rounded bg-white shadow-md">
            <table className="w-full min-w-max table-auto">
              <thead>
                <tr className="bg-gray-200 text-sm uppercase leading-normal text-gray-600">
                  <th
                    className="cursor-pointer px-6 py-3 text-left"
                    onClick={(e) =>
                      handleSort({
                        sort: "id",
                        order: sort?._order === "asc" ? "desc" : "asc",
                      })
                    }
                  >
                    Order#
                    {sort._sort === "id" &&
                      (sort._order === "asc" ? (
                        <ArrowUpIcon className="inline h-4 w-4"></ArrowUpIcon>
                      ) : (
                        <ArrowDownIcon className="inline h-4 w-4"></ArrowDownIcon>
                      ))}
                  </th>
                  <th className="px-6 py-3 text-left">Items</th>
                  <th
                    className=" cursor-pointer px-6 py-3 text-center"
                    onClick={(e) =>
                      handleSort({
                        sort: "totalAmount",
                        order: sort?._order === "asc" ? "desc" : "asc",
                      })
                    }
                  >
                    Total Amount
                    {sort._sort === "totalAmount" &&
                      (sort._order === "asc" ? (
                        <ArrowUpIcon className="inline h-4 w-4"></ArrowUpIcon>
                      ) : (
                        <ArrowDownIcon className="inline h-4 w-4"></ArrowDownIcon>
                      ))}
                  </th>
                  <th className="px-6 py-3 text-center">Shipping Address</th>
                  <th className="px-6 py-3 text-center">Status</th>
                  <th className="px-6 py-3 text-center">Actions</th>
                </tr>
              </thead>
              <tbody className="text-sm font-light text-gray-600">
                {orders.map((order) => (
                  <tr
                    key={order.id}
                    className="border-b border-gray-200 hover:bg-gray-100"
                  >
                    <td className="whitespace-nowrap px-6 py-3 text-left">
                      <div className="flex items-center">
                        <span className="font-medium"> {order.id} </span>
                      </div>
                    </td>
                    <td className="px-6 py-3 text-left">
                      {order.items.map((item, index) => (
                        <div key={index} className="flex items-center">
                          <div className="mr-2">
                            <img
                              className="h-6 w-6 rounded-full"
                              src={item.product.thumbnail}
                            />
                          </div>
                          <span>
                            {" "}
                            {item.product.title} - #{item.quantity} - €
                            {item.product.price} - €
                            {discountedPrice(item.product)}
                          </span>
                        </div>
                      ))}
                    </td>
                    <td className="px-6 py-3 text-center">
                      <div className="flex items-center justify-center">
                        €{order.totalAmount}
                      </div>
                    </td>
                    <td className="px-6 py-3 text-center">
                      <span className=" text-green-600">
                        <div>
                          <strong>{order.selectedAddress.firstName} </strong>
                          <strong>{order.selectedAddress.lastName}</strong>
                          <div> {order.selectedAddress.street}</div>
                          <div> {order.selectedAddress.city}</div>
                          <div> {order.selectedAddress.postCode}</div>
                          <div> {order.selectedAddress.state}</div>
                          <div> {order.selectedAddress.phone}</div>
                        </div>
                      </span>
                    </td>
                    <td className="px-6 py-3 text-center">
                      {order.id === editableOrderId ? (
                        <select onChange={(e) => handleUpdate(e, order)}>
                          <option value="pending">pending </option>
                          <option value="dispatched">dispatched </option>
                          <option value="delivered">Delivered </option>
                          <option value="cancelled">Cancelled </option>
                        </select>
                      ) : (
                        <span
                          className={`${chooseColor(
                            order.status
                          )} rounded-full px-3 py-1 text-xs`}
                        >
                          {order.status}
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-3 text-center">
                      <div className="item-center flex justify-center">
                        <div className="hover:scale-120 mr-4 w-6 transform hover:text-purple-500">
                          <EyeIcon
                            className="h-6 w-6"
                            onClick={(e) => handleShow(order)}
                          >
                            {" "}
                          </EyeIcon>
                        </div>
                        <div className="hover:scale-120 mr-4 w-6 transform hover:text-purple-500">
                          <PencilIcon
                            className="h-6 w-6"
                            onClick={(e) => handleEdit(order)}
                          ></PencilIcon>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Pagination
        page={page}
        setPage={setPage}
        handlePage={handlePage}
        totalItems={totalOrders}
      />
    </div>
  );
};
