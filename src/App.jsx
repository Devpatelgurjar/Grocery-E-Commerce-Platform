import { useState } from 'react'
import Header from './components/Header/Header'
import Banner from './components/Banner/Banner'
import Categories from './components/Categories/Categories'
import PopularItems from './components/PopularItems/PopularItems'
import Sidebar from './components/Sidebar/Sidebar'
import { Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import CartPage from './Pages/CartPage'
import Layout from './components/Layout/Layout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
      <Route path="/" element={<Layout/>}>
        <Route path='/' element={<HomePage />} />
        <Route path='/cart' element={<CartPage/>} />
      </Route>
    </Routes>
    </>
  )
}

export default App
