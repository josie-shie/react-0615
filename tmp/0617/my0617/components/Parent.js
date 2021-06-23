import React, { useState } from 'react'
import ChildA from './ChildA'
import ChildB from './ChildB'

function Parent() {
  //
  const [parentData, setParentData] = useState('Parent Data')

  return (
    <>
      {/* 方法下放：子元件繼承父屬性的finction再將子元件的值帶入之中，因此childAData被帶入了setParentData中*/}
      <ChildA setParentData={setParentData} />
      <p>目前Parent資料：{parentData}</p>

      {/* 方法下放：ChildA的值帶入parentData，而此處的ChildB繼承父屬性的parentData 所以等於ChildA*/}
      <ChildB parentData={parentData} />
    </>
  )
}
export default Parent
