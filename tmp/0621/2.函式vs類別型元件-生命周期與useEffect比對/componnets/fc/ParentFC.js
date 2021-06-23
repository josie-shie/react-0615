import React, { useEffect, useState } from 'react'
import ChildFC from './ChildFC'

function ParentFC() {
  const [isChildLive, setIsChildLive] = useState(true)

  // componentDidMount
  useEffect(() => {
    console.log('ParentFC componentDidMount')
  }, [])

  // componentDidMount + componentDidUpdate
  useEffect(() => {
    console.log(
      'ParentFC componentDidMount + componentDidUpdate'
    )
  }, [isChildLive])

  return (
    <>
      <h1>函式型元件</h1>
      <br />
      <button
        onClick={() => {
          setIsChildLive(true)
        }}
      >
        Live
      </button>
      <button
        onClick={() => {
          setIsChildLive(false)
        }}
      >
        Die
      </button>
      <hr />
      {isChildLive ? <ChildFC /> : ''}
    </>
  )
}

export default ParentFC
