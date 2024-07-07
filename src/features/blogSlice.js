import { createSlice } from '@reduxjs/toolkit'

export const blogSlice = createSlice({
  name: 'blog',
  initialState: {
    blogs: [],
  },
  reducers: {
    addBlog: (state, action) => {
      state.blogs.push(action.payload)
    },
    deleteBlog: (state, action) => {
      state.blogs = state.blogs.filter((blog) => blog.id !== action.payload.id)
    },
  },
})

export const { addBlog, deleteBlog } = blogSlice.actions

export default blogSlice.reducer
