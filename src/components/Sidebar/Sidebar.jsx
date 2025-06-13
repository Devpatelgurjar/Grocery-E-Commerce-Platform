import { Home, User } from 'lucide-react'
import React from 'react'
import CartButton from '../Buttons/CartButton'
import { Link } from 'react-router-dom'
import { useCartStore } from '../../Store/Store'

const Sidebar = () => {
  const cartLength = useCartStore((state) => state.cart.length);
  return (
   <aside className="w-16 sm:w-20 bg-white p-4 shadow h-screen flex flex-col items-center space-y-6">
    <div className=" flex items-center justify-center w-8 h-8 bg-green-500 rounded-full"><User className="h-6 w-6 text-white" /></div>
    <Link to="/"><div className="w-6 h-6 rounded"><Home/></div></Link>
    <Link to="/cart"><div ><CartButton count={cartLength} /></div></Link>
  </aside>
  )
}

export default Sidebar
