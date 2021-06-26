import React from 'react'
import { withRouter, Link } from 'react-router-dom'

// 模擬從伺服器端來的產品資料
import { data } from '../data/'

function ProductList(props) {
  console.log(props)

  return (
    <>
      <h1>ProductList - {props.title}</h1>
      <ul>
        {data.map((product, i) => {
          return (
            <li key={i}>
              <Link to={'/product-detail/' + product.id}>
                {product.name}/{product.price}
              </Link>
            </li>
          )
        })}
      </ul>
      <h3>會員登入情況: {props.auth ? '已經登入' : '未登入'}</h3>
      <button
        onClick={() => {
          props.history.goBack()
        }}
      >
        返回上一頁
      </button>
      <button
        onClick={() => {
          props.history.push('/login')
        }}
      >
        跳到登入頁
      </button>
    </>
  )
}

// 擴充了此元件的屬性，得到router的三個主要屬性
export default withRouter(ProductList)
