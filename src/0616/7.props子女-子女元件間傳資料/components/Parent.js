import React, { useState } from 'react'
import ChildA from './ChildA'
import ChildB from './ChildB'

function Parent() {
  // inner state
  const [parentData, setParentData] = useState('')

  return (
    <>
      <p>目前Parent資料：{parentData}</p>

      <ChildA setParentData={setParentData} />
      <ChildB ChildAData={parentData} />
    </>
  )
}

export default Parent
