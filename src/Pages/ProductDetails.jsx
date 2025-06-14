import React from 'react';
import { useParams } from 'react-router-dom';
import { Popularitems } from '../constant';
import { useCartStore } from '../Store/Store';

const ProductDetail = () => {
  const { id } = useParams();
  const product = Popularitems.find(item => item.id === parseInt(id));

  const { cart, addToCart, removeFromCart } = useCartStore();
  const isInCart = cart.some(item => item.id === product.id);

  if (!product) return <div className="p-4">Product not found.</div>;

  return (
      <main className=" flex  flex-col p-8 items-center  w-[80%] h-[80%] mx-auto bg-white rounded-lg shadow">
        <h1 className="text-2xl font-bold mb-4">Product Details</h1>
        <div className=" flex items-center gap-20 max-md:flex-col max-md:gap-4 w-[100%] h-[100%] mx-auto bg-white rounded-lg">
      <div className='border max-md:border-0 mx-auto w-[40%] h-[80%] flex items-center'><img src={product.image} alt={product.name} className=" mx-auto w-[100%] h-[60%] rounded-md mb-4" /></div>
      <div className='flex flex-col '>
      <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
      <p className="text-sm text-gray-500 mb-2">{product.price}</p>
      <p className="text-gray-700 mb-4">{product.description}</p>
      <button
        onClick={() =>
          isInCart ? removeFromCart(product.id) : addToCart(product)
        }
        className={`px-4 py-2 text-white rounded ${
          isInCart ? 'bg-red-500' : 'bg-green-500'
        }`}
      >
        {isInCart ? 'Remove from Cart' : 'Add to Cart'}
      </button></div>
    </div>
    </main>
  );
};

export default ProductDetail;
