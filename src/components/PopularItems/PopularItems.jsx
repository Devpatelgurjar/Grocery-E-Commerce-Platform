import { Popularitems as items } from '../../constant';
import ItemCard from '../Card.jsx/ItemCard.jsx';

const PopularItems = () => {
  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold mb-4">Popular Items</h2>
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
        {items.map((item) => (
          <ItemCard item={item} />
        ))}
      </div>
    </div>
  );
};

export default PopularItems;
