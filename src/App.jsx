import { useState } from 'react'

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
import Manage from './pages/Manage/Manage'
import Checkout from './pages/Checkout/Checkout'

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
        <Route path="/manage" element={<Manage/>} />
        <Route path="/checkout" element={<Checkout/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
