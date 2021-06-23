import React from 'react'

function ChildA(props) {
  return (
    <>
      <h1>This is ChildA</h1>
      {props.parentData}
    </>
  )
}

export default ChildA
