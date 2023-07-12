/* eslint-disable import/no-extraneous-dependencies */
import { Navigate, Outlet } from 'react-router-dom'

import { useAuth } from "../redux/Hooks/useAuth";

function ProtectedRoute() {
  const { isAuth } = useAuth();

  if ( !isAuth) {
    return <Navigate to="/profile" replace />;
  }

  return <Outlet />;
}

export default ProtectedRoute;
