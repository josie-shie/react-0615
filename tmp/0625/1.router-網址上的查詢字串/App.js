import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import ProductList from './pages/ProductList'
import Login from './pages/Login'
import ProductDetail from './pages/ProductDetail'
import PrductDetailSearchParams from './pages/ProductDetailSearchParams'

// App的角色或工作
// 1. 路由器/路由
// 2. 全站使用的狀態：ex. 會員是否登入
// 3. 最外層的排版ex:footer/Nav/container

function App() {
  const [auth, setAuth] = useState(false)
  return (
    <>
      {/* Router=路由器 必須在App最外層使用*/}
      {/* 必須用link取代a 才可以完整的操作 (Link 不會刷新頁面 <a>會讓頁面刷新*/}
      <Router>
        <>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/product-list">ProductList</Link>
            </li>
            <li>
              <Link to="/product-detail">ProductDetail</Link>
            </li>
            <li>
              <Link to="/prduct-detail-search-params">
                PrductDetailSearchParams
              </Link>
            </li>
            <li>
              <a href="/login">Login</a>
            </li>
          </ul>
          {/* 路由表 */}
          {/* Switch讓第一個符合 URL 的元件會被渲染，反之，如果沒有 Switch 則所有符合 URL 的元件都會被渲染 */}
          <Switch>
            <Route path="/about">
              <About auth={auth} />
            </Route>
            {/* 網站首頁  exact精確比對 在只有/的時候讓瀏覽器知道是指這個路由*/}
            {/* 定義網址參數 params */}
            {/* 較長的路徑放上面 小技巧*/}
            <Route path="/prduct-detail-search-params/">
              <PrductDetailSearchParams />
            </Route>
            <Route path="/product/oderList/">
              <ProductList />
            </Route>
            <Route path="/product/cart/">
              <ProductList />
            </Route>
            <Route path="/product-detail/:id?">
              <ProductDetail auth={auth} />
            </Route>
            <Route path="/product-list">
              <ProductList auth={auth} />
            </Route>
            <Route exact path="/login">
              <Login auth={auth} setAuth={setAuth} />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </>
      </Router>
    </>
  )
}

//擴充此元件的屬性 得到router三個屬性(history mach)
export default App
