import { configureStore } from '@reduxjs/toolkit'
import blogSlice from '../features/blogSlice'
import newsSlice from '../features/newsSlice'

export const store = configureStore({
  reducer: {
    blog: blogSlice,
    news: newsSlice,
  },
})
