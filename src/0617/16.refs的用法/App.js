import React, { useRef } from 'react'
import Item from './components/Item'

function App() {
  //useRef()->為一個物件{current:參數}
  //useRef()非常類似state 他裡面放置了一個屬性狀態，但他不用呼叫setState即可更新裡面的值
  const inputEl = useRef()

  return (
    <>
      {/* key不屬於porps的一部份 */}
      <ul>
        {[1, 2, 3].map((v, i) => (
          <Item value={v} key={i} />
        ))}
      </ul>

      {/* ref不屬於porps的一部份 */}
      {/* 在這裡設定鉤子 將input標籤勾出來 */}
      <input type="text" ref={inputEl} />
      <button
        onClick={() => {
          // inputEl.current拿到的是整個<input type="text"/>標籤
          inputEl.current.focus()
        }}
      >
        Fcous Input
      </button>
    </>
  )
}

export default App
