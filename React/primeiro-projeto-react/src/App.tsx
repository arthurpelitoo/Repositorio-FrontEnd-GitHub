
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./assets/pages/Login"
import Firstpag from "./assets/pages/Firstpag"


function App() {

  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/Firstpag" element={<Firstpag/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
