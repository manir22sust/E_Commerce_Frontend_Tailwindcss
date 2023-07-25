import React from "react";
import { ProductForm } from "../features/admin/components/ProductForm";
import Navbar from "../features/navbar/Navbar";

export const AdminProductFormPage = () => {
  return (
    <div>
      <Navbar />
      <ProductForm />
    </div>
  );
};
