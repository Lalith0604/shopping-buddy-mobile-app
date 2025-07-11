
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AppLayout from '../components/AppLayout';
import { Button } from '../components/base/Button';
import { Input } from '../components/ui/input';
import { H2, Body, BodySmall } from '../components/base/Typography';
import { layouts, animations } from '../theme/styles';
import { cn } from '../lib/utils';
import { toast } from '@/components/ui/sonner';

const WelcomeScreen: React.FC = () => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [showError, setShowError] = useState(false);
  const navigate = useNavigate();

  const validateMobileNumber = (value: string) => {
    // Remove any non-digit characters
    const cleanValue = value.replace(/\D/g, '');
    
    // Limit to 10 digits
    if (cleanValue.length <= 10) {
      setMobileNumber(cleanValue);
      
      // Check if valid (exactly 10 digits)
      const valid = cleanValue.length === 10;
      setIsValid(valid);
      
      // Show error if user has started typing but number is incomplete
      setShowError(cleanValue.length > 0 && cleanValue.length < 10);
    }
  };

  const handleContinue = () => {
    if (isValid) {
      console.log('Proceed to OTP for mobile:', mobileNumber);
      toast({
        title: "OTP Sent",
        description: `Verification code sent to +91 ${mobileNumber}`,
      });
      navigate('/otp');
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    validateMobileNumber(e.target.value);
  };

  return (
    <AppLayout showCart={false}>
      <div className={cn(layouts.screenContainer, layouts.centeredColumn, 'px-6')}>
        <div className={cn("text-center space-y-6 max-w-md mx-auto", animations.fadeIn)}>
          {/* App Icon */}
          <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg">
            <span className="text-white text-3xl font-bold">🛒</span>
          </div>
          
          {/* Title */}
          <H2 className="text-foreground mb-2">
            Welcome to SmartCart
          </H2>
          
          {/* Subtitle */}
          <Body className="text-muted-foreground max-w-sm mx-auto mb-8">
            Enter your mobile number to get started with smart shopping
          </Body>
          
          {/* Mobile Input Section */}
          <div className="space-y-4">
            <div className="relative">
              <div className="flex">
                {/* Country Code Prefix */}
                <div className="flex items-center px-3 py-2 border border-r-0 border-input bg-muted rounded-l-md">
                  <span className="text-sm font-medium text-foreground">+91</span>
                </div>
                
                {/* Mobile Number Input */}
                <Input
                  type="tel"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  placeholder="Enter 10-digit mobile number"
                  value={mobileNumber}
                  onChange={handleInputChange}
                  className={cn(
                    "rounded-l-none flex-1",
                    showError && "border-destructive focus-visible:ring-destructive",
                    isValid && "border-success focus-visible:ring-success"
                  )}
                  maxLength={10}
                />
              </div>
              
              {/* Error Message */}
              {showError && (
                <BodySmall className="text-destructive mt-2">
                  Please enter a valid 10-digit mobile number
                </BodySmall>
              )}
            </div>
            
            {/* Continue Button */}
            <Button
              onClick={handleContinue}
              disabled={!isValid}
              className="w-full"
              size="lg"
            >
              Continue
            </Button>
          </div>
          
          {/* Footer Text */}
          <div className="mt-8 pt-6 border-t border-border">
            <BodySmall className="text-muted-foreground text-center leading-relaxed">
              By continuing, you accept our{' '}
              <span className="text-primary hover:underline cursor-pointer">
                Terms & Conditions
              </span>
              {' '}and{' '}
              <span className="text-primary hover:underline cursor-pointer">
                Privacy Policy
              </span>
            </BodySmall>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default WelcomeScreen;
