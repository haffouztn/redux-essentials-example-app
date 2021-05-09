import { configureStore } from '@reduxjs/toolkit'
import postsReducer from '../features/posts/postsSlice';
import usersReducer from '../features/users/usersSlice'

export default configureStore({
  reducer: {
    users: usersReducer,
    posts: postsReducer
  },
})
