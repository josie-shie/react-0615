import React from 'react'
import { withRouter } from 'react-router-dom'

function Login(props) {
  return (
    <>
      <h1>Login</h1>
      <h2>會員登入情況: {props.auth ? '已經登入' : '未登入'}</h2>
      <button onClick={() => props.setAuth(!props.auth)}>
        {props.auth ? '登出' : '請登入'}
      </button>
    </>
  )
}

export default withRouter(Login)
