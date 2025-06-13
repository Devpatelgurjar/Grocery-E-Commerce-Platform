import { image } from 'framer-motion/client';
import React from 'react'

const Categories = () => {
  const categories = [{name:"Snacks", image:"../assets/CategorieImages/burger.png"},
     {name:"Breakfast",image:"../assets/CategorieImages/eggs.png"},
     {name:"Drinks",image:"../assets/CategorieImages/drinks.png"}, 
     {name:"Coffee",image:"../assets/CategorieImages/coffee.png"}, 
     {name:"Canned",image:"../assets/CategorieImages/canned.png"}, 
     {name:"Fruits",image:"../assets/CategorieImages/fruits.png"}, 
     {name:"Sauce",image:"../assets/CategorieImages/sauce.png"}];
  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold mb-4">Categories</h2>
      <div className="grid grid-cols-4 sm:grid-cols-7 gap-4">
        {categories.map((cat, index) => (
          <div key={index} className="bg-white rounded-lg shadow p-2 text-center">
            <div className="h-12 w-12 mx-auto bg-gray-200 rounded-full mb-2"><img src={cat.image}/></div>
            <p className="text-sm font-medium">{cat.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Categories
