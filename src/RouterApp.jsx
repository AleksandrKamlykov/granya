import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Cart } from './components/Cart/Cart';
import { Home } from './components/Home/Home';
import { ProductItem } from "./components/ProductItem/ProductItem";

export const RouterApp = () => {

    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='shop/:id' element={<ProductItem />} />
            <Route path='cart' element={<Cart />} />
            <Route path='*' element={<Home />} />
        </Routes>
    )

};