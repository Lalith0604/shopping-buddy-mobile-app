
import React from 'react';
import { MapPin } from 'lucide-react';
import { cn } from '../lib/utils';
import { typography, buttons } from '../theme/styles';

const StoreInfo: React.FC = () => {
  return (
    <div className="px-4 py-2 bg-muted/30">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <MapPin className="w-4 h-4 text-primary" />
          <span className={cn(typography.bodySmall)}>
            Shopping at: <span className="font-medium">Reliance Fresh, HSR</span>
          </span>
        </div>
        <button className={cn(buttons.base, buttons.variants.outline, buttons.sizes.sm)}>
          Change
        </button>
      </div>
    </div>
  );
};

export default StoreInfo;
