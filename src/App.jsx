import ActiveSlider from "./component/ActiveSlider"
import Navbar from "./component/Header/Navbar"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import SignUp from "./pages/SignUp"
import Login from "./pages/Login"
function App() {


  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={ <HomePage /> } />
        <Route path='/signup' element={ <SignUp /> } />
        <Route path='/login' element={ <Login /> } />
      </Routes>
    </Router>

  )
}

export default App
