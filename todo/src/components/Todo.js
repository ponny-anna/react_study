import React from 'react'

import { DELETE_TODO } from '../actions'

const Todo = ({ todo, dispatch }) => {

  const handleClickDeleteButton = () => {
    dispatch({
      type: DELETE_TODO,
      id: todo.id
    })
  }

  return (
    <li>
      {todo.title}
      <button onClick={handleClickDeleteButton}>削除</button>
    </li>
  )
}

export default Todo