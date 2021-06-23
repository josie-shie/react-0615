import React, { useState } from 'react'
import MyButton from './components/MyButton'

function App() {
  // 使用狀態，勾子(hooks)
  //相當於類別元件的setState
  //useState -> (value,f)
  //useState會傳回兩個參數,更新過的值跟需要調動的function
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
