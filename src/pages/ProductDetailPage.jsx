import Navbar from "../app/features/navbar/Navbar";
import ProductDetail from "../app/features/productList/components/ProductDetail";

export const ProductDetailPage = () => {
  return (
    <div>
      <div>
        <Navbar>
          <ProductDetail />
        </Navbar>
      </div>
    </div>
  );
};
