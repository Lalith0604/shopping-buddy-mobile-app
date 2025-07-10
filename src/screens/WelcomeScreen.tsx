
import React from 'react';
import ScreenPlaceholder from '../components/ScreenPlaceholder';
import AppLayout from '../components/AppLayout';

const WelcomeScreen: React.FC = () => {
  return (
    <AppLayout showCart={false}>
      <ScreenPlaceholder 
        title="Welcome Screen" 
        subtitle="Enter Mobile Number to get started with smart shopping"
        icon="📱"
      />
    </AppLayout>
  );
};

export default WelcomeScreen;
