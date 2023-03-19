import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { DashboardRoutes } from '../DashboardRoutes.jsx';

const AppRouter = () => {
  return (
      <BrowserRouter>
        <DashboardRoutes />
      </BrowserRouter>
  )
}

export default AppRouter