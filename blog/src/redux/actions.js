import _ from 'lodash'
import jsonPlaceholderApi from '../apis'

const blogActions = {
  FETCH_POSTS: 'FETCH_POSTS',
  FETCH_USER: 'FETCH_USER',
  FETCH_POSTS_AND_USERS: 'FETCH_POSTS_AND_USERS',
  fetchPosts: () => async dispatch => {
    const res = await jsonPlaceholderApi.get('posts')
    dispatch({ type: blogActions.FETCH_POSTS, posts: res.data })
  },
  fetchUser: id => async dispatch => {
    const res = await jsonPlaceholderApi.get(`users/${id}`)
    dispatch({ type: blogActions.FETCH_USER, user: res.data })
  },
  fetchPostsAndUsers: () => async (dispatch, getState) => {
    await dispatch(blogActions.fetchPosts())
    const {
      blog: { posts }
    } = getState()
    _.chain(posts)
      .map('userId')
      .uniq()
      .forEach(id => dispatch(blogActions.fetchUser(id)))
      .value()
  }
}

// const blogActions = {
//   FETCH_POSTS: 'FETCH_POSTS',
//   FETCH_USER: 'FETCH_USER',
//   fetchPosts: () => async dispatch => {
//     const res = await jsonPlaceholderApi.get('posts')
//     dispatch({ type: blogActions.FETCH_POSTS, posts: res.data })
//   },
//   fetchUser: id => dispatch => _fetchUser(id, dispatch)
// }

// const _fetchUser = _.memoize(async (id, dispatch) => {
//   const res = await jsonPlaceholderApi.get(`users/${id}`)
//   dispatch({ type: blogActions.FETCH_USER, user: res.data })
// })

export default blogActions
