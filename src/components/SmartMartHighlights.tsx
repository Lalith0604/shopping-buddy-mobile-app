
import React from 'react';
import { Apple, Laptop, Cookie, Home, Shirt, Pill } from 'lucide-react';
import { cn } from '../lib/utils';
import { typography } from '../theme/styles';
import { Card } from './ui/card';

const SmartMartHighlights: React.FC = () => {
  const categories = [
    { id: 1, name: "Fruits & Veggies", icon: Apple, color: "text-green-600" },
    { id: 2, name: "Electronics", icon: Laptop, color: "text-blue-600" },
    { id: 3, name: "Snacks", icon: Cookie, color: "text-orange-600" },
    { id: 4, name: "Essentials", icon: Home, color: "text-purple-600" },
    { id: 5, name: "Fashion", icon: Shirt, color: "text-pink-600" },
    { id: 6, name: "Health", icon: Pill, color: "text-red-600" }
  ];

  return (
    <div className="px-4 py-4">
      <h2 className={cn(typography.h5, 'mb-4')}>In Your SmartMart</h2>
      
      <div className="grid grid-cols-2 gap-3">
        {categories.map((category) => {
          const Icon = category.icon;
          return (
            <Card key={category.id} className="p-4 cursor-pointer hover:shadow-lg transition-shadow text-center">
              <Icon className={cn("w-8 h-8 mx-auto mb-2", category.color)} />
              <h4 className={cn(typography.bodySmall, 'font-medium')}>
                {category.name}
              </h4>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default SmartMartHighlights;
