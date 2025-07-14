
import React, { useState } from 'react';
import { layouts, typography } from '../theme/styles';
import { cn } from '../lib/utils';
import { Button } from '../components/ui/button';
import { useToast } from '../hooks/use-toast';
import { Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import AppLayout from '../components/AppLayout';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image?: string;
  category: string;
}

const CartScreen: React.FC = () => {
  const { toast } = useToast();
  
  const [cartItems, setCartItems] = useState<CartItem[]>([
    { id: '1', name: 'Tata Salt', price: 25, quantity: 2, category: 'Groceries' },
    { id: '2', name: 'Lays Chips', price: 20, quantity: 1, category: 'Snacks' },
    { id: '3', name: 'Milk (1L)', price: 60, quantity: 1, category: 'Dairy' },
    { id: '4', name: 'Bread', price: 30, quantity: 1, category: 'Bakery' },
  ]);

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    
    setCartItems(prev => prev.map(item =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
    
    toast({
      title: "Quantity Updated",
      description: "Item quantity has been updated",
    });
  };

  const removeItem = (id: string, itemName: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
    
    toast({
      title: "Item Removed",
      description: `${itemName} has been removed from your cart`,
      variant: "destructive"
    });
  };

  const calculateTotals = () => {
    const totalMRP = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const discount = Math.floor(totalMRP * 0.1); // 10% discount
    const finalAmount = totalMRP - discount;
    
    return { totalMRP, discount, finalAmount };
  };

  const { totalMRP, discount, finalAmount } = calculateTotals();

  const handleCheckout = () => {
    toast({
      title: "Proceeding to Checkout",
      description: "Redirecting to checkout summary...",
    });
  };

  if (cartItems.length === 0) {
    return (
      <AppLayout>
        <div className={cn(layouts.screenContainer)}>
          <div className="flex-1 flex flex-col items-center justify-center text-center p-8">
            <ShoppingBag className="w-24 h-24 text-muted-foreground mb-4" />
            <h2 className={cn(typography.h3, "mb-2")}>Your cart is empty</h2>
            <p className={cn(typography.muted, "mb-6")}>
              Add some items to your cart to get started
            </p>
            <Button>Continue Shopping</Button>
          </div>
        </div>
      </AppLayout>
    );
  }

  return (
    <AppLayout>
      <div className={cn(layouts.screenContainer)}>
        {/* Header */}
        <div className="p-4 border-b border-border bg-background">
          <h1 className={cn(typography.h3, "text-center")}>Your Cart</h1>
          <p className={cn(typography.muted, "text-center mt-1")}>
            {cartItems.length} item{cartItems.length !== 1 ? 's' : ''} in your cart
          </p>
        </div>

        {/* Cart Items List */}
        <div className="flex-1 overflow-auto">
          <div className="p-4 space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="bg-card rounded-lg border border-border p-4 shadow-sm">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className={cn(typography.body, "font-medium")}>{item.name}</h3>
                        <p className={cn(typography.bodySmall, "text-muted-foreground")}>
                          {item.category}
                        </p>
                        <p className={cn(typography.bodySmall, "text-muted-foreground")}>
                          ₹{item.price} per unit
                        </p>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removeItem(item.id, item.name)}
                        className="text-destructive hover:bg-destructive/10"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          disabled={item.quantity <= 1}
                          className="w-8 h-8 p-0"
                        >
                          <Minus className="w-3 h-3" />
                        </Button>
                        <span className={cn(typography.body, "font-medium w-8 text-center")}>
                          {item.quantity}
                        </span>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 p-0"
                        >
                          <Plus className="w-3 h-3" />
                        </Button>
                      </div>
                      
                      <div className="text-right">
                        <p className={cn(typography.bodyLarge, "font-semibold")}>
                          ₹{item.price * item.quantity}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Cart Summary */}
        <div className="border-t border-border bg-muted/30 p-4">
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className={typography.body}>Total MRP</span>
              <span className={typography.body}>₹{totalMRP}</span>
            </div>
            <div className="flex justify-between text-green-600">
              <span className={typography.body}>Discount</span>
              <span className={typography.body}>-₹{discount}</span>
            </div>
            <div className="border-t border-border pt-2">
              <div className="flex justify-between">
                <span className={cn(typography.bodyLarge, "font-semibold")}>Final Amount</span>
                <span className={cn(typography.bodyLarge, "font-semibold")}>₹{finalAmount}</span>
              </div>
            </div>
          </div>
          
          <Button 
            className="w-full mt-4" 
            size="lg"
            onClick={handleCheckout}
          >
            Proceed to Checkout - ₹{finalAmount}
          </Button>
        </div>
      </div>
    </AppLayout>
  );
};

export default CartScreen;
