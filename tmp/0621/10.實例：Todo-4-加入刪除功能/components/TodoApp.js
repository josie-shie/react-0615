import React, { useState } from 'react'

function TodoApp() {
  const [todoInput, setTodoInput] = useState('')

  // 另一個仿照資料庫的自動遞增的方式來產生id
  // 每次要id值時呼叫increment()
  // const [autoIncrement, setAutoIncrement] = useState(0)

  // const increment = () => {
  //   const newAutoIncrement = autoIncrement + 1
  //   setAutoIncrement(newAutoIncrement)
  //   return newAutoIncrement
  // }

  // 待辨事項每個的物件值
  // todo = {id:number, text:string, completed:bool(default: false)}
  const [todos, setTodos] = useState([
    { id: 9999999, text: '努力學React', completed: true },
    {
      id: 9999977,
      text: '買iPhone或安卓手機',
      completed: false,
    },
  ])

  const handleDelete = (id) => {
    // 先由目前的todos過濾掉"不要"有這個id的一個新陣列
    const newTodos = todos.filter((item) => item.id !== id)
    // 設定回狀態值
    setTodos(newTodos)

    // // for
    // const newTodos = []

    // for (let i = 0; i < todos.length; i++) {
    //   if (todos[i].id === id) continue

    //   newTodos.push(todos[i])
    // }
    // setTodos(newTodos)
  }

  const handleCompleted = (id) => {
    // 先由目前的todos拷貝出一個陣列
    const newTodos = [...todos]

    // 利用id值找到對應的todo項目的索引值
    // 用findIndex的作法
    const index = newTodos.findIndex(
      (item) => item.id === id
    )

    // 如果有找到就切換completed的true/false
    if (index !== -1) {
      newTodos[index].completed = !newTodos[index].completed
      // 設定回狀態值
      setTodos(newTodos)
    }

    // // for迴圈的作法
    // for (let i = 0; i < newTodos.length; i++) {
    //   if (newTodos[i].id === id) {
    //     newTodos[i].completed = !newTodos[i].completed
    //     break
    //   }
    // }

    // setTodos(newTodos)
  }

  return (
    <>
      {/* 可控的表單元素，value對應到狀態，onChange對應到設定狀態 */}
      <input
        type="text"
        value={todoInput}
        onChange={(e) => setTodoInput(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            // 建立一個todo項目的物件值
            // 用時間物件轉微秒整數當id值
            const newTodoItem = {
              id: +new Date(),
              text: e.target.value,
              completed: false,
            }

            // 文字輸入框的值加到陣列todos
            // 相當於unshift，在陣列前加入新的成員
            const newTodos = [newTodoItem, ...todos]

            // 設定陣列狀態值
            setTodos(newTodos)

            // 清空文字輸入框
            setTodoInput('')
          }
        }}
      />
      <ul>
        {todos.map((todoItem, i) => {
          return (
            <li key={todoItem.id}>
              <input
                type="checkbox"
                checked={todoItem.completed}
                onChange={() => {
                  handleCompleted(todoItem.id)
                }}
              />
              {todoItem.completed ? (
                <del>{todoItem.text}</del>
              ) : (
                todoItem.text
              )}
              <button
                onClick={() => {
                  handleDelete(todoItem.id)
                }}
              >
                刪除
              </button>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default TodoApp
