import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const fetchNews = createAsyncThunk(
  'articles/fetchArticles',
  async (term) => {
    try {
      const response = await fetch(
        `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${term}&api-key=${process.env.REACT_APP_ARTICLE_KEY}`
      )
      const data = await response.json()
      return data.response.docs
    } catch (error) {
      console.log(error)
    }
  }
)

export const newsSlice = createSlice({
  name: 'news',
  initialState: {
    articles: [],
    term: 'technology',
    isLoading: true,
  },

  reducers: {
    setTerm: (state, action) => {
      state.term = action.payload
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, (state) => {
        state.isLoading = true
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
        state.articles = action.payload
        state.isLoading = false
      })
      .addCase(fetchNews.rejected, (state) => {
        state.isLoading = false
      })
  },
})

export const { setTerm } = newsSlice.actions

export default newsSlice.reducer
