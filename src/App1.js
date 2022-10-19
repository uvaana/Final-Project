import { Route, Routes } from "react-router-dom"
import HomeBar from "./HomeBar"
import Login from "./Login"
import Home from "./pages/Home"
import Register from "./Register"

function App1() {
    return (
      <>
        <HomeBar/>
        <div className="container">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
            
        </Routes>
        </div>
  
  
        
      </>
    )
  }
  
  export default App1