import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { HomePage } from '../pages/Home';
import { Layout } from './Layout';
import { NotFoundPage } from '../pages/NotFound';
import ClientPage from '../pages/clients/ClientPage';

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
  {
    path: '/clients',
    element: (
      <Layout>
        <ClientPage />
      </Layout>
    ),
  },
]);

export const MainRouter = () => {
  return <RouterProvider router={router} />;
};
