import React from 'react'
import { Route, Routes } from 'react-router'
import Result from './pages/Result'
import Home from './pages/Home'
import BuyCredit from './pages/BuyCredit'
import Navbar from './components/Navbar'

export default function App() {
  return (
    <div className='min-h-screen bg-slate-50'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/result' element={<Result/>}/>
        <Route path='/buy' element={<BuyCredit/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}
