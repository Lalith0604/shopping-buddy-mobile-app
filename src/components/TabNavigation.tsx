
import React, { useState } from 'react';
import { Home, ShoppingCart, Scan, Tag, User } from 'lucide-react';
import HomeScreen from '../screens/HomeScreen';
import CartScreen from '../screens/CartScreen';
import ScanScreen from '../screens/ScanScreen';
import OffersScreen from '../screens/OffersScreen';
import ProfileScreen from '../screens/ProfileScreen';

const TabNavigation: React.FC = () => {
  const [activeTab, setActiveTab] = useState('home');

  const tabs = [
    { id: 'home', label: 'Home', icon: Home, component: HomeScreen },
    { id: 'cart', label: 'Cart', icon: ShoppingCart, component: CartScreen },
    { id: 'scan', label: 'Scan', icon: Scan, component: ScanScreen },
    { id: 'offers', label: 'Offers', icon: Tag, component: OffersScreen },
    { id: 'profile', label: 'Profile', icon: User, component: ProfileScreen },
  ];

  const ActiveComponent = tabs.find(tab => tab.id === activeTab)?.component || HomeScreen;

  return (
    <div className="min-h-screen flex flex-col">
      {/* Main Content */}
      <div className="flex-1">
        <ActiveComponent />
      </div>

      {/* Bottom Tab Bar */}
      <div className="bg-white border-t border-gray-200 px-4 py-2 safe-area-bottom">
        <div className="flex justify-around items-center max-w-md mx-auto">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex flex-col items-center space-y-1 py-2 px-3 rounded-lg transition-colors ${
                  isActive 
                    ? 'text-indigo-600 bg-indigo-50' 
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                <Icon size={24} />
                <span className="text-xs font-medium">{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TabNavigation;
