
import React from 'react';
import ScreenPlaceholder from '../components/ScreenPlaceholder';
import AppLayout from '../components/AppLayout';

const ProfileScreen: React.FC = () => {
  return (
    <AppLayout>
      <ScreenPlaceholder 
        title="Profile / Settings" 
        subtitle="Manage your account and app preferences"
        icon="👤"
      />
    </AppLayout>
  );
};

export default ProfileScreen;
