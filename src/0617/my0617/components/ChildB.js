import React from 'react'

function ChildB(props) {
  return (
    <>
      <h1>This is ChildB</h1>
      <p>從ChildA得到的資料：{props.parentData}</p>
    </>
  )
}

export default ChildB
