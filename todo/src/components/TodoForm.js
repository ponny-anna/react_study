import React, { useState } from 'react'

import { CREATE_TODO, DELETE_ALL_TODO } from '../actions'

const TodoForm = ({ state, dispatch }) => {
  const [title, setTitle] = useState('')

  const addTodo = (e) => {
    e.preventDefault()
    dispatch({
      type: CREATE_TODO,
      title,
    })

    setTitle('')
  }

  const deleteAllTodo = (e) => {
    e.preventDefault()

    const result = window.confirm('すべてのTODOを削除しても宜しいですか？')
    if (!result) return;
    dispatch({
      type: DELETE_ALL_TODO
    })
  }

  return (
  <>
    <form>
      <div>
        <label htmlFor="formTodo">Todo</label>
        <input id="formTodo" value={title} onChange={e => setTitle(e.target.value)} />
        <button onClick={addTodo} disabled={title === ''}>Add</button>
      </div>
      </form>
    <button onClick={deleteAllTodo} disabled={state.length === 0}>すべてのTODOを削除する</button>
  </>
  )
}

export default TodoForm