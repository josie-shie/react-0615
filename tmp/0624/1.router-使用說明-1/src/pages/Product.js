import React from 'react'

function Product(props) {
  return (
    <>
      <h1>Product - {props.title}</h1>
      <h2>
        會員登入情況: {props.auth ? '已經登入' : '未登入'}
      </h2>
      <button onClick={() =>{}}>回到登入頁</button>
      <button onClick={() =>{props.goBack}}>回上一頁</button>
    </>
  )
}

export default Product
