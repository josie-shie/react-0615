import React from 'react'
import PropTypes from 'prop-types'

function MyButton(props) {
  //將props的物件解構賦值出來
  const { setTotal, total, value } = props
  //這樣在渲染時就可以直接引用參數 不需要用props連結
  return (
    <button
      type="button"
      class="btn btn-secondary"
      onClick={() => {
        setTotal(total + value)
      }}
    >
      {value > 0 && '+'}
      {value}
    </button>

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
