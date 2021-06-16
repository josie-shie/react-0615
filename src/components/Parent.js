import React , {useState} from 'react'
import ChildA from './ChildA'
import ChildB from './ChildB'

function Parent() {
  //
  const [parentData, setParentData] = useState('Parent Data')

  return (
    <>
      <ChildA setParentData={setParentData} />
      <p>目前Parent資料：{parentData}</p>
      <ChildB ParentData={parentData} />
    </>
  )
}
export default Parent
