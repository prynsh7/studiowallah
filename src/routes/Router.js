import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from '../pages/About/About';
import Contact from '../pages/Contact/Contact';
import Home from '../pages/Home/Home';
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
        </Routes>
    </div>
  )
}

export default Router