
import React from 'react';
import AppLayout from '../components/AppLayout';
import HomeHeader from '../components/HomeHeader';
import SmartSearchBar from '../components/SmartSearchBar';
import StoreInfo from '../components/StoreInfo';
import BannerCarousel from '../components/BannerCarousel';
import TopOffers from '../components/TopOffers';
import SmartMartHighlights from '../components/SmartMartHighlights';
import SmartSuggestions from '../components/SmartSuggestions';
import QuickAccessButtons from '../components/QuickAccessButtons';
import FooterStrip from '../components/FooterStrip';

const HomeScreen: React.FC = () => {
  return (
    <AppLayout>
      <div className="flex flex-col h-full">
        <HomeHeader />
        
        <div className="flex-1 overflow-y-auto">
          <SmartSearchBar />
          <StoreInfo />
          <BannerCarousel />
          <TopOffers />
          <SmartMartHighlights />
          
          {/* Featured Events Banner */}
          <div className="px-4 py-4">
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg p-6 text-white text-center">
              <h3 className="text-lg font-bold mb-2">Weekend Special Sale!</h3>
              <p className="text-sm opacity-90 mb-3">Up to 70% off on selected items</p>
              <div className="text-xs opacity-75">Ends in: 2d 14h 32m</div>
            </div>
          </div>
          
          <SmartSuggestions />
          <QuickAccessButtons />
          <FooterStrip />
        </div>
      </div>
    </AppLayout>
  );
};

export default HomeScreen;
