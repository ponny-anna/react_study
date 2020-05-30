import { CREATE_TODO, DELETE_TODO, DELETE_ALL_TODO } from '../actions'

const events = (state = [], action) => {
  switch(action.type) {
    case CREATE_TODO:
      const todo = { title: action.title, date: action.date }
      const length = state.length
      const id = length === 0 ? 1 : state[length - 1].id + 1
      return [...state, { id, ...todo }]
    case DELETE_TODO:
      return state.filter(event => event.id !== action.id)
    case DELETE_ALL_TODO:
      return []
    default:
      return state
  }
}

export default events