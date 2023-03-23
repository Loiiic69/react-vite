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
import { Panier } from './composent/panier'
import { Blog2 } from './composent/blog2'
import { PanierProvider } from './composent/panierContexte'

function App() {
  const [count, setCount] = useState(0)


  return (
    <PanierProvider>
      <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path='/login' element={<Login/>} />
        <Route path='/boutique' element={<><Promo/><Boutique/></>} />
        <Route path='/panier' element={<Panier/>} />
        <Route path='/blog2' element={<><Promo/> <Blog2/> </>}/>
        <Route path='/' element={<><Promo/><Slider/><Blog/></>}> </Route>
      </Routes>
      <br></br>
      <Footer></Footer>
    </BrowserRouter>
    </PanierProvider>
  )
}



export default App
