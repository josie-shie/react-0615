import React, { useState } from 'react'
import ChildA from './ChildA'

function Parent() {
  // inner state
  const [parentData, setParentData] = useState('Parent Data')

  return (
    <>
      <ChildA parentData={parentData} />
    </>
  )
}

export default Parent
