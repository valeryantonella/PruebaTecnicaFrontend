import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { HomePage } from '../pages/Home';
import { Layout } from './Layout';
import { NotFoundPage } from '../pages/NotFound';
import ClientPage from '../pages/clients/ClientPage';
import ServicePage from '../pages/services/ServicePage';

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
  {
    path: '/services',
    element: (
      <Layout>
        <ServicePage />
      </Layout>
    ),
  },
]);

export const MainRouter = () => {
  return <RouterProvider router={router} />;
};
