import React from 'react'
import { withRouter } from 'react-router-dom'

function Product(props) {
  console.log(props)

  return (
    <>
      <h1>Product - {props.title}</h1>
      <h2>
        會員登入情況: {props.auth ? '已經登入' : '未登入'}
      </h2>
      <button
      // 使用history的屬性回到瀏覽器記錄的上一頁
        onClick={() => {
          props.history.goBack()
        }}
      >
        返回上一頁
      </button>
      <button
      // 使用history的屬性跳轉到路由表的某一頁(必須是有在路由表出現的路由)
        onClick={() => {
          props.history.push('/login')
        }}
      >
        跳到登入頁
      </button>
    </>
  )
}

// 擴充了此元件的屬性，得到router的三個主要屬性(match/history/Loaction)
export default withRouter(Product)
