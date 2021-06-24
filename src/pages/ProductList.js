import { data } from 'jquery'
import React from 'react'
import { withRouter } from 'react-router-dom'

function ProductList(props) {
  return (
    <>
      <h1>ProductList</h1>
      <ul>
        {data.map((product,i)=>{
          return(
            <li i={key}>
              <Link to={`/products-detail/${product.id}`}></Link>
          </li>)
        })}
      </ul>
      <h1>會員登入狀況：{props.auth ? '未登入' : '已登入'}</h1>
      <button
        onClick={() => {
          props.history.goBack()
        }}
      >
        回到上一頁
      </button>
      <button
        onClick={() => {
          props.history.push('about')
        }}
      >
        跳轉About
      </button>
    </>
  )
}

export default withRouter(ProductList)
