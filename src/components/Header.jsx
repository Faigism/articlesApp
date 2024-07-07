import { Link } from 'react-router-dom'

const Header = ({ children }) => {
  return (
    <>
      <header>
        <div className="header">
          <Link to="/" className="createLink">
            <h1>Nordic Rose</h1>
          </Link>
          <ul className="headerLinks">
            <Link to="/" className="createLink">
              <li>News</li>
            </Link>
            <Link to="/create" className="createLink">
              <li>Create Blog</li>
            </Link>
            <Link to="/blogs" className="createLink">
              <li>My Blogs</li>
            </Link>
            <Link to="/projects" className="createLink">
              <li>Projects</li>
            </Link>
          </ul>
        </div>
      </header>
      {children}
    </>
  )
}
export default Header
