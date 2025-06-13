import { ShoppingCart } from 'lucide-react';
import React from 'react'

const CartButton =({ count }) => (
  <div className="relative">
    <button className="relative p-2 bg-white rounded-full  hover:bg-gray-100">
      <ShoppingCart className="h-6 w-6 text-gray-800" />
      {count > 0 && (
        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
          {count}
        </span>
      )}
    </button>
  </div>
);

export default CartButton
