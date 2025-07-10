
import React from 'react';
import { ChevronRight } from 'lucide-react';
import { cn } from '../lib/utils';
import { typography } from '../theme/styles';
import { Card } from './ui/card';

const TopOffers: React.FC = () => {
  const offers = [
    {
      id: 1,
      name: "Fresh Apples",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=150&h=150&fit=crop",
      discount: "30% OFF",
      price: "₹120/kg"
    },
    {
      id: 2,
      name: "Organic Bananas",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=150&h=150&fit=crop",
      discount: "25% OFF",
      price: "₹80/kg"
    },
    {
      id: 3,
      name: "Greek Yogurt",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=150&h=150&fit=crop",
      discount: "20% OFF",
      price: "₹150/pc"
    },
    {
      id: 4,
      name: "Whole Wheat Bread",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=150&h=150&fit=crop",
      discount: "15% OFF",
      price: "₹45/pc"
    },
    {
      id: 5,
      name: "Green Tea",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=150&h=150&fit=crop",
      discount: "40% OFF",
      price: "₹200/box"
    }
  ];

  return (
    <div className="px-4 py-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className={cn(typography.h5)}>Top Offers For You</h2>
        <div className="flex items-center space-x-1 text-primary cursor-pointer hover:text-primary/80">
          <span className={cn(typography.bodySmall, 'font-medium')}>See all</span>
          <ChevronRight className="w-4 h-4" />
        </div>
      </div>
      
      <div className="flex space-x-3 overflow-x-auto pb-2">
        {offers.map((offer) => (
          <Card key={offer.id} className="flex-shrink-0 w-32 p-3 cursor-pointer hover:shadow-lg transition-shadow">
            <div className="relative">
              <img 
                src={offer.image} 
                alt={offer.name}
                className="w-full h-20 object-cover rounded-md mb-2"
              />
              <div className="absolute top-1 right-1 bg-destructive text-destructive-foreground px-1 py-0.5 rounded text-xs font-medium">
                {offer.discount}
              </div>
            </div>
            <h4 className={cn(typography.bodySmall, 'font-medium line-clamp-2 mb-1')}>
              {offer.name}
            </h4>
            <p className={cn(typography.muted, 'text-xs')}>
              {offer.price}
            </p>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TopOffers;
