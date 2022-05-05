import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import LogIn from '../pages/LogIn';
import HomePage from '../pages/HomePage';
import Registration from '../pages/Registration';
import OrderPage from '../pages/OrderPage';
import SuccessOrderPage from '../pages/SuccessOrderPage';

const AppRoutes = () => (
  <Routes>
    <Route exact path="/" element={<PrivateRoute />}>
      <Route exact path="/" element={<HomePage />} />
      <Route exact path="/order" element={<OrderPage />} />
      <Route exact path="/success" element={<SuccessOrderPage />} />
    </Route>

    <Route path="login">
      <Route exact path="/login" element={<LogIn />} />
      <Route exact path="register" element={<Registration />} />
    </Route>

    <Route path="*" element={<Navigate to="/" />} />
  </Routes>
);

export default AppRoutes;
