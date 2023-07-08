import React from "react";

import Navbar from "../app/features/navbar/Navbar";
import ProductList from "../app/features/product/components/ProductList";

export default function Home() {
  return (
    <div>
      <Navbar>
        <ProductList></ProductList>
      </Navbar>
    </div>
  );
}