import Home from "../pages/Home";
import About from "../pages/About";
import Products from "../pages/product/products";
import Empty from "../pages/404";
import Product from "../pages/product/product";
import Hooks from "../pages/Hooks";
import UseRef from "../pages/useRef";
import UseLayoutEffect from "../pages/useLayoutEffect";
import CustomHooks from "../pages/customHooks";
import { useRoutes } from "react-router-dom";

const JzRoutes = () => {
  const routes = [
    {
      path: '/',
      element: <Home/>
    },
    {
      path: '/about',
      element: <About/>
    },
    {
      path: '/products/*',
      element: <Products/>,
      children: [
        {
          path: ':id',
          element: <Product/>
        }
      ]
    },
    {
      path: '/hook',
      element: <Hooks/>
    },
    {
      path: '/useRef',
      element: <UseRef/>
    },
    {
      path: '/useLayoutEffect',
      element: <UseLayoutEffect/>
    },
    {
      path: '/customHooks',
      element: <CustomHooks/>
    },
    {
      path: '*',
      element: <Empty/>
    }
  ]

  return useRoutes(routes)
}

export default JzRoutes