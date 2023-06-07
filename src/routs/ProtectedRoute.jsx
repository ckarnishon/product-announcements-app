/* eslint-disable import/no-extraneous-dependencies */
import { Navigate, Outlet } from 'react-router-dom'

function ProtectedRoute({ redirectPath = '/login', isLogin }) {
  if (!isLogin) {
    return <Navigate to={redirectPath} replace />
  }

  return <Outlet />
}

export default ProtectedRoute
