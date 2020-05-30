import React, { useReducer } from 'react';

import reducer from './reducers'

import TodoForm from './components/TodoForm'
import Todo from './components/Todo'

const App = () => {
  const [state, dispatch] = useReducer(reducer, [])

  return (
    <>
      <h1>React Todo App</h1>
      <TodoForm state={state} dispatch={dispatch} />
      <hr/>
      <h2>TODO LIST</h2>
      <ul>
        { state.map((todo, index) => (<Todo key={index} todo={todo} dispatch={dispatch} />)) }
      </ul>
    </>
  );
}

export default App;
