import "./App.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// pages
import Home from "./pages/Home";
import { LoginPage } from "./pages/LoginPage";
import { SignupPage } from "./pages/SignupPage";
import { CartPage } from "./pages/CartPage";
import { Checkout } from "./pages/Checkout";
import { ProductDetailPage } from "./pages/ProductDetailPage";
import { PageNotFound } from "./pages/404";
import { OrderSuccessPage } from "./pages/OrderSuccessPage";
import { UserOrdersPage } from "./pages/UserOrdersPage";
import { UserProfilePage } from "./pages/UserProfilePage";

//  protected  components

import { Protected } from "./features/auth/components/Protected";
//  components
import { Layout } from "./components/Layout";
//  slice
import { fetchItemsByUserIdAsync } from "./features/cart/cartSlice";
// import { fetchLoggedInUserAsync } from "./features/user/userSlice";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Protected>
        <Layout />
      </Protected>
    ),

    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "cart",
        element: <CartPage />,
      },

      {
        path: "checkout",
        element: <Checkout />,
      },
      {
        path: "product-detail/:id",
        element: <ProductDetailPage />,
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
        element: <UserProfilePage />,
      },
    ],
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
    path: "*",
    element: <PageNotFound />,
  },
]);

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.loggedInUser);
  // const user = useSelector((state) => state.user.userInfo);

  useEffect(() => {
    if (user) {
      dispatch(fetchItemsByUserIdAsync(user.id));
      // dispatch(fetchLoggedInUserAsync(user.id));
    }
  }, [dispatch, user]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
