import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './page/Home'
import Login from './page/Login'
import Navbar from './component/navbar'
import Dashboard from './page/Dashboard'

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />}/>
        <Route path="/dashboard" element={<Dashboard />}/>
        {/* <Route path="/register" element={<Register />}/> */}
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
