import { createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import AddedBlog from './pages/AddedBlog'
import Projects from './pages/Projects'
import Blogs from './pages/Blogs'

export default createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/create',
    element: <AddedBlog />,
  },
  {
    path: '/projects',
    element: <Projects />,
  },
  {
    path: '/blogs',
    element: <Blogs />,
  },
])
