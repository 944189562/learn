import './App.css';
import {Link, NavLink, Route, Routes, useRoutes} from 'react-router-dom'
import Home from "./pages/Home";
import About from "./pages/About";
import Empty from "./pages/404";
import Products from "./pages/product/products";
import Product from "./pages/product/product";
import JzRoutes from "./router";

function App() {
  return (
    <div className="App">
      <h1>Welcome to React Router~</h1>
      <nav>
        {/*<Link to="/">Home</Link>*/}
        {/*<Link to="/about">About</Link>*/}
        {/*<Link to="/products">Products</Link>*/}
        <NavLink to={'/'}>
          {
            ({isActive}) => (
              <span className={isActive ? 'link-active' : null}>Home</span>
            )
          }
        </NavLink>
        <NavLink to={'/about'}>About</NavLink>
        <NavLink to={'/products'}>Products</NavLink>
        <NavLink to={'/hook'}>Hooks</NavLink>
        <NavLink to={'/useRef'}>UseRef</NavLink>
        <NavLink to={'/useLayoutEffect'}>UseLayoutEffect</NavLink>
        <NavLink to={'/customHooks'}>customHooks</NavLink>
      </nav>
      <main>
        {/*<Routes>*/}
        {/*  <Route path={'/'} element={<Home/>}/>*/}
        {/*  <Route path={'/about'} element={<About/>}/>*/}
        {/*  <Route path="/products/*" element={<Products/>}>*/}
        {/*  </Route>*/}
        {/*  <Route path="*" element={<Empty/>}/>*/}
        {/*</Routes>*/}
        <JzRoutes/>
      </main>
    </div>
  );
}

export default App;
