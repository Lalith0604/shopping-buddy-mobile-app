
import React, { useEffect, useRef, useState } from 'react';
import AppLayout from '../components/AppLayout';
import { cn } from '../lib/utils';
import { typography } from '../theme/styles';
import { Camera, FlashlightIcon as Flash, FlashlightOff } from 'lucide-react';
import { Button } from '../components/base/Button';
import { useToast } from '../hooks/use-toast';

const ScanScreen: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [isFlashOn, setIsFlashOn] = useState(false);
  const [isScanning, setIsScanning] = useState(false);
  const [detectedItem, setDetectedItem] = useState<any>(null);
  const [showDetection, setShowDetection] = useState(false);
  const { toast } = useToast();

  // Dummy item data for simulation
  const dummyItem = {
    name: "Tata Salt",
    mrp: "₹32.00",
    image: "/placeholder.svg"
  };

  useEffect(() => {
    startCamera();
    return () => {
      stopCamera();
    };
  }, []);

  const startCamera = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: 'environment', // Use back camera
          width: { ideal: 1280 },
          height: { ideal: 720 }
        }
      });
      
      setStream(mediaStream);
      setHasPermission(true);
      
      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream;
      }

      // Start simulated scanning after camera is ready
      setTimeout(() => {
        setIsScanning(true);
        simulateDetection();
      }, 1000);

    } catch (error) {
      console.error('Camera access error:', error);
      setHasPermission(false);
    }
  };

  const stopCamera = () => {
    if (stream) {
      stream.getTracks().forEach(track => track.stop());
      setStream(null);
    }
  };

  const simulateDetection = () => {
    setTimeout(() => {
      setDetectedItem(dummyItem);
      setShowDetection(true);
      setIsScanning(false);
    }, 2500);
  };

  const toggleFlash = async () => {
    if (stream) {
      const track = stream.getVideoTracks()[0];
      const capabilities = track.getCapabilities();
      
      if (capabilities.torch) {
        try {
          await track.applyConstraints({
            advanced: [{ torch: !isFlashOn }]
          });
          setIsFlashOn(!isFlashOn);
        } catch (error) {
          console.error('Flash toggle error:', error);
        }
      }
    }
  };

  const addToCart = () => {
    toast({
      title: "Item Added!",
      description: `${detectedItem.name} has been added to your cart.`,
    });
    
    // Reset detection and restart scanning
    setDetectedItem(null);
    setShowDetection(false);
    setTimeout(() => {
      setIsScanning(true);
      simulateDetection();
    }, 1000);
  };

  const renderCameraView = () => {
    if (hasPermission === null) {
      return (
        <div className={cn("flex-1 flex items-center justify-center bg-muted")}>
          <div className="text-center">
            <Camera className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <p className={cn(typography.body)}>Requesting camera access...</p>
          </div>
        </div>
      );
    }

    if (hasPermission === false) {
      return (
        <div className={cn("flex-1 flex items-center justify-center bg-muted")}>
          <div className="text-center">
            <Camera className="w-16 h-16 text-destructive mx-auto mb-4" />
            <h3 className={cn(typography.h4, "mb-2")}>Camera Access Denied</h3>
            <p className={cn(typography.muted, "mb-4")}>
              Please allow camera access to scan items
            </p>
            <Button onClick={startCamera}>Try Again</Button>
          </div>
        </div>
      );
    }

    return (
      <div className="flex-1 relative bg-black overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          playsInline
          muted
          className="w-full h-full object-cover"
        />
        
        {/* Scanning overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Scanning frame */}
          <div className="relative w-64 h-64 border-2 border-primary rounded-lg">
            <div className="absolute -top-1 -left-1 w-8 h-8 border-t-4 border-l-4 border-primary rounded-tl-lg"></div>
            <div className="absolute -top-1 -right-1 w-8 h-8 border-t-4 border-r-4 border-primary rounded-tr-lg"></div>
            <div className="absolute -bottom-1 -left-1 w-8 h-8 border-b-4 border-l-4 border-primary rounded-bl-lg"></div>
            <div className="absolute -bottom-1 -right-1 w-8 h-8 border-b-4 border-r-4 border-primary rounded-br-lg"></div>
            
            {/* Scanning animation */}
            {isScanning && (
              <div className="absolute inset-0 border-2 border-primary/50 rounded-lg animate-pulse">
                <div className="absolute top-0 left-0 right-0 h-1 bg-primary/60 animate-pulse"></div>
              </div>
            )}
          </div>
        </div>

        {/* Flash toggle button */}
        <button
          onClick={toggleFlash}
          className="absolute top-4 right-4 p-3 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
        >
          {isFlashOn ? (
            <Flash className="w-6 h-6" />
          ) : (
            <FlashlightOff className="w-6 h-6" />
          )}
        </button>

        {/* Scanning status */}
        <div className="absolute bottom-20 left-0 right-0 text-center">
          <div className="bg-black/70 text-white px-4 py-2 rounded-lg mx-4">
            {isScanning ? (
              <p className="text-lg font-medium">Looking for product...</p>
            ) : showDetection ? (
              <p className="text-lg font-medium text-primary">Product detected!</p>
            ) : (
              <p className="text-lg font-medium">Point camera at product barcode</p>
            )}
          </div>
        </div>

        {/* Item detection result */}
        {showDetection && detectedItem && (
          <div className={cn(
            "absolute bottom-4 left-4 right-4 bg-card border border-border rounded-lg p-4 shadow-lg",
            "animate-in fade-in-0 slide-in-from-bottom-2 duration-300"
          )}>
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center">
                <Camera className="w-8 h-8 text-muted-foreground" />
              </div>
              <div className="flex-1">
                <h4 className={cn(typography.h6, "mb-1")}>{detectedItem.name}</h4>
                <p className={cn(typography.bodySmall, "text-muted-foreground mb-2")}>
                  MRP: {detectedItem.mrp}
                </p>
                <Button onClick={addToCart} size="sm" className="w-full">
                  Add to Cart
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <AppLayout>
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="p-4 border-b border-border bg-background">
          <h1 className={cn(typography.h4, "text-center")}>
            Scan Item to Add to Cart
          </h1>
        </div>

        {/* Camera View */}
        {renderCameraView()}
      </div>
    </AppLayout>
  );
};

export default ScanScreen;
