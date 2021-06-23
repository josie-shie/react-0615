import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
} from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'

// App的角色或工作
// 1. 路由器/路由
// 2. 全站使用的狀態：ex. 會員是否登入
// 3. 最外層的排版
function App() {
  return (
    <Router>
      <>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/product">Product</Link>

        <Switch>
          <Route path="/product">
            <Product />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          {/* 網站首頁 */}
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </>
    </Router>
  )
}

export default App
