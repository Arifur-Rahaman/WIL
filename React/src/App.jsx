import { Route, Routes } from "react-router-dom"
import UseMemo from "./pages/UseMemo"
import Home from "./pages/Home"

function App() {

  return (
    <div>
      <Routes>
      <Route path="/" element={<Home/>}/>
        <Route path="/memo" element={<UseMemo/>}/>
      </Routes>
    </div>
  )
}

export default App
