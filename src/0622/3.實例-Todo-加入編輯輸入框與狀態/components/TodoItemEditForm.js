import React from 'react'

function TodoItemEditForm(props) {
  const { handleEdited, todoItem } = props

  return (
    <>
      <li>
        <input type="text" />
        <button onClick={() => {}}>儲存</button>
        <button
          onClick={() => {
            handleEdited(todoItem.id)
          }}
        >
          取消
        </button>
      </li>
    </>
  )
}

export default TodoItemEditForm
