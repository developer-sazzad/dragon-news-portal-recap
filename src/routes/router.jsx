import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import CategoryNews from "../pages/CategoryNews"

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: '',
        element: <Navigate to={'/category/01'}></Navigate>
      },
      {
        path: '/category/:id',
        element: <CategoryNews></CategoryNews>,
        loader: ({ params }) =>
          fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
      },
    ]
  },
  {
    path: '/news',
    element: <div>News</div>
  },
  {
    path: '/auth',
    element: <div>Auth</div>,
    children: [
      {
        path: '/auth/login',
        element: <div>Login</div>
      },
      {
        path: '/auth/register',
        element: <div>Register</div>
      }
    ]
  },
  {
    path: '*',
    element: <div>Error</div>
  }

]);

export default router;