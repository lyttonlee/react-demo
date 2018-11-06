import {
  ADD_COMMENT,
  DELETE_COMMENT,
  GET_COMMENTS,
  INCREAMENT,
  DECREAMENT
} from './action-types'

export const addComment = comment => ({
  type: ADD_COMMENT,
  data: comment
})
export const deleteComment = index => ({
  type: DELETE_COMMENT,
  data: index
})
export const getComments = () => {
  return dispatch => {
    setTimeout(() => { 
      const comments = [{user: 'lytton', content: 'hello world!'}]
      dispatch(getCommentsSync(comments))
    }, 100)
  }
}
const getCommentsSync = comments =>({
  type: GET_COMMENTS,
  data: comments
})
export const increament = num => ({
  type: INCREAMENT,
  data: num
})
export const decreament = num => ({
  type: DECREAMENT,
  data: num
})