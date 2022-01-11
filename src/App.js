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
    const articles = cart.map(e => e.article)

    allProducts.map(elem => {
      if (articles.includes(elem.article)) {
        const item = cart.find(e => e.article === elem.article)
        let newItem = {
          ...elem,
          count: item.count || 1,
          size: item.size || null
        }

        dispatch({ type: 'addToCart', payload: { order: newItem } })
      }
    })

  })

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
