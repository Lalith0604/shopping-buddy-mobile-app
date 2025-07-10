
import React from 'react';
import ScreenPlaceholder from '../components/ScreenPlaceholder';
import AppLayout from '../components/AppLayout';

const ItemDetailScreen: React.FC = () => {
  return (
    <AppLayout>
      <ScreenPlaceholder 
        title="Item Detail Screen" 
        subtitle="View detailed product information and add to cart"
        icon="📦"
      />
    </AppLayout>
  );
};

export default ItemDetailScreen;
