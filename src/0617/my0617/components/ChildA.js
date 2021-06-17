import React, { useState } from 'react'

function ChildA(props) {
  const [childAData, setChildAData] = useState('ChildA Data')
  return (
    <>
      <h1>This is ChildA</h1>
      {/* 方法下放：子元件繼承父屬性的finction再將子元件的值帶入之中 */}
      <button
        onClick={() => {
          props.setParentData(childAData)
        }}
      >
        送資料給父母(Parent)元件
      </button>
    </>
  )
}

export default ChildA
