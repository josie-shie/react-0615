import React from 'react'
import PropTypes from 'prop-types'

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
//設定預設值資料型態的規範 ex:number
MyButton.propTypes = {
  value: PropTypes.number,
}
//設定預設值
MyButton.defaultProps = {
  value: 9,
}

export default MyButton
