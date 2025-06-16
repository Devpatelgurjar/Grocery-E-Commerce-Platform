import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useCartStore } from '../Store/Store';
import { SnacksItems } from '../constant';
import { CoffeeItems } from '../constant';
import { DrinksItems } from '../constant';
import { BreakfastItems } from '../constant';
import { CannedItems } from '../constant';
import { FruitsItems } from '../constant';
import { SaucesItems } from '../constant';
import CategoryCard from '../components/Card.jsx/CategoryCard';

const categoryMap = {
  snacks: SnacksItems,
  coffee: CoffeeItems,
  drinks: DrinksItems,
  breakfast: BreakfastItems,
  canned: CannedItems,
  fruits: FruitsItems,
  sauce: SaucesItems,
};

const CategoryPage = () => {
  const { name } = useParams(); 
  const items = categoryMap[name?.toLowerCase()] || [];

  const { cart} = useCartStore();
  
  if (!items.length) return <div className="p-4">Category not found.</div>;

  return (
    <div className="p-4 space-y-4">
      <h2 className="text-2xl font-semibold capitalize mb-4">{name} Items</h2>
      {items.map((item) => (
        <CategoryCard item={item} name={name}/>
      ))}
    </div>
  );
};

export default CategoryPage;
