import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setTerm } from '../features/newsSlice'

const SearchForm = () => {
  const [input, setInput] = useState('')

  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(setTerm(input))
  }

  const handleInput = (e) => {
    if (e.target.value.length < 20) {
      setInput(e.target.value)
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="e.g politics"
          className="py-1 px-2 rounded-l-lg outline-none"
          onChange={handleInput}
          value={input}
        />
        <button
          type="submit"
          className="bg-green-400 py-1 px-2 rounded-r-lg text-white"
        >
          Search
        </button>
      </form>
    </div>
  )
}
export default SearchForm
