// src/routes/index.tsx
import { lazy } from "react";
import { RouteObject } from "react-router-dom";
import MainLayout from "@layouts/MainLayout";
import AuthGuard from "@components/AuthGuard";

// 使用 lazy 实现代码分割
const Home = lazy(() => import("@pages/Home"));
const Products = lazy(() => import("@pages/Products"));
const ProductDetail = lazy(() => import("@pages/ProductDetail"));
const Profile = lazy(() => import("@pages/Profile"));
const NotFound = lazy(() => import("@pages/NotFound"));

const routes: RouteObject[] = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "products",
        children: [
          {
            index: true,
            element: <Products />,
          },
          {
            path: ":id",
            element: <ProductDetail />,
          },
        ],
      },
      {
        path: "profile",
        element: (
          <AuthGuard>
            <Profile />
          </AuthGuard>
        ),
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
];

export default routes;
