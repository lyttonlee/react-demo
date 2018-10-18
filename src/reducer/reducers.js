import {combineReducers} from 'redux'
import {
  ADD_COMMENT,
  DELETE_COMMENT, 
  GET_COMMENTS,
  INCREAMENT,
  DECREAMENT
} from './action-types'
const initComments = []
function comments(state = initComments, action) { 
  switch (action.type) {
    case ADD_COMMENT:
      return [action.data, ...state]
    case DELETE_COMMENT:
      return state.filter((c,index) => index !== action.data)
    case GET_COMMENTS:
      return action.data
    default:
      return state
  }
}
function counter(state = 0, action) {
  switch (action.type) {
    case INCREAMENT:
      return state + action.data
    case DECREAMENT:
      return state - action.data
    default:
      return state
  }
}

export default combineReducers({
  comments,
  counter
})