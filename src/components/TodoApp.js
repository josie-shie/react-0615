import React, { useState } from 'react'

function TodoApp() {
  const [todo, setTodo] = useState('')

  const [todos, setTodos] = useState([
    { id: 998, text: '今天開始React', complete: false },
    { id: 999, text: '買iphone', complete: false },
  ])

  const handelComplete = (id) => {
    // 複合型狀態更新不管怎樣就是先考被陣列出來
    // 先由目前的todos拷貝出一個陣列
    const newTodos = [...todos]

    // 利用id值找到對應的todo項目的索引值
    const index = newTodos.findIndex((item) => item.id === id)

    if (index !== -1) {
      newTodos[index].completed = !newTodos[index].completed

      setTodos(newTodos)
    }
  }

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
            const newTodoItem = {
              id: +new Date(),
              text: todo,
              completed: false,
            }

            const newTodos = [newTodoItem, ...todos]
            setTodos(newTodos)
            setTodo('')
          }}
        >
          Add
        </button>
      </form>
      <ul>
      {/* 用map的方式拿出todos裡的所有資料 */}
        {todos.map((todoItem, i) => {
          return (
            <li key={todoItem.id}>
              <input
                type="checkbox"
                checked={todos.complete}
                onchang={() => {
                  handelComplete(todoItem.id)
                }}
              ></input>
              {/* 用completed判斷物件是否需要加完成線 */}
              {todoItem.completed ? <del>{todoItem.text}</del> : todoItem.text}
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default TodoApp
