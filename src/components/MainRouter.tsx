import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { HomePage } from '../pages/Home';
import { Layout } from './Layout';
import { NotFoundPage } from '../pages/NotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Layout>
        <HomePage />
      </Layout>
    ),
    errorElement: (
      <Layout>
        <NotFoundPage />
      </Layout>
    ),
  },
]);

export const MainRouter = () => {
  return <RouterProvider router={router} />;
};
