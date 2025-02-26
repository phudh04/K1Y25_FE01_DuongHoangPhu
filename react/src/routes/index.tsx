import { RouteObject } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import About from "../pages/AboutPage";
import ProtectedRoute from "../protectedRoute";
import User from "../pages/user";
import Navbar from "../components/Navbar";
import HomePage from "../pages/HomePage";
import CirclePage from "../pages/CirclePage";
import Shape from "../pages/Shape";

const RouterWeb: RouteObject[] = [
  {
    path: '/',
    element: <User />, // Navbar luôn hiển thị trên mọi trang
    children: [
      {
        index: true, // Mặc định vào trang HomePage khi truy cập "/"
        element: (
          <ProtectedRoute>
            <HomePage />
          </ProtectedRoute>
        ),
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'circle',
        element: <CirclePage />,
      },
      {
        path: 'shape',
        element: <Shape />,
      },
      {
        path: 'login',
        element: <LoginPage />,
      },
    ],
  },
];

export default RouterWeb;
