import React from 'react'
import { withRouter } from 'react-router-dom'

function ProductDetail(props) {

  
  
  return (
    <>
      <h1>ProductDetail</h1>
      <p>目前產品的id：{props.match.params.id}</p>
      <h1>會員登入狀況：{props.auth ? '未登入' : '已登入'}</h1>
    </>
  )
}

export default withRouter(ProductDetail)
