import React from 'react'

import Breadcrumb from '../components/Breadcrumb'

function About(props) {
  return (
    <>
      <h1>關於我們</h1>
      <Breadcrumb />
      <h2>
        會員登入情況: {props.auth ? '已經登入' : '未登入'}
      </h2>
    </>
  )
}

export default About
