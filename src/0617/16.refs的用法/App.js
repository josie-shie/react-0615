import React, { useRef } from 'react'
import Item from './components/Item'

function App() {
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
      <input type="text" ref={inputEl} />
      <button
        onClick={() => {
          inputEl.current.focus()
        }}
      >
        Fcous Input
      </button>
    </>
  )
}

export default App
