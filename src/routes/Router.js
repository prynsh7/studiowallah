import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import About from '../pages/About/About';
import Contact from '../pages/Contact/Contact';
import Login from '../pages/Login/Login';
import Sign from '../pages/Sign/sign';
import Home from '../pages/Home/Home';
import Password from '../pages/Password/password';
import ProductDetails from '../pages/ProductDetails/ProductDetails';
import { ROUTES } from './RouterConfig';

const Router = () => {



    const RouteWithRole = ({ Element }) => {
        return (
          <>
            <Element/>
          </>
        );
      }

  return (
    <div>
        <Routes>
            <Route exact path={ROUTES.Home} element={<RouteWithRole Element={Home} />}></Route>
            <Route exact path={ROUTES.Product} element={<RouteWithRole Element={About} />}></Route>
            <Route exact path={ROUTES.Product + '/:id'} element={<RouteWithRole Element={ProductDetails} />}></Route>
            <Route exact path={ROUTES.Contact} element={<RouteWithRole Element={Contact} />}></Route>
            <Route exact path={ROUTES.Login} element={<RouteWithRole Element={Login} />}></Route>
            <Route exact path={ROUTES.Sign} element={<RouteWithRole Element={Sign} />}></Route>
            <Route exact path={ROUTES.Reset} element={<RouteWithRole Element={Password} />}></Route>
            
        </Routes>
    </div>
  )
}

export default Router