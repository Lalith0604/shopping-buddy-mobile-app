
import React from 'react';
import ScreenPlaceholder from '../components/ScreenPlaceholder';
import AppLayout from '../components/AppLayout';

const HomeScreen: React.FC = () => {
  return (
    <AppLayout>
      <ScreenPlaceholder 
        title="Home Screen" 
        subtitle="Browse products and manage your smart shopping experience"
        icon="🏠"
      />
    </AppLayout>
  );
};

export default HomeScreen;
