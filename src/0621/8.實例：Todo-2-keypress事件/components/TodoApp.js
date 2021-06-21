import React, { useState } from 'react'

function TodoApp() {
  const [todoInput, setTodoInput] = useState('')

  const [todos, setTodos] = useState([
    '努力學React',
    '買iPhone或安卓手機',
  ])


  return (
    <>
      {/* 可控的表單元素，value對應到狀態，onChange對應到設定狀態 */}
      <input
        type="text"
        value={todoInput}
        onChange={(e) => setTodoInput(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            // 文字輸入框的值加到陣列todos
            // 相當於unshift，在陣列前加入新的成員
            const newTodos = [e.target.value, ...todos]

            // 設定陣列狀態值
            setTodos(newTodos)

            // 清空文字輸入框
            setTodoInput('')
          }
        }}
      />
      <ul>
        {todos.map((v, i) => {
          return <li key={i}>{v}</li>
        })}
      </ul>
    </>
  )
}

export default TodoApp
