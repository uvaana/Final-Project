import { Route, Routes } from "react-router-dom"
import AddBooks from "./pages/AddBooks"
import Logout from "./pages/Logout"
import Layout from "./Layout"
import Books from "./pages/Books"
import ViewBooks from "./pages/ViewBooks"
import UpdateBooks from "./pages/UpdateBooks"
import Login from "./Login"
import App1 from "./App1"
import Home from "./pages/Home"


function App() {
  return (
    <>
      <Layout />
      <div className="container">
        <Routes>
          <Route path="/books" element={<Books />} />
          <Route path="/createbooks" element={<AddBooks />} />
          <Route path="/viewbooks" element={<ViewBooks />} />
          <Route path="/logout" element={<Logout/>} />
          <Route path="/updatebooks/:id" element={<UpdateBooks />}/>
      </Routes>
      </div>


      
    </>
  )
}

export default App