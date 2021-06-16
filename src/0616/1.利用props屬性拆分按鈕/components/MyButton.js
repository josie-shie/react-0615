import React from 'react'

function MyButton(props) {
  return (
    <>
      <button
        onClick={() => {
          props.setTotal(props.total + props.value)
        }}
      >
        {props.value > 0 && '+'}
        {props.value}
      </button>
    </>
  )
}

export default MyButton
