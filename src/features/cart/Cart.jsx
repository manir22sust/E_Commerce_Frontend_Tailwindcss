import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { deleteItemFromCartAsync, updateCartAsync } from "./cartSlice";
import { discountedPrice } from "../../app/constants";
import Modal from "../shared/Modal";

import { Audio } from "react-loader-spinner";

export default function Cart() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const status = useSelector((state) => state.cart.status);
  const [open, setOpen] = useState(true);
  const [openModal, setOpenModal] = useState(null);

  const totalAmount = items.reduce(
    (amount, item) => discountedPrice(item.product) * item.quantity + amount,
    0
  );
  const totalItems = items.reduce((total, item) => item.quantity + total, 0);

  const handleQuantity = (e, item) => {
    dispatch(updateCartAsync({ id: item.id, quantity: +e.target.value }));
  };
  const handleRemove = (e, id) => {
    dispatch(deleteItemFromCartAsync(id));
  };
  return (
    <>
      {!items.length && <Navigate to="/" replace={true}></Navigate>}
      <div className="mx-auto mt-12 max-w-7xl bg-white px-4 py-6 sm:px-6 lg:px-8">
        <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
          <h1 className="my-5 text-4xl font-bold tracking-tight text-gray-900">
            Cart
          </h1>
          <div className="flow-root">
            {status === "loading" ? (
              <Audio
                height="80"
                width="80"
                radius="9"
                color="green"
                ariaLabel="loading"
                wrapperStyle
                wrapperClass
              />
            ) : null}
            <ul role="list" className="-my-6 divide-y divide-gray-200">
              {items.map((item) => (
                <li key={item.id} className="flex py-6">
                  {item.product ? (
                    <>
                      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                        <img
                          src={item.product.thumbnail}
                          alt={item.product.title}
                          className="h-full w-full object-cover object-center"
                        />
                      </div>

                      <div className="ml-4 flex flex-1 flex-col">
                        <div>
                          <div className="flex justify-between text-base font-medium text-gray-900">
                            <h3>
                              <a href={item.product.id}>{item.product.title}</a>
                            </h3>
                            <p className="ml-4">
                              € {discountedPrice(item.product)}{" "}
                            </p>
                          </div>
                          <p className="mt-1 text-sm text-gray-500">
                            {item.product.brand}
                          </p>
                        </div>
                        <div className="flex flex-1 items-end justify-between text-sm">
                          <div className="text-gray-500">
                            <label
                              htmlFor="quantity"
                              className="mr-5 inline text-sm font-medium leading-6 text-gray-900"
                            >
                              Qty
                            </label>

                            <select
                              onChange={(e) => handleQuantity(e, item)}
                              value={item.quantity}
                            >
                              <option value="1">1</option>
                              <option value="2">2</option>
                              <option value="3">3</option>
                            </select>
                          </div>

                          <div className="flex">
                            <Modal
                              title={`Delete ${item.product.title}`}
                              message="Are you sure you want to delete this Cart item ?"
                              dangerOption="Delete"
                              cancelOption="Cancel"
                              dangerAction={(e) => handleRemove(e, item.id)}
                              cancelAction={() => setOpenModal(null)}
                              showModal={openModal === item.id}
                            ></Modal>
                            <button
                              // onClick={(e) => handleRemove(e, item.id)}
                              onClick={(e) => {
                                setOpenModal(item.id);
                              }}
                              type="button"
                              className="font-medium text-indigo-600 hover:text-indigo-500"
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <p>Product information is missing.</p>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
          <div className="my-2 flex justify-between text-base font-medium text-gray-900">
            <p>Subtotal</p>
            <p>€ {totalAmount}</p>
          </div>

          <div className="my-2 flex justify-between text-base font-medium text-gray-900">
            <p> Total Items in Cart</p>
            <p>{totalItems} Items</p>
          </div>
          <p className="mt-0.5 text-sm text-gray-500">
            Shipping and taxes calculated at checkout.
          </p>
          <div className="mt-6">
            <Link
              to="/checkout"
              className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
            >
              Checkout
            </Link>
          </div>
          <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
            <p>
              or
              <Link to="/">
                <button
                  type="button"
                  className="m-2 font-medium text-indigo-600 hover:text-indigo-500"
                  onClick={() => setOpen(false)}
                >
                  Continue Shopping
                  <span aria-hidden="true"> &rarr;</span>
                </button>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
