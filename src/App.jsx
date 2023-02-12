import React from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'

import './App.css'

import pages from './pages'
import containers from './containers'

const { Home, Product } = pages;
const { Header, SideBar } = containers;

const App = () => {
  return (
    <div className='App'>
      <Router>
        <Header />
        <div className='App-body'>
          <SideBar />
          <Routes className='App-body--content'>
            <Route path='/' element={ <Home /> } />
            <Route path='/:productId' element={ <Product /> } />
          </Routes>
        </div>
      </Router>
    </div>
  )
}

export default App