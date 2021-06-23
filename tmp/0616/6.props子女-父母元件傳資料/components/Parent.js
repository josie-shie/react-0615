import React, { useState } from 'react'
import ChildA from './ChildA'

function Parent() {
  // inner state
  const [parentData, setParentData] = useState('Parent Data')

  return (
    <>
      <ChildA setParentData={setParentData} />
      <p>目前Parent資料：{parentData}</p>
    </>
  )
}

export default Parent
