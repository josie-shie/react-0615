import React from 'react'

function MyButton(props) {
  //console.log(props)
  // 先解出props中的屬性和對應名稱
  const { setTotal, total, value } = props

  return (
    <>
      <button
        onClick={() => {
          setTotal(total + value)
        }}
      >
        {value > 0 && '+'}
        {value}
      </button>
    </>
  )

  //一直引用props的方式
  // <button
  //   type="button"
  //   class="btn btn-secondary"
  //   onClick={() => {
  //     props.setTotal(props.total + props.value)
  //   }}
  // >
  //   {props.value > 0 && '+'}
  //   {props.value}
  // </button>
}

export default MyButton
