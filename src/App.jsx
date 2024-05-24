import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import { useSnapshot } from 'valtio'
import state from './store'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import Products from './pages/Products/Products'
import 'aos/dist/aos.css'
import Detail from './pages/Detail/Detail'

function App() {
  const snap = useSnapshot(state);
 console.log(snap.navButton);
  return (
    <BrowserRouter>
      <NavBar navButton={snap.navButton} />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/details" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
