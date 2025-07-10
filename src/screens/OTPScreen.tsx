
import React from 'react';
import ScreenPlaceholder from '../components/ScreenPlaceholder';
import AppLayout from '../components/AppLayout';

const OTPScreen: React.FC = () => {
  return (
    <AppLayout showCart={false}>
      <ScreenPlaceholder 
        title="OTP Verification" 
        subtitle="Enter the verification code sent to your mobile number"
        icon="🔐"
      />
    </AppLayout>
  );
};

export default OTPScreen;
