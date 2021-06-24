import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
} from 'react-router-dom'

// 導入所需頁面
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'
import Login from './pages/Login'

// App的角色或工作
// 1. 路由器/路由
// 2. 全站使用的狀態：ex. 會員是否登入
// 3. 最外層的排版
function App() {
  // 使用者是否登入(false=沒登入)
  const [auth, setAuth] = useState(false)

  return (
    <Router>
      <>
        <h2>用a來連結</h2>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/product">Product</a>
          </li>
          <li>
            <a href="/login">Login</a>
          </li>
        </ul>
        <hr />
        <h2>用Link來連結</h2>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/product">Product</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>

        {/* 路由表 */}
        {/* switch: 同時之間只會有一個匹配 */}
        <Switch>
          {/* 網站首頁 */}
          {/* ps.比較長字串路由放上面 */}
          <Route path="/product/orderlist/">
            <Product title="Order List" />
          </Route>
          <Route path="/product/cart/">
            <Product title="Cart" />
          </Route>
          <Route path="/product">
            <Product auth={auth} />
          </Route>
          <Route path="/about">
            <About auth={auth} />
          </Route>
          <Route path="/login">
            <Login auth={auth} setAuth={setAuth} />
          </Route>
          <Route exact path="/">
            <Home auth={auth} />
          </Route>
        </Switch>
      </>
    </Router>
  )
}

export default App
