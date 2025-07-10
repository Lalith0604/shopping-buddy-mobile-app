
import React from 'react';
import ScreenPlaceholder from '../components/ScreenPlaceholder';
import AppLayout from '../components/AppLayout';

const CheckoutScreen: React.FC = () => {
  return (
    <AppLayout>
      <ScreenPlaceholder 
        title="Billing / Checkout" 
        subtitle="Review your order and complete the purchase"
        icon="💳"
      />
    </AppLayout>
  );
};

export default CheckoutScreen;
