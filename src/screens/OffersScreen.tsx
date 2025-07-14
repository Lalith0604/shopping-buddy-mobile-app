
import React, { useState } from 'react';
import { layouts, typography } from '../theme/styles';
import { cn } from '../lib/utils';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { useToast } from '../hooks/use-toast';
import { Tag, Clock, Star, Gift, Percent } from 'lucide-react';
import AppLayout from '../components/AppLayout';

interface Offer {
  id: string;
  title: string;
  description: string;
  discount: string;
  category: string;
  validUntil: string;
  isPopular?: boolean;
  type: 'percentage' | 'bogo' | 'flat' | 'combo';
}

const OffersScreen: React.FC = () => {
  const { toast } = useToast();
  
  const [offers] = useState<Offer[]>([
    {
      id: '1',
      title: 'Buy 1 Get 1 Free on Lays',
      description: 'Valid on all Lays chips variants. Limited time offer!',
      discount: 'BOGO',
      category: 'Snacks',
      validUntil: 'Today Only',
      isPopular: true,
      type: 'bogo'
    },
    {
      id: '2',
      title: '20% Off on Dairy Products',
      description: 'Get 20% discount on milk, cheese, and other dairy items',
      discount: '20%',
      category: 'Dairy',
      validUntil: '3 days left',
      type: 'percentage'
    },
    {
      id: '3',
      title: 'Flat ₹50 Off on Groceries',
      description: 'Minimum purchase of ₹300 required. Save big on essentials!',
      discount: '₹50',
      category: 'Groceries',
      validUntil: '1 week left',
      type: 'flat'
    },
    {
      id: '4',
      title: 'Electronics Mega Sale',
      description: 'Up to 30% off on all electronics items including TVs, phones',
      discount: '30%',
      category: 'Electronics',
      validUntil: '5 days left',
      isPopular: true,
      type: 'percentage'
    },
    {
      id: '5',
      title: 'Fresh Fruits Combo Deal',
      description: 'Buy any 3 fruits and get 1 free. Mix and match available!',
      discount: 'Buy 3 Get 1',
      category: 'Fruits',
      validUntil: '2 days left',
      type: 'combo'
    },
    {
      id: '6',
      title: '15% Off on Personal Care',
      description: 'Shampoo, soap, toothpaste and more at discounted prices',
      discount: '15%',
      category: 'Personal Care',
      validUntil: '1 week left',
      type: 'percentage'
    }
  ]);

  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Snacks', 'Dairy', 'Groceries', 'Electronics', 'Fruits', 'Personal Care'];

  const filteredOffers = selectedCategory === 'All' 
    ? offers 
    : offers.filter(offer => offer.category === selectedCategory);

  const applyOffer = (offer: Offer) => {
    toast({
      title: "Offer Applied!",
      description: `${offer.title} will be applied at checkout`,
    });
  };

  const getOfferIcon = (type: string) => {
    switch (type) {
      case 'percentage':
        return <Percent className="w-4 h-4" />;
      case 'bogo':
        return <Gift className="w-4 h-4" />;
      case 'flat':
        return <Tag className="w-4 h-4" />;
      case 'combo':
        return <Star className="w-4 h-4" />;
      default:
        return <Tag className="w-4 h-4" />;
    }
  };

  const getDiscountColor = (type: string) => {
    switch (type) {
      case 'percentage':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'bogo':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'flat':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'combo':
        return 'bg-orange-100 text-orange-800 border-orange-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <AppLayout>
      <div className={cn(layouts.screenContainer)}>
        {/* Header */}
        <div className="p-4 border-b border-border bg-background">
          <h1 className={cn(typography.h3, "text-center")}>Deals & Offers</h1>
          <p className={cn(typography.muted, "text-center mt-1")}>
            Save more with our exclusive deals
          </p>
        </div>

        {/* Category Filter */}
        <div className="p-4 border-b border-border bg-muted/30">
          <div className="flex gap-2 overflow-x-auto">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="whitespace-nowrap"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Offers List */}
        <div className="flex-1 overflow-auto">
          <div className="p-4 space-y-4">
            {filteredOffers.map((offer) => (
              <div 
                key={offer.id} 
                className={cn(
                  "bg-card rounded-lg border p-4 shadow-sm relative",
                  offer.isPopular && "border-primary bg-primary/5"
                )}
              >
                {offer.isPopular && (
                  <div className="absolute -top-2 left-4">
                    <Badge variant="default" className="bg-primary text-primary-foreground">
                      <Star className="w-3 h-3 mr-1" />
                      Popular
                    </Badge>
                  </div>
                )}

                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      {getOfferIcon(offer.type)}
                      <h3 className={cn(typography.bodyLarge, "font-semibold")}>
                        {offer.title}
                      </h3>
                    </div>
                    <p className={cn(typography.body, "text-muted-foreground mb-2")}>
                      {offer.description}
                    </p>
                    
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="secondary" className={getDiscountColor(offer.type)}>
                        {offer.discount} OFF
                      </Badge>
                      <Badge variant="outline">{offer.category}</Badge>
                    </div>

                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Clock className="w-3 h-3" />
                      <span>Valid: {offer.validUntil}</span>
                    </div>
                  </div>
                </div>

                <Button 
                  className="w-full" 
                  variant={offer.isPopular ? "default" : "outline"}
                  onClick={() => applyOffer(offer)}
                >
                  Apply Offer
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Info */}
        <div className="border-t border-border bg-muted/30 p-4">
          <div className="text-center">
            <p className={cn(typography.bodySmall, "text-muted-foreground")}>
              💡 Offers will be automatically applied at checkout based on your cart items
            </p>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default OffersScreen;
