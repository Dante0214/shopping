import { Navigate } from "react-router";

interface PrivateRouteProps {
  children: React.ReactNode;
  isLoggedIn: boolean;
}

const PrivateRoute = ({ children, isLoggedIn }: PrivateRouteProps) => {
  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }
  return <>{children}</>;
};

export default PrivateRoute;
