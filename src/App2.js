import { Route, Routes } from "react-router-dom"
import SubBar from "./SubBar"
import Subscribe from "./pages/Subscribe"
import Logout from "./pages/Logout"
import ViewSubBooks from "./pages/ViewSubBooks"

function App2() {
    return (
      <>
        <SubBar/>
        <div className="container">
          <Routes>
            <Route path="/subscribe" element={<Subscribe />} />
            <Route path="/viewbooks-sub" element={<ViewSubBooks/>} />
            <Route path="/logout" element={<Logout/>} />
            
        </Routes>
        </div>
  
  
        
      </>
    )
  }
  
  export default App2