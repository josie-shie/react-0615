import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'

function App() {
  return (
    <>
      {/* Router=路由器 必須在App最外層使用*/}
      {/* 必須用link取代a 才可以完整的操作 (Link 像是 HTML 的 <a>，能夠在點擊後轉變目前的 Location)*/}
      <Router>
        <>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/product">Product</Link>

          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/product">
              <Product />
            </Route>
          </Switch>
        </>
      </Router>
    </>
  )
}

export default App
