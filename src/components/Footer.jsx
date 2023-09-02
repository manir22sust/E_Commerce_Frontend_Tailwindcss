import React from "react";

export const Footer = () => {
  return (
    <>
      <div className="mt-auto bg-gray-600 ">
        <div className="mx-auto max-w-xl py-2 text-white">
          <div className="text-center">
            <h3 className="mb-2 text-xl"> Download our Ecommerce App </h3>
            <p> Buy what you want. </p>
            <div className="my-2 flex justify-center">
              <div className="mx-2 flex  w-auto items-center rounded-lg border px-4 py-2">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/888/888857.png"
                  className="w-7 md:w-8"
                />
                <div className="ml-3 text-left">
                  <p className="text-xs text-gray-200">Download on </p>
                  <p className="text-sm md:text-base"> Google Play Store </p>
                </div>
              </div>
              <div className="mx-2 flex  w-auto items-center rounded-lg border px-4 py-2">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/888/888841.png"
                  className="w-7 md:w-8"
                />
                <div className="ml-3 text-left">
                  <p className="text-xs text-gray-200">Download on </p>
                  <p className="text-sm md:text-base"> Apple Store </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-2 flex flex-col items-center text-sm text-gray-400 md:flex-row md:justify-between">
            <p className="order-2 mt-2 md:order-1 md:mt-0">
              © Manir Uddin {new Date().getFullYear()}
            </p>
            <div className="order-1 md:order-2">
              <span className="px-2">About us</span>
              <span className="border-l px-2">Contact us</span>
              <span className="border-l px-2">Privacy Policy</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
