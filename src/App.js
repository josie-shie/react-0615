import React, { useState } from 'react' //最新版本可以省略這行

import './App.css'

function App() {
  const [total, setTotal] = useState(0)

  return (
    <>

      <button
        type="button"
        class="btn btn-secondary "
        onClick={() => {
          setTotal(total - 1)
        }}
      >
        -
      </button>
      <button type="button" class="btn btn-outline-info">
        {total}
      </button>
      <button
        type="button"
        class="btn btn-secondary"
        onClick={() => {
          setTotal(total + 1)
        }}
      >
        +
      </button>
    </>
  )
}
export default App
