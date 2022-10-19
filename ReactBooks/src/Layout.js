import { Link, useMatch, useResolvedPath } from "react-router-dom"
export default function Layout() {
  return (
    <nav className="nav">
      <Link to="/books" className="site-title">
        Digital Books
      </Link>
      <ul>
        <CustomLink to="/viewbooks">View books</CustomLink>
        <CustomLink to="/logout">Logout</CustomLink>
      </ul>
    </nav>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}