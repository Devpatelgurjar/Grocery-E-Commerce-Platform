// import { Minus, Plus } from 'lucide-react';
// import React from 'react'
// import { Popularitems as items } from '../../constant';

// const PopularItems = () => {
  
//   return (
//     <div className="mt-6">
//       <h2 className="text-xl font-semibold mb-4">Popular Items</h2>
//       <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
//         {items.map((item, index) => (
//           <div key={index} className="flex flex-col items-center bg-white rounded-lg shadow-md p-2 text-center">
//             <div className="mx-auto h-[80px] w-[80px] bg-gray-200 mb-2 "><img src={item.image} className='w-full h-full'/></div>
//            <div className='w-[70%] flex justify-between'>
//             <div className='flex flex-col items-center justify-center'>
//              <p className="text-sm font-medium">{item.name}</p>
//             <p className="text-xs text-gray-600">{item.price}</p>
//            </div>
//             {/* <div className='flex justify-center items-center gap-1 max-md:flex-col'> */}
//             <button className="mt-2 text-sm px-3 py-1 bg-green-500 text-white rounded-md h-8">Add</button>
//             {/* <button className="mt-2 text-sm px-3 py-1 bg-red-500 text-white rounded-full"><Minus size={18}/></button> */}
//             {/* </div> */}
//            </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

// export default PopularItems


import { useCartStore } from '../../Store/Store.js';
import { Popularitems as items } from '../../constant';

const PopularItems = () => {
  const { cart, addToCart, removeFromCart } = useCartStore();

  const isInCart = (id) => cart.some(item => item.id === id);

  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold mb-4">Popular Items</h2>
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
        {items.map((item) => (
          <div key={item.id} className="flex flex-col items-center bg-white rounded-lg shadow-md p-2 text-center">
            <div className="mx-auto h-[80px] w-[80px] bg-gray-200 mb-2">
              <img src={item.image} className="w-full h-full" />
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
        ))}
      </div>
    </div>
  );
};

export default PopularItems;
