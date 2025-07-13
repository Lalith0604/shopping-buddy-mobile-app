
import React, { useState } from 'react';
import { Home, ShoppingCart, Scan, Tag, User, MapPin } from 'lucide-react';
import { navigation } from '../theme/styles';
import { cn } from '../lib/utils';
import HomeScreen from '../screens/HomeScreen';
import CartScreen from '../screens/CartScreen';
import ScanScreen from '../screens/ScanScreen';
import OffersScreen from '../screens/OffersScreen';
import ProfileScreen from '../screens/ProfileScreen';
import NavigationScreen from '../screens/NavigationScreen';
import TopHeaderBar from './TopHeaderBar';

const TabNavigation: React.FC = () => {
  const [activeTab, setActiveTab] = useState('home');

  const tabs = [
    { id: 'home', label: 'Home', icon: Home, component: HomeScreen },
    { id: 'cart', label: 'Cart', icon: ShoppingCart, component: CartScreen },
    { id: 'scan', label: 'Add Item', icon: Scan, component: ScanScreen },
    { id: 'navigation', label: 'Navigation', icon: MapPin, component: NavigationScreen },
    { id: 'offers', label: 'Offers', icon: Tag, component: OffersScreen },
    { id: 'profile', label: 'Profile', icon: User, component: ProfileScreen },
  ];

  const ActiveComponent = tabs.find(tab => tab.id === activeTab)?.component || HomeScreen;

  return (
    <div className="min-h-screen flex flex-col">
      {/* Fixed Top Header Bar */}
      <TopHeaderBar />

      {/* Main Content with AppLayout (includes footer) */}
      <div className="flex-1 flex flex-col">
        <ActiveComponent />
      </div>

      {/* Bottom Tab Bar */}
      <div className={navigation.tabBar}>
        <div className={navigation.tabContainer}>
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  navigation.tabButton,
                  isActive 
                    ? navigation.tabButtonActive
                    : navigation.tabButtonInactive
                )}
              >
                <Icon className={navigation.tabIcon} />
                <span className={navigation.tabLabel}>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TabNavigation;
