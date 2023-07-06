import React from "react";

import Navbar from "../app/features/navbar/Navbar";
import ProductList from "../app/features/productList/components/ProductList";
import { LoginPage } from "./LoginPage";
import { SignupPage } from "./SignupPage";

export default function Home() {
  return (
    <div>
      <Navbar>
        <ProductList></ProductList>
      </Navbar>
      {/* <LoginPage /> */}

      {/* <SignupPage /> */}
    </div>
  );
}
