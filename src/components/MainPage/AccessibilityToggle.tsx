'use client'

import React, { useState, useEffect } from 'react';
import { Eye } from 'lucide-react';
import { useTranslations } from 'next-intl';

const AccessibilityToggle = () => {
  const [isHighContrast, setIsHighContrast] = useState(false);
  const t = useTranslations();

  useEffect(() => {
    // Check localStorage for saved preference
    const saved = localStorage.getItem('highContrast');
    if (saved === 'true') {
      setIsHighContrast(true);
      document.body.classList.add('high-contrast');
    }
  }, []);

  const toggleAccessibility = () => {
    const newState = !isHighContrast;
    setIsHighContrast(newState);
    
    if (newState) {
      document.body.classList.add('high-contrast');
      localStorage.setItem('highContrast', 'true');
    } else {
      document.body.classList.remove('high-contrast');
      localStorage.setItem('highContrast', 'false');
    }
  };

  return (
    <div className="fixed top-32 right-4 z-[9999] flex flex-col items-end space-y-2">
      {/* Round Accessibility button with only eye icon */}
      <button
        onClick={toggleAccessibility}
        className={`group flex items-center justify-center w-12 h-12 rounded-full shadow-lg transition-all duration-200 ${
          isHighContrast 
            ? 'bg-yellow-400 text-black hover:bg-yellow-500 border-2 border-black' 
            : 'bg-blue-600 text-white hover:bg-blue-700 hover:shadow-xl'
        }`}
        title={isHighContrast ? t('accessibility.disable') : t('accessibility.enable')}
        aria-label={isHighContrast ? t('accessibility.disable') : t('accessibility.enable')}
      >
        <Eye className={`w-6 h-6 ${isHighContrast ? 'stroke-[3]' : 'stroke-2'}`} />
      </button>

      {/* Status indicator */}
      {isHighContrast && (
        <div className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-medium border-2 border-black">
          High Contrast
        </div>
      )}
    </div>
  );
};

export default AccessibilityToggle;
