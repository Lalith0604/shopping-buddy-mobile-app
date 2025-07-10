
import React from 'react';
import { Scan, Clock, Wallet, HelpCircle } from 'lucide-react';
import { cn } from '../lib/utils';
import { typography } from '../theme/styles';
import { Card } from './ui/card';

const QuickAccessButtons: React.FC = () => {
  const shortcuts = [
    { id: 1, name: "Scan Item", icon: Scan, color: "text-blue-600" },
    { id: 2, name: "Past Orders", icon: Clock, color: "text-green-600" },
    { id: 3, name: "Wallet", icon: Wallet, color: "text-purple-600" },
    { id: 4, name: "Help & Support", icon: HelpCircle, color: "text-orange-600" }
  ];

  return (
    <div className="px-4 py-4">
      <h2 className={cn(typography.h5, 'mb-4')}>Quick Access</h2>
      
      <div className="grid grid-cols-2 gap-3">
        {shortcuts.map((shortcut) => {
          const Icon = shortcut.icon;
          return (
            <Card key={shortcut.id} className="p-4 cursor-pointer hover:shadow-lg transition-shadow text-center">
              <Icon className={cn("w-6 h-6 mx-auto mb-2", shortcut.color)} />
              <h4 className={cn(typography.bodySmall, 'font-medium')}>
                {shortcut.name}
              </h4>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default QuickAccessButtons;
