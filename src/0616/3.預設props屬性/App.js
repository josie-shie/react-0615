import React, { useState } from 'react'
import MyButton from './components/MyButton'

function App() {
  // 使用狀態，勾子(hooks)
  const [total, setTotal] = useState(0)

  return (
    <>
      <h1>{total}</h1>
      <MyButton setTotal={setTotal} total={total} />

      <MyButton setTotal={setTotal} total={total} value={-2} />
    </>
  )
}

export default App
