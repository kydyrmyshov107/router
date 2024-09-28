import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import { appRoutes } from "../shared/constants/constants";
import Layout from "./Layout";

const HomePage = lazy(() => import("../pages/home/HomePage"));
const NewsPage = lazy(() => import("../pages/news/News"));


export const Router = createBrowserRouter([
  {
    path: appRoutes.home,
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Layout />
      </Suspense>
    ),
    errorElement: <div>Error</div>,
    children: [
      {
        path: appRoutes.home,
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <HomePage />
          </Suspense>
        )
      },
      {
        path: appRoutes.news,
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <NewsPage />
          </Suspense>
        )
      }
    ]
  }
]);
