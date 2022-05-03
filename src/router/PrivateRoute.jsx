import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = () => {
  const isAuthSTATE = useSelector(
    (state) => state.user.isAuth,
  );

  return (
    <div>
      {
        isAuthSTATE
          ? <Outlet />
          : <Navigate to="/login" />
      }
    </div>
  );
};

export default PrivateRoute;
