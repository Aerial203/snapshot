import React from 'react'
import { Routes, Route } from "react-router-dom"
import Mountain from './pages/Mountain'
import Food from './pages/Food'
import Flower from './pages/Flower'
import Bird from "./pages/Bird"
import Layout from './pages/Layout'

function ManageRoute() {
  return (
      <Routes> 
        <Route path="/" element={<Layout />}/>
        <Route index element={<Mountain />}/>
        <Route path="/Food" element={<Food />}/>
        <Route path="/Bird" element={<Bird />}/>
        <Route path="/Flower" element={<Flower />}/>
      </Routes>
  )
}

export default ManageRoute