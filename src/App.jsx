import "./App.css";
import Home from "./pages/Home";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import { LoginPage } from "./pages/LoginPage";
import { SignupPage } from "./pages/SignupPage";
import { CartPage } from "./pages/CartPage";
import { Checkout } from "./pages/Checkout";
import { ProductDetailPage } from "./pages/ProductDetailPage";
import { Protected } from "./app/features/auth/components/Protected";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchItemsByUserIdAsync } from "./app/features/cart/cartSlice";
import { PageNotFound } from "./pages/404";
import { OrderSuccessPage } from "./pages/OrderSuccessPage";

import { UserProfile } from "./app/features/user/components/UserProfile";
import { UserOrdersPage } from "./pages/UserOrdersPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Protected>
        <Home />
      </Protected>
    ),
  },
  {
    path: "login",
    element: <LoginPage />,
  },
  {
    path: "signup",
    element: <SignupPage />,
  },
  {
    path: "cart",
    element: (
      <Protected>
        <CartPage />
      </Protected>
    ),
  },

  {
    path: "checkout",
    element: (
      <Protected>
        <Checkout />
      </Protected>
    ),
  },
  {
    path: "product-detail/:id",
    element: (
      <Protected>
        <ProductDetailPage />
      </Protected>
    ),
  },
  {
    path: "order-success/:id",
    element: <OrderSuccessPage />,
  },
  {
    path: "orders",
    element: <UserOrdersPage />,
  },
  {
    path: "profile",
    element: <UserProfile />,
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.loggedInUser);

  useEffect(() => {
    if (user) {
      dispatch(fetchItemsByUserIdAsync(user.id));
    }
  }, [dispatch, user]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
