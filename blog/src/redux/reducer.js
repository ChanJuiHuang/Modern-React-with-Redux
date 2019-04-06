import actions from './actions'

const initialState = {
  posts: [],
  users: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.FETCH_POSTS:
      return {
        ...state,
        posts: action.posts
      }
    case actions.FETCH_USER:
      return {
        ...state,
        users: [...state.users, action.user]
      }
    default:
      return state
  }
}
