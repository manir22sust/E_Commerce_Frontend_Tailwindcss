import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signOutAsync } from "../authSlice";
import { Navigate } from "react-router-dom";

export const Logout = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.loggedInUser);
  useEffect(() => {
    dispatch(signOutAsync());
  });
  return <>{!user && <Navigate to="/login" replace={true}></Navigate>}</>;
};
