
import React from 'react';
import ScreenPlaceholder from '../components/ScreenPlaceholder';
import AppLayout from '../components/AppLayout';

const OffersScreen: React.FC = () => {
  return (
    <AppLayout>
      <ScreenPlaceholder 
        title="Offers / Deals" 
        subtitle="Discover amazing deals and special offers"
        icon="🏷️"
      />
    </AppLayout>
  );
};

export default OffersScreen;
