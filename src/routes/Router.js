import React from 'react'

import { Routes,Route,Navigate} from 'react-router-dom'


import Home from '../Pages/Home'
import Allfood from '../Pages/Allfood'
import Fooddetails from '../Pages/Fooddetails'
import Cart  from '../Pages/Cart'
import Checkout from '../Pages/Checkout'
import Contact from '../Pages/Contact'
import Login from '../Pages/Login'
import Register from '../Pages/Register'




const Router = () => {
  return (
<Routes>
    <Route path='/' element={<Navigate to='/home'/>}/>
    <Route path='/home' element={<Home/>}/>
    <Route path='/foods' element={<Allfood/>}/>
    <Route path='/foods/:id' element={<Fooddetails/>}/>
    <Route path='/cart' element={<Cart/>}/>
    <Route path='/checkout' element={<Checkout/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/register' element={<Register/>}/>


</Routes>
)
}

export default Router