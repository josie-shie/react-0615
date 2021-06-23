import React, { useState } from 'react'
import ParentCC from './componnets/cc/ParentCC'
import ParentFC from './componnets/fc/ParentFC'

function App() {
  const [tagName, setTagName] = useState('ParentFC')

  const coms = { ParentCC, ParentFC }

  //標記暫存名稱
  const Tag = coms[tagName]

  return (
    <>
      <button onClick={() => setTagName('ParentFC')}>
        函式型元件
      </button>
      <button onClick={() => setTagName('ParentCC')}>
        類別型元件
      </button>
      <Tag />
    </>
  )
}

export default App
