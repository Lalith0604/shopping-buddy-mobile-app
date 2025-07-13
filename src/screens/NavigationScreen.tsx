import React, { useState } from 'react';
import { layouts, typography } from '../theme/styles';
import { cn } from '../lib/utils';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { useToast } from '../hooks/use-toast';
import { Search, X } from 'lucide-react';

// Dummy item database with store locations
const STORE_ITEMS = {
  'tata salt': { section: 'Groceries', position: { x: 25, y: 45 }, zone: 'Household Items' },
  'lays chips': { section: 'Snacks', position: { x: 75, y: 35 }, zone: 'Snacks & Beverages' },
  'milk': { section: 'Dairy', position: { x: 25, y: 32 }, zone: 'Dairy & Frozen' },
  'tv': { section: 'Electronics', position: { x: 75, y: 20 }, zone: 'Electronics' },
  'apple': { section: 'Fruits', position: { x: 25, y: 20 }, zone: 'Fruits & Vegetables' }
};

const NavigationScreen: React.FC = () => {
  const { toast } = useToast();
  const [locationPosition, setLocationPosition] = useState({ x: 50, y: 30 });
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [destinationPosition, setDestinationPosition] = useState<{ x: number, y: number } | null>(null);

  const handleRecenter = () => {
    setLocationPosition({ x: 50, y: 30 });
    toast({
      title: "Location Centered",
      description: "View centered on your current location",
    });
  };

  const handleSimulateMove = () => {
    const positions = [
      { x: 25, y: 20, section: "Fruits & Vegetables" },
      { x: 75, y: 35, section: "Electronics" },
      { x: 45, y: 60, section: "Snacks & Beverages" },
      { x: 60, y: 80, section: "Billing Counter" },
      { x: 15, y: 85, section: "Exit" }
    ];
    
    const randomPosition = positions[Math.floor(Math.random() * positions.length)];
    setLocationPosition({ x: randomPosition.x, y: randomPosition.y });
    
    toast({
      title: "Location Updated",
      description: `Moved to ${randomPosition.section}`,
    });
  };

  const handleSearch = () => {
    const query = searchQuery.toLowerCase().trim();
    
    if (!query) {
      toast({
        title: "Enter an item name",
        description: "Please type an item to search for",
        variant: "destructive"
      });
      return;
    }

    const item = STORE_ITEMS[query as keyof typeof STORE_ITEMS];
    
    if (item) {
      setSelectedItem(query);
      setDestinationPosition(item.position);
      toast({
        title: "Item Found!",
        description: `${query} is located in ${item.zone}`,
      });
    } else {
      toast({
        title: "Item Not Found",
        description: "Try searching for: Tata Salt, Lays Chips, Milk, TV, or Apple",
        variant: "destructive"
      });
    }
  };

  const handleClearSearch = () => {
    setSearchQuery('');
    setSelectedItem(null);
    setDestinationPosition(null);
    toast({
      title: "Search Cleared",
      description: "Path and destination removed",
    });
  };

  const renderPath = () => {
    if (!destinationPosition) return null;

    const startX = locationPosition.x;
    const startY = locationPosition.y;
    const endX = destinationPosition.x;
    const endY = destinationPosition.y;

    // Create a curved path using SVG
    const midX = (startX + endX) / 2;
    const midY = Math.min(startY, endY) - 5; // Curve upward

    return (
      <svg 
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: 5 }}
      >
        <defs>
          <marker
            id="arrowhead"
            markerWidth="10"
            markerHeight="7"
            refX="9"
            refY="3.5"
            orient="auto"
          >
            <polygon
              points="0 0, 10 3.5, 0 7"
              fill="#007BFF"
            />
          </marker>
        </defs>
        <path
          d={`M ${startX}% ${startY}% Q ${midX}% ${midY}% ${endX}% ${endY}%`}
          stroke="#007BFF"
          strokeWidth="3"
          fill="none"
          strokeDasharray="8,4"
          markerEnd="url(#arrowhead)"
          className="animate-pulse"
        />
      </svg>
    );
  };

  return (
    <div className={cn(layouts.screenContainer)}>
      {/* Header */}
      <div className="p-4 border-b border-border bg-background">
        <h1 className={cn(typography.h3, "text-center")}>Store Navigation</h1>
        <p className={cn(typography.muted, "text-center mt-1")}>
          Find your way around SmartMart
        </p>
      </div>

      {/* Search Bar */}
      <div className="p-4 bg-muted/30 border-b border-border">
        <div className="flex gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search for an item… (e.g., Tata Salt)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
              className="pl-10"
            />
          </div>
          <Button onClick={handleSearch} size="sm">
            Search
          </Button>
          {selectedItem && (
            <Button onClick={handleClearSearch} variant="outline" size="sm">
              <X className="w-4 h-4" />
            </Button>
          )}
        </div>
        
        {selectedItem && (
          <div className="mt-2 p-2 bg-primary/10 rounded text-sm">
            <span className="font-medium">Route to:</span> {selectedItem} → {STORE_ITEMS[selectedItem as keyof typeof STORE_ITEMS]?.zone}
          </div>
        )}
      </div>

      {/* Store Map Container */}
      <div className="flex-1 p-4 overflow-auto">
        <div className="relative bg-white rounded-lg border border-border shadow-lg mx-auto max-w-4xl">
          {/* Blueprint/Floor Plan */}
          <div 
            className="relative w-full h-96 bg-gradient-to-br from-blue-50 to-green-50 rounded-lg overflow-hidden"
            style={{ minHeight: '400px' }}
          >
            {/* Store Layout Sections */}
            <div className="absolute inset-4">
              {/* Entry */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-8 bg-green-200 rounded flex items-center justify-center text-xs font-medium">
                Entry
              </div>
              
              {/* Fruits & Vegetables */}
              <div className="absolute top-8 left-4 w-32 h-20 bg-green-300 rounded flex items-center justify-center text-xs font-medium text-center p-2">
                Fruits & Vegetables
              </div>
              
              {/* Electronics */}
              <div className="absolute top-8 right-4 w-32 h-20 bg-blue-300 rounded flex items-center justify-center text-xs font-medium text-center p-2">
                Electronics
              </div>
              
              {/* Dairy & Frozen */}
              <div className="absolute top-32 left-4 w-32 h-16 bg-purple-300 rounded flex items-center justify-center text-xs font-medium text-center p-2">
                Dairy & Frozen
              </div>
              
              {/* Snacks & Beverages */}
              <div className="absolute top-32 right-4 w-32 h-16 bg-orange-300 rounded flex items-center justify-center text-xs font-medium text-center p-2">
                Snacks & Beverages
              </div>
              
              {/* Household Items */}
              <div className="absolute bottom-20 left-4 w-40 h-16 bg-yellow-300 rounded flex items-center justify-center text-xs font-medium text-center p-2">
                Household Items
              </div>
              
              {/* Pharmacy */}
              <div className="absolute bottom-20 right-4 w-32 h-16 bg-red-300 rounded flex items-center justify-center text-xs font-medium text-center p-2">
                Pharmacy
              </div>
              
              {/* Billing Counters */}
              <div className="absolute bottom-4 left-1/4 w-48 h-12 bg-gray-300 rounded flex items-center justify-center text-xs font-medium">
                Billing Counters
              </div>
              
              {/* Exit */}
              <div className="absolute bottom-4 right-8 w-16 h-8 bg-red-200 rounded flex items-center justify-center text-xs font-medium">
                Exit
              </div>
            </div>

            {/* Path Rendering */}
            {renderPath()}

            {/* Destination Marker */}
            {destinationPosition && (
              <div 
                className="absolute transform -translate-x-1/2 -translate-y-1/2 z-10"
                style={{ 
                  left: `${destinationPosition.x}%`, 
                  top: `${destinationPosition.y}%` 
                }}
              >
                <div className="absolute inset-0 w-6 h-6 bg-yellow-400/50 rounded-full animate-ping"></div>
                <div className="relative w-3 h-3 bg-yellow-400 rounded-full border-2 border-white shadow-lg"></div>
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-black px-2 py-1 rounded text-xs font-medium whitespace-nowrap">
                  {selectedItem}
                </div>
              </div>
            )}

            {/* Current Location Marker */}
            <div 
              className="absolute transform -translate-x-1/2 -translate-y-1/2 z-10"
              style={{ 
                left: `${locationPosition.x}%`, 
                top: `${locationPosition.y}%` 
              }}
            >
              {/* Pulsing Ring Animation */}
              <div className="absolute inset-0 w-8 h-8 bg-primary/30 rounded-full animate-ping"></div>
              
              {/* Location Dot */}
              <div className="relative w-4 h-4 bg-primary rounded-full border-2 border-white shadow-lg"></div>
              
              {/* "You are here" Label */}
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground px-2 py-1 rounded text-xs font-medium whitespace-nowrap">
                You are here
              </div>
            </div>
          </div>

          {/* Legend */}
          <div className="p-4 border-t border-border bg-muted/30">
            <div className="flex flex-wrap gap-4 text-xs">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-300 rounded"></div>
                <span>Fresh Produce</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-300 rounded"></div>
                <span>Electronics</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-orange-300 rounded"></div>
                <span>Food & Beverages</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-gray-300 rounded"></div>
                <span>Services</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-primary rounded-full"></div>
                <span>Your Location</span>
              </div>
              {destinationPosition && (
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <span>Destination</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Control Buttons */}
        <div className="flex gap-4 justify-center mt-6">
          <Button 
            variant="outline" 
            onClick={handleRecenter}
            className="min-w-24"
          >
            Re-center
          </Button>
          <Button 
            onClick={handleSimulateMove}
            className="min-w-24"
          >
            Simulate Move
          </Button>
        </div>

        {/* Info Section */}
        <div className="mt-6 p-4 bg-muted/50 rounded-lg text-center">
          <p className={cn(typography.bodySmall, "text-muted-foreground")}>
            Search for items like "Tata Salt", "Lays Chips", "Milk", "TV", or "Apple" to see pathfinding in action.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NavigationScreen;
