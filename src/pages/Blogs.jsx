import { useSelector } from 'react-redux'
import Header from '../components/Header'
import { nanoid } from 'nanoid'

const Blogs = () => {
  const blogs = useSelector((state) => state.blog.blogs)
  return (
    <Header>
      <div className="flex flex-col gap-7">
        <h1 className="font-bold text-slate-950 text-4xl mb-6 mt-6 text-center">
          Blogs
        </h1>
        {blogs.length !== 0 ? (
          blogs.map((blog) => {
            return (
              <div
                key={nanoid()}
                className="bg-slate-200 text-black flex items-center justify-center flex-col text-center gap-3"
              >
                <h3 className="text-2xl font-bold pt-3">{blog.title}</h3>
                <p className="h-fit w-8/12 text-left mt-3 mb-3 desc">
                  {blog.desc}
                </p>
                {blog.photo && (
                  <img src={blog.photo} alt="photo" className="w-7/12 mb-4" />
                )}
              </div>
            )
          })
        ) : (
          <h1 className="text-center text-2xl">No blogs added yet</h1>
        )}
      </div>
    </Header>
  )
}
export default Blogs
