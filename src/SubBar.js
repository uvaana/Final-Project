import { Link, useMatch, useResolvedPath } from "react-router-dom"
export default function SubBar() {
  return (
    <nav className="nav">
      <Link to="/subscribe" className="site-title">
        Digital Books
      </Link>
      <ul>
        <CustomLink to="/viewbooks-sub">View Subscribed Books</CustomLink>
        <CustomLink to="/logout">logout</CustomLink>
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