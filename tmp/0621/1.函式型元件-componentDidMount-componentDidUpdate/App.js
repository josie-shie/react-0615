import React, { useEffect, useState } from 'react'

function App() {
  const [total, setTotal] = useState(0)

  // 指示目前元件是否開始進入更新狀態
  const [start, setStart] = useState(false)

  // componentDidMount
  // 元件初次(一開始)呈現在網頁上
  useEffect(() => {
    console.log('componentDidMount ')
    setStart(true)
  }, [])

  // componentDidUpdate+componentDidMount
  // 第一次還是會執行裡面的程式碼
  useEffect(() => {
    console.log(
      'componentDidUpdate+componentDidMount ',
      total
    )
  }, [total])

  // componentDidUpdate
  useEffect(() => {
    // ignore略過
    if (!start) return

    console.log('componentDidUpdate ', total)
  }, [total])

  return (
    <>
      <h1>{total}</h1>
      <button
        onClick={() => {
          setTotal(total + 1)
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          setTotal(total - 1)
        }}
      >
        -1
      </button>
    </>
  )
}

export default App
