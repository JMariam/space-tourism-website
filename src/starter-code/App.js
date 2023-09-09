import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Destination from "./Destination";
import Crew from "./Crew";
import Technology from "./Technology";




export default function App() {
  return (
    <Router>
        <Routes>
          <Route path='/' exact element={<Home/>}/>
          <Route path='/destination' element={<Destination/>}/>
          <Route path='/crew' element={<Crew/>}/>
          <Route path='/technology' element={<Technology/>}/>
        </Routes>
    </Router>
  
  )
}