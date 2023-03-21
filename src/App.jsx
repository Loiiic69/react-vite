import { useState } from 'react'
import './App.css'
import { Slider } from './composent/slider'
import Login from './composent/login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Navbar } from './composent/navbar'
import { Footer } from './composent/footer'
import Promo from './composent/promo'
import Blog from './composent/blog1'
import { Boutique } from './composent/boutique'

function App() {
  const [count, setCount] = useState(0)


  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path='/login' element={<Login/>} />
        <Route path='/boutique' element={<Boutique/>} />
        <Route path='/' element={<><Promo/><Slider/><Blog/></>}> </Route>
      </Routes>
      <br></br>
      <Footer></Footer>
    </BrowserRouter>
  )
}



export default App
