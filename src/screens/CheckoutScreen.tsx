
import React, { useState } from 'react';
import { layouts, typography, buttons } from '../theme/styles';
import { cn } from '../lib/utils';
import { ChevronLeft, ShoppingBag, Tag, Check } from 'lucide-react';
import { Card, CardContent } from '../components/base/Card';
import { Button } from '../components/base/Button';
import AppLayout from '../components/AppLayout';
import { useToast } from '../hooks/use-toast';
import { useNavigate } from 'react-router-dom';

interface CheckoutItem {
  id: number;
  name: string;
  quantity: number;
  mrp: number;
  discount: number;
}

const CheckoutScreen: React.FC = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);

  // Dummy checkout data
  const checkoutItems: CheckoutItem[] = [
    {
      id: 1,
      name: 'Tata Salt',
      quantity: 2,
      mrp: 25.00,
      discount: 3.00,
    },
    {
      id: 2,
      name: 'Basmati Rice 1kg',
      quantity: 1,
      mrp: 180.00,
      discount: 20.00,
    },
    {
      id: 3,
      name: 'Amul Fresh Milk',
      quantity: 3,
      mrp: 28.00,
      discount: 5.00,
    },
  ];

  // Calculate totals
  const totalMRP = checkoutItems.reduce((sum, item) => sum + (item.mrp * item.quantity), 0);
  const totalDiscount = checkoutItems.reduce((sum, item) => sum + (item.discount * item.quantity), 0);
  const amountPayable = totalMRP - totalDiscount;

  const handleProceedToPay = async () => {
    setIsProcessing(true);
    
    // Simulate API call delay
    setTimeout(() => {
      setIsProcessing(false);
      toast({
        title: "Order placed successfully!",
        description: "Your order has been confirmed and will be processed shortly.",
      });
      
      // Navigate to Order Summary screen
      navigate('/order-summary');
    }, 2000);
  };

  const handleGoBack = () => {
    navigate('/home');
  };

  return (
    <AppLayout showCart={false}>
      <div className={cn(layouts.screenContainer, 'p-4')}>
        {/* Header */}
        <div className="flex items-center space-x-4 mb-6">
          <button
            onClick={handleGoBack}
            className="p-2 rounded-lg hover:bg-accent transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-foreground" />
          </button>
          <div>
            <h1 className={cn(typography.h2, 'text-foreground')}>
              Checkout Summary
            </h1>
            <p className={cn(typography.muted, 'text-sm')}>
              Review your order before proceeding
            </p>
          </div>
        </div>

        <div className="max-w-2xl mx-auto space-y-6">
          {/* Cart Items Section */}
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-2 mb-4">
                <ShoppingBag className="w-5 h-5 text-primary" />
                <h2 className={cn(typography.h4, 'text-foreground')}>
                  Items in Cart ({checkoutItems.length})
                </h2>
              </div>
              
              <div className="space-y-4">
                {checkoutItems.map((item) => {
                  const itemTotal = (item.mrp * item.quantity) - (item.discount * item.quantity);
                  
                  return (
                    <div key={item.id} className="border-b border-border pb-4 last:border-b-0 last:pb-0">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <h3 className={cn(typography.bodyLarge, 'font-medium text-foreground')}>
                            {item.name}
                          </h3>
                          <p className={cn(typography.bodySmall, 'text-muted-foreground')}>
                            Quantity: {item.quantity}
                          </p>
                        </div>
                        
                        <div className="text-right space-y-1">
                          <div className="flex items-center space-x-2">
                            <span className={cn(typography.bodySmall, 'text-muted-foreground line-through')}>
                              ₹{(item.mrp * item.quantity).toFixed(2)}
                            </span>
                            <span className={cn(typography.bodyLarge, 'font-semibold text-foreground')}>
                              ₹{itemTotal.toFixed(2)}
                            </span>
                          </div>
                          {item.discount > 0 && (
                            <div className="flex items-center space-x-1">
                              <Tag className="w-3 h-3 text-success" />
                              <span className={cn(typography.caption, 'text-success')}>
                                -₹{(item.discount * item.quantity).toFixed(2)}
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {/* Bill Summary Section */}
          <Card>
            <CardContent className="p-6 bg-accent/5">
              <h2 className={cn(typography.h4, 'text-foreground mb-4')}>
                Bill Summary
              </h2>
              
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className={cn(typography.body, 'text-muted-foreground')}>
                    Total MRP
                  </span>
                  <span className={cn(typography.body, 'text-foreground')}>
                    ₹{totalMRP.toFixed(2)}
                  </span>
                </div>
                
                <div className="flex justify-between">
                  <span className={cn(typography.body, 'text-success flex items-center space-x-1')}>
                    <Tag className="w-4 h-4" />
                    <span>Total Discount</span>
                  </span>
                  <span className={cn(typography.body, 'text-success')}>
                    -₹{totalDiscount.toFixed(2)}
                  </span>
                </div>
                
                <div className="border-t border-border pt-3">
                  <div className="flex justify-between items-center">
                    <span className={cn(typography.h5, 'text-foreground')}>
                      Amount Payable
                    </span>
                    <span className={cn(typography.h4, 'text-primary font-bold')}>
                      ₹{amountPayable.toFixed(2)}
                    </span>
                  </div>
                </div>
                
                <div className="bg-success/10 rounded-lg p-3 mt-4">
                  <div className="flex items-center justify-center space-x-2">
                    <Check className="w-5 h-5 text-success" />
                    <span className={cn(typography.bodyLarge, 'text-success font-medium')}>
                      You Saved ₹{totalDiscount.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Proceed Button */}
          <div className="pt-4">
            <Button
              onClick={handleProceedToPay}
              disabled={isProcessing}
              className="w-full h-12 text-lg font-semibold"
              size="lg"
            >
              {isProcessing ? (
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                  <span>Processing...</span>
                </div>
              ) : (
                'Confirm & Pay'
              )}
            </Button>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default CheckoutScreen;
