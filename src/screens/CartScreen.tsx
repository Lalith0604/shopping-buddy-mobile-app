
import React from 'react';
import ScreenPlaceholder from '../components/ScreenPlaceholder';
import AppLayout from '../components/AppLayout';

const CartScreen: React.FC = () => {
  return (
    <AppLayout>
      <ScreenPlaceholder 
        title="Cart View" 
        subtitle="View and manage items in your shopping cart"
        icon="🛒"
      />
    </AppLayout>
  );
};

export default CartScreen;
