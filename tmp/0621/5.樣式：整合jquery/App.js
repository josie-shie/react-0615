import React, { useState, useEffect, useRef } from 'react'
import $ from 'jquery'

function App() {
  const [data, setData] = useState(123)

  const buttonRef = useRef()

  // componentDidMount
  useEffect(() => {
    // jquery程式碼寫在這裡, 確保dom已經出現在網頁
    // 使用id
    $('#one').on('click', () => {
      alert('data is ' + data)
    })

    // 使用refs(推薦)
    $(buttonRef.current).on('click', () => {
      alert('data is ' + data)
    })
  }, [])

  return (
    <>
      <button id="one">Click(use id)</button>
      {/* 使用ref，確保重覆使用元件時不會衝突到dom元素參照 */}
      <button ref={buttonRef}>Click(use refs)</button>
    </>
  )
}

export default App
