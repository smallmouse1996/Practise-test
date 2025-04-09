import logo from './logo.svg';
import './App.css';
import { Navigate, useRoutes } from "react-router-dom";

import Layout01 from "./layouts/UserLayout/index";
import Home01 from "./pages/layout01/Home";
import Topic from "./pages/layout01/Topic copy";
import Contact from "./pages/layout01/Contact";
import Exam from "./pages/layout01/Exam";
import Login from "./pages/Login";
import Register from "./pages/Register";

import Layout02 from "./layouts/AdminLayout/index";
import Home02 from "./pages/layout02/Home";
import About02 from "./pages/layout02/About";

function App() {
  const routes = useRoutes([
		{
      path: "/",
      element: <Layout01 />,
      children: [
        {
          path: "/",
          element: <Home01 />,
        },
        {
          path: "/thi-thu",
          element: <Topic />,
        },
				{
          path: "/lien-he",
          element: <Contact />,
        },
        {
          path: "/thi-thu/de-01",
          element: <Exam />,
        },
        {
          path: "/dang-nhap",
          element: <Login />,
        },
        {
          path: "/dang-ky",
          element: <Register />,
        },
      ],
    },
    {
      path: "/",
      element: <Layout02 />,
      children: [
        {
          path: "layout02",
          element: <Home02 />,
        },
				{
          path: "layout02/about",
          element: <About02 />,
        },
      ],
    },
		
  ]);
  return routes;
}

export default App;
