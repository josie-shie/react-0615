import React, { useState } from 'react'

function App() {
  // 使用狀態，勾子(hooks)
  // 解構賦值語法(es6)
  console.log(useState(0))
  //  useState(0) = [0, ƒ]
  const [total, setTotal] = useState(0)

  return (
    <h1
      onClick={() => {
        setTotal(total + 1)
      }}
    >
      {total}
    </h1>
  )
}

export default App
