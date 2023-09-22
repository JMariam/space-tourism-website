import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Destination from "./Pages/Destination";
import Crew from "./Pages/Crew";
import Technology from "./Pages/Technology";




export default function App() {
  return (
    <Router>
        <Routes>
          <Route path='/space-tourism-website' exact element={<Home/>}/>
          <Route path='/space-tourism-website/destination' exact element={<Destination/>}/>
          <Route path='/space-tourism-website/crew' exact element={<Crew/>}/>
          <Route path='/space-tourism-website/technology' exact element={<Technology/>}/>
        </Routes>
    </Router>
  
  )
}