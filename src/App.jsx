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
import ProductDetail from './Pages/ProductDetails'
import CategoryPage from './Pages/CategoryPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
      <Route path="/" element={<Layout/>}>
        <Route path='/' element={<HomePage />} />
        <Route path='/cart' element={<CartPage/>} />
        <Route path="/product/:id" element={<ProductDetail/>} />
        <Route path="category/:name" element={<CategoryPage/>} />
      </Route>
    </Routes>
    </>
  )
}

export default App
