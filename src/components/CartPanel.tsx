
import React from 'react';
import { layouts, typography } from '../theme/styles';
import { cn } from '../lib/utils';
import { ShoppingCart, Package, Plus, Minus } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './base/Card';

const CartPanel: React.FC = () => {
  // Placeholder cart items
  const cartItems = [
    { id: 1, name: 'Organic Apples', price: 3.99, quantity: 2 },
    { id: 2, name: 'Whole Wheat Bread', price: 2.49, quantity: 1 },
    { id: 3, name: 'Greek Yogurt', price: 4.99, quantity: 3 },
  ];

  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className="h-full bg-background border-l border-border flex flex-col">
      {/* Header */}
      <div className="p-4 border-b border-border">
        <div className="flex items-center space-x-2">
          <ShoppingCart className="w-6 h-6 text-primary" />
          <h2 className={cn(typography.h4, 'text-foreground')}>Your Cart</h2>
        </div>
      </div>

      {/* Cart Items */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {cartItems.length === 0 ? (
          <div className={cn(layouts.centeredColumn, 'h-full')}>
            <Package className="w-12 h-12 text-muted-foreground mb-4" />
            <p className={cn(typography.muted)}>Your cart is empty</p>
          </div>
        ) : (
          cartItems.map((item) => (
            <Card key={item.id} className="p-3">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h4 className={cn(typography.bodySmall, 'font-medium')}>
                    {item.name}
                  </h4>
                  <p className={cn(typography.muted, 'text-xs')}>
                    ${item.price.toFixed(2)}
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <button className="w-6 h-6 rounded-full bg-muted flex items-center justify-center">
                    <Minus className="w-3 h-3" />
                  </button>
                  <span className={cn(typography.bodySmall, 'w-8 text-center')}>
                    {item.quantity}
                  </span>
                  <button className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
                    <Plus className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </Card>
          ))
        )}
      </div>

      {/* Footer */}
      {cartItems.length > 0 && (
        <div className="p-4 border-t border-border">
          <div className="flex justify-between items-center mb-4">
            <span className={cn(typography.h6)}>Total:</span>
            <span className={cn(typography.h6, 'text-primary')}>
              ${total.toFixed(2)}
            </span>
          </div>
          <button className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors">
            Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default CartPanel;
