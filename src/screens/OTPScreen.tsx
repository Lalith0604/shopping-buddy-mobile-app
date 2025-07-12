
import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AppLayout from '../components/AppLayout';
import { Button } from '../components/base/Button';
import { InputOTP, InputOTPGroup, InputOTPSlot } from '../components/ui/input-otp';
import { H2, Body, BodySmall } from '../components/base/Typography';
import { layouts, animations } from '../theme/styles';
import { cn } from '../lib/utils';
import { toast } from '@/components/ui/sonner';
import { ArrowLeft, RotateCcw } from 'lucide-react';

const OTPScreen: React.FC = () => {
  const [otp, setOtp] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  
  const DUMMY_OTP = '1234';
  const isComplete = otp.length === 4;

  const handleOtpChange = (value: string) => {
    setOtp(value);
    if (error) setError(''); // Clear error when user starts typing
  };

  const handleVerify = async () => {
    if (!isComplete) return;
    
    setIsLoading(true);
    setError('');
    
    // Simulate API request delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    if (otp === DUMMY_OTP) {
      toast('Verification successful! Welcome to SmartCart');
      navigate('/home');
    } else {
      setError('Invalid OTP. Please try again.');
      setOtp(''); // Clear input on error
    }
    
    setIsLoading(false);
  };

  const handleResendOtp = () => {
    toast('OTP resent to your mobile number');
    setOtp('');
    setError('');
  };

  const handleBackToMobile = () => {
    navigate('/welcome');
  };

  return (
    <AppLayout showCart={false}>
      <div className={cn(layouts.screenContainer, layouts.centeredColumn, 'px-6')}>
        <div className={cn("text-center space-y-6 max-w-md mx-auto", animations.fadeIn)}>
          {/* Back Button */}
          <div className="flex justify-start w-full mb-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={handleBackToMobile}
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </Button>
          </div>

          {/* App Icon */}
          <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg">
            <span className="text-white text-3xl font-bold">🔐</span>
          </div>
          
          {/* Title */}
          <H2 className="text-foreground mb-2">
            Verify OTP
          </H2>
          
          {/* Subtitle */}
          <Body className="text-muted-foreground max-w-sm mx-auto mb-8">
            Enter the 4-digit code sent to your mobile number
          </Body>
          
          {/* OTP Input Section */}
          <div className="space-y-6">
            <div className="flex flex-col items-center space-y-4">
              <InputOTP
                maxLength={4}
                value={otp}
                onChange={handleOtpChange}
                disabled={isLoading}
              >
                <InputOTPGroup>
                  <InputOTPSlot index={0} />
                  <InputOTPSlot index={1} />
                  <InputOTPSlot index={2} />
                  <InputOTPSlot index={3} />
                </InputOTPGroup>
              </InputOTP>
              
              {/* Error Message */}
              {error && (
                <BodySmall className="text-destructive text-center">
                  {error}
                </BodySmall>
              )}
            </div>
            
            {/* Verify Button */}
            <Button
              onClick={handleVerify}
              disabled={!isComplete || isLoading}
              className="w-full"
              size="lg"
            >
              {isLoading ? 'Verifying...' : 'Verify'}
            </Button>
          </div>
          
          {/* Additional Actions */}
          <div className="space-y-4 pt-6">
            <Button
              variant="ghost"
              onClick={handleResendOtp}
              disabled={isLoading}
              className="flex items-center gap-2"
            >
              <RotateCcw className="w-4 h-4" />
              Resend OTP
            </Button>
          </div>
          
          {/* Footer Text */}
          <div className="mt-8 pt-6 border-t border-border">
            <BodySmall className="text-muted-foreground text-center">
              Didn't receive the code? Check your messages or try resending.
            </BodySmall>
          </div>
          
          {/* Debug Info (for development) */}
          <div className="mt-4 p-3 bg-muted/50 rounded-lg">
            <BodySmall className="text-muted-foreground text-center">
              <strong>Demo:</strong> Use code <span className="font-mono bg-background px-1 rounded">1234</span> to verify
            </BodySmall>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default OTPScreen;
