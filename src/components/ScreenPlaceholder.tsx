
import React from 'react';

interface ScreenPlaceholderProps {
  title: string;
  subtitle?: string;
}

const ScreenPlaceholder: React.FC<ScreenPlaceholderProps> = ({ title, subtitle }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 px-4">
      <div className="text-center space-y-4">
        <div className="w-16 h-16 bg-indigo-500 rounded-full flex items-center justify-center mx-auto mb-6">
          <span className="text-white text-2xl font-bold">📱</span>
        </div>
        <h1 className="text-3xl font-bold text-gray-800 mb-2">{title}</h1>
        {subtitle && (
          <p className="text-lg text-gray-600 max-w-md mx-auto">{subtitle}</p>
        )}
        <div className="mt-8 text-sm text-gray-500">
          Smart Shopping Cart System
        </div>
      </div>
    </div>
  );
};

export default ScreenPlaceholder;
