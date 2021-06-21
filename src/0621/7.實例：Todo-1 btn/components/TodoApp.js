import React, { useState } from 'react'

function TodoApp() {
  const [todo, setTodo] = useState('')

  const [todos, setTodos] = useState(['今天開始React', '買iphone'])

  return (
    <>
      {/* 可控的表單元素 */}
      <form action="">
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button
          onClick={(e) => {
            e.preventDefault()
            const newTodos = [todo, ...todos]
            setTodos(newTodos)
            setTodo('')
          }}
        >
          Add
        </button>
      </form>
      <ul>
        {todos.map((v, i) => {
          return (
            <li key={i}>
              {v}
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default TodoApp
