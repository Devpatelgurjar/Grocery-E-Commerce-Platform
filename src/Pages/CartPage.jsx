import React from 'react';
import { useCartStore } from '../Store/Store.js';
import { Minus, Plus, Trash2 } from 'lucide-react';

const CartPage = () => {
  const {
    cart,
    removeFromCart,
    incrementQty,
    decrementQty
  } = useCartStore();

  const total = cart.reduce((sum, item) => {
    const numericPrice = parseFloat(item.price.replace('$', ''));
    return sum + numericPrice * item.qty;
  }, 0).toFixed(2);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Your Cart</h2>

      {cart.length === 0 ? (
        <p className="text-gray-600">🛒 Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center bg-white p-4 rounded shadow"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-16 w-16 object-cover rounded"
                />
                <div>
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-sm text-gray-500">{item.price}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => decrementQty(item.id)}
                  className="px-2 py-1 bg-gray-200 rounded"
                >
                  <Minus size={18} />
                </button>
                <span className="text-md font-medium w-6 text-center">
                  {item.qty}
                </span>
                <button
                  onClick={() => incrementQty(item.id)}
                  className="px-2 py-1 bg-gray-200 rounded"
                >
                  <Plus size={18} />
                </button>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 hover:text-red-700"
              >
                <Trash2 size={20} />
              </button>
            </div>
          ))}

          <div className="text-right mt-4 text-lg font-bold">
            Total: ${total}
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
