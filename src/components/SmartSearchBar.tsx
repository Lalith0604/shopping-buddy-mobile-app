
import React from 'react';
import { Search, Mic, Scan } from 'lucide-react';
import { cn } from '../lib/utils';
import { inputs } from '../theme/styles';

const SmartSearchBar: React.FC = () => {
  return (
    <div className="p-4">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
        <input
          type="text"
          placeholder="Search products, brands, or scan…"
          className={cn(inputs.base, 'pl-10 pr-20')}
        />
        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center space-x-2">
          <Mic className="w-5 h-5 text-muted-foreground hover:text-foreground cursor-pointer" />
          <Scan className="w-5 h-5 text-muted-foreground hover:text-foreground cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default SmartSearchBar;
