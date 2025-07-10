
import React from 'react';
import ScreenPlaceholder from '../components/ScreenPlaceholder';
import AppLayout from '../components/AppLayout';

const OrderSummaryScreen: React.FC = () => {
  return (
    <AppLayout>
      <ScreenPlaceholder 
        title="Order Summary" 
        subtitle="View your completed order details and receipt"
        icon="📄"
      />
    </AppLayout>
  );
};

export default OrderSummaryScreen;
