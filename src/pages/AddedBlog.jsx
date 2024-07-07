import React, { useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addBlog } from '../features/blogSlice'
import Header from '../components/Header'

const AddedBlog = () => {
  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')
  const [photo, setPhoto] = useState(null)
  const [photoURL, setPhotoURL] = useState('')
  const fileInputRef = useRef(null)

  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!title || !desc) return alert('Please fill in title and description')
    dispatch(addBlog({ title, desc, photo: photoURL }))
    setTitle('')
    setDesc('')
    setPhoto(null)
    setPhotoURL('')
    fileInputRef.current.value = ''
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    setPhoto(file)
    setPhotoURL(URL.createObjectURL(file))
  }

  return (
    <Header>
      <div className="addInputs">
        <h1 className="font-bold text-slate-950 text-4xl mb-6 mt-6">
          Create Blog
        </h1>
        <form className="inputs" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="add a title"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
          <textarea
            cols="30"
            rows="10"
            className="border-2 outline-none p-2"
            placeholder="add a description"
            onChange={(e) => setDesc(e.target.value)}
            value={desc}
          ></textarea>
          <input type="file" onChange={handleFileChange} ref={fileInputRef} />
          {photoURL && (
            <img src={photoURL} alt="Preview" className="w-28 mt-2" />
          )}
          <button type="submit" className="btn">
            Submit
          </button>
        </form>
      </div>
    </Header>
  )
}
export default AddedBlog
