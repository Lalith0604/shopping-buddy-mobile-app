
import React from 'react';
import ScreenPlaceholder from '../components/ScreenPlaceholder';
import AppLayout from '../components/AppLayout';

const ScanScreen: React.FC = () => {
  return (
    <AppLayout>
      <ScreenPlaceholder 
        title="Add Item / Scan" 
        subtitle="Scan product barcodes to add items to your cart"
        icon="📷"
      />
    </AppLayout>
  );
};

export default ScanScreen;
