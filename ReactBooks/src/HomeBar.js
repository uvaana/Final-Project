import { Link, useMatch, useResolvedPath } from "react-router-dom"
export default function HomeBar() {
  return (
    <nav className="nav">
      <Link to="/home" className="site-title">
        Digital Books
      </Link>
      <ul>
        <CustomLink to="/login">SignIn</CustomLink>
        <CustomLink to="/register">SignUp</CustomLink>
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