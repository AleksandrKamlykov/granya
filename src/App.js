import React, { useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/HeaderApp/Header';
import { RouterApp } from './RouterApp';
import { allProducts } from './components/data'
import { useDispatch } from 'react-redux';

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart')) || []
    let newOrder = []
    cart.forEach(elem => {
      const item = allProducts.find(e => elem.article === e.article)
      let newItem = {
        ...item,
        size: elem.size || '',
        count: +elem.count || 1
      }
      newOrder.push(newItem)
    })
    dispatch({ type: 'updateCart', payload: { order: newOrder } })
  }, [])

  return (
    <BrowserRouter>
      <Header />
      <div className="App">
        <RouterApp style={{ marginTop: 60 }} />
        <Footer />
      </div>

    </BrowserRouter>
  );
}

export default App;
