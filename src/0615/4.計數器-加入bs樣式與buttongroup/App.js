import React, { useState } from 'react'

function App() {
  // 使用狀態，勾子(hooks)
  // 解構賦值語法(es6)
  console.log(useState(0))
  //  useState(0) = [0, ƒ]
  const [total, setTotal] = useState(0)

  return (
    <>
      <div className="btn-group" role="group" aria-label="Basic example">
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => {
            setTotal(total + 1)
          }}
        >
          +
        </button>
        <button type="button" className="btn btn-outline-dark" disabled>
          {total}
        </button>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => {
            setTotal(total - 1)
          }}
        >
          -
        </button>
      </div>
    </>
  )
}

export default App
