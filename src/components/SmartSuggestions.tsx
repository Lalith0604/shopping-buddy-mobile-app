
import React from 'react';
import { Plus } from 'lucide-react';
import { cn } from '../lib/utils';
import { typography, buttons } from '../theme/styles';
import { Card } from './ui/card';

const SmartSuggestions: React.FC = () => {
  const suggestions = [
    {
      id: 1,
      name: "Organic Milk",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=150&h=150&fit=crop",
      price: "₹60",
      originalPrice: "₹75"
    },
    {
      id: 2,
      name: "Whole Grain Cereal",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=150&h=150&fit=crop",
      price: "₹180",
      originalPrice: "₹220"
    },
    {
      id: 3,
      name: "Fresh Eggs",
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=150&h=150&fit=crop",
      price: "₹120",
      originalPrice: "₹140"
    }
  ];

  return (
    <div className="px-4 py-4">
      <h2 className={cn(typography.h5, 'mb-4')}>Because You Bought...</h2>
      
      <div className="flex space-x-3 overflow-x-auto pb-2">
        {suggestions.map((item) => (
          <Card key={item.id} className="flex-shrink-0 w-40 p-3 cursor-pointer hover:shadow-lg transition-shadow">
            <img 
              src={item.image} 
              alt={item.name}
              className="w-full h-24 object-cover rounded-md mb-2"
            />
            <h4 className={cn(typography.bodySmall, 'font-medium line-clamp-2 mb-2')}>
              {item.name}
            </h4>
            <div className="flex items-center space-x-2 mb-2">
              <span className={cn(typography.bodySmall, 'font-bold')}>
                {item.price}
              </span>
              <span className={cn(typography.muted, 'text-xs line-through')}>
                {item.originalPrice}
              </span>
            </div>
            <button className={cn(buttons.base, buttons.variants.primary, buttons.sizes.sm, 'w-full')}>
              <Plus className="w-3 h-3 mr-1" />
              Add to Cart
            </button>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default SmartSuggestions;
