import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const Protected = ({ children }) => {
  const user = useSelector((state) => state.auth.loggedInUser);

  if (!user) {
    return <Navigate to="/login" replace={true}></Navigate>;
  }
  return children;
};
