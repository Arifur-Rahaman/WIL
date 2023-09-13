import { Route, Routes } from "react-router-dom"
import UseMemo from "./pages/UseMemo"
import Home from "./pages/Home"
import Hoc from "./pages/HocPage"

function App() {

  return (
    <div>
      <Routes>
      <Route path="/" element={<Home/>}/>
        <Route path="/memo" element={<UseMemo/>}/>
        <Route path="/hoc" element={<Hoc/>}/>
      </Routes>
    </div>
  )
}

export default App
