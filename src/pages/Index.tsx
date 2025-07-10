
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ShoppingCart, Smartphone, Shield, Zap } from 'lucide-react';

const Index = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: ShoppingCart,
      title: 'Smart Cart',
      description: 'Intelligent shopping cart management'
    },
    {
      icon: Smartphone,
      title: 'Mobile First',
      description: 'Optimized for mobile shopping experience'
    },
    {
      icon: Shield,
      title: 'Secure',
      description: 'OTP-based authentication for security'
    },
    {
      icon: Zap,
      title: 'Fast Checkout',
      description: 'Quick and seamless checkout process'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-50">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="w-20 h-20 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <ShoppingCart className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Smart Shopping Cart
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Experience the future of shopping with our intelligent cart system. 
            Scan, shop, and checkout seamlessly.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate('/welcome')}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              Get Started
            </button>
            <button
              onClick={() => navigate('/home')}
              className="bg-white hover:bg-gray-50 text-indigo-600 px-8 py-3 rounded-lg font-semibold text-lg border-2 border-indigo-600 transition-colors duration-200"
            >
              View Demo
            </button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-200">
              <feature.icon className="w-12 h-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Navigation Demo */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Navigation Structure
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Authentication Flow</h3>
              <div className="space-y-2">
                <button
                  onClick={() => navigate('/welcome')}
                  className="w-full text-left p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
                >
                  📱 Welcome / Mobile Number
                </button>
                <button
                  onClick={() => navigate('/otp')}
                  className="w-full text-left p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
                >
                  🔐 OTP Verification
                </button>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Shopping Flow</h3>
              <div className="space-y-2">
                <button
                  onClick={() => navigate('/item-detail')}
                  className="w-full text-left p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
                >
                  📦 Item Detail Screen
                </button>
                <button
                  onClick={() => navigate('/checkout')}
                  className="w-full text-left p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
                >
                  💳 Billing / Checkout
                </button>
                <button
                  onClick={() => navigate('/order-summary')}
                  className="w-full text-left p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
                >
                  📋 Order Summary
                </button>
              </div>
            </div>
          </div>
          
          <div className="mt-8">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">Main Tab Navigation</h3>
            <button
              onClick={() => navigate('/home')}
              className="w-full p-4 rounded-lg bg-indigo-50 hover:bg-indigo-100 transition-colors border-2 border-indigo-200 text-indigo-800 font-medium"
            >
              🏠 Access Main App (Home, Cart, Scan, Offers, Profile)
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
