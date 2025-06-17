import React from 'react'
import { Link} from 'react-router-dom'
import { useCartStore } from '../../Store/Store';

const CategoryCard = ({item}) => {
     const { cart, addToCart, removeFromCart } = useCartStore();
      const isInCart = (id) => cart.some(item => item.id === id);
  return (
    <div
          key={item.id}
          className="flex max-md:flex-col max-md:gap-4 items-center justify-between bg-white rounded shadow p-4"
        >
          <Link to={`/product/${item.id}`}>
          <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded" />
         </Link>

          {/* info */}
          <div className="flex-1 px-4">
            <h3 className="text-lg font-semibold">{item.name}</h3>
            <p className="text-sm text-gray-600">{item.price}</p>
            <p className="text-sm text-gray-500 mt-1">{item.description}</p>
          </div>

          {/* buttn */}
          <div>
            {isInCart(item.id) ? (
              <button
                onClick={() => removeFromCart(item.id)}
                className="px-4 py-2 text-sm bg-red-500 text-white rounded"
              >
                Remove
              </button>
            ) : (
              <button
                onClick={() => addToCart(item)}
                className="px-4 py-2 text-sm bg-green-500 text-white rounded"
              >
                Add
              </button>
            )}
          </div>
        </div>
  )
}

export default CategoryCard
