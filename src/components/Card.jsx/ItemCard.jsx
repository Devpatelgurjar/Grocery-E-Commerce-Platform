import React from 'react'
import { useCartStore } from '../../Store/Store';
import { Link } from 'react-router-dom';

const ItemCard = ({item}) => {
    const { cart, addToCart, removeFromCart } = useCartStore();

  const isInCart = (id) => cart.some(item => item.id === id);
  return (
    <div key={item.id} className="flex flex-col items-center bg-white rounded-lg shadow-md p-2 text-center">
            <div className="mx-auto h-[80px] w-[80px] bg-gray-200 mb-2">
              <Link to={`product/${item.id}`}><img src={item.image} className="w-full h-full" /></Link>
            </div>
            <div className="w-[70%] flex justify-between items-center max-md:flex-col">
              <div className="flex flex-col items-center justify-center">
                <p className="text-sm font-medium">{item.name}</p>
                <p className="text-xs text-gray-600">{item.price}</p>
              </div>
              {isInCart(item.id) ? (
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="mt-2 text-sm px-3 py-1 bg-red-500 text-white rounded-md h-8"
                >
                  Remove
                </button>
              ) : (
                <button
                  onClick={() => addToCart(item)}
                  className="mt-2 text-sm px-3 py-1 bg-green-500 text-white rounded-md h-8"
                >
                  Add
                </button>
              )}
            </div>
          </div>
  )
}

export default ItemCard
