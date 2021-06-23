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
}

MyButton.defaultProps = {
  value: 9,
}

export default MyButton
