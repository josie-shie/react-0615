import React from 'react'
import TodoItem from './TodoItem'

function TodoList(props) {
  const { todos, handleCompleted, handleDelete,handleEdited } = props

  return (
    <>
      <ul>
        {todos.map((todoItem, i) => {
          return (
            <TodoItem
              key={todoItem.id}
              todoItem={todoItem}
              handleCompleted={handleCompleted}
              handleDelete={handleDelete}
              handleEdited={handleEdited}
            />
          )
        })}
      </ul>
    </>
  )
}

export default TodoList
