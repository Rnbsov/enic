'use client'
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/nativation';
import LanguageSwitcher from './LanguageSwitcher';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const t = useTranslations();

  const navItems = [
    { name: t('nav.about'), href: '/about' },
    { name: t('nav.bologna'), href: '/bologna' },
    { name: t('nav.publications'), href: '#publications' },
    { name: t('nav.reference'), href: '#reference' },
    { name: t('nav.registry'), href: '/registry' },
    { name: t('nav.activities'), href: '#activities' },
    { name: t('nav.faq'), href: '/faq' },
    { name: t('nav.vacancies'), href: '#vacancies' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside or on navigation item
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const nav = document.getElementById('mobile-nav');
      const button = document.getElementById('mobile-menu-button');
      if (isMenuOpen && nav && button && !nav.contains(event.target as Node) && !button.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden'; // Prevent background scrolling
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <div className={`bg-white shadow-lg sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'shadow-xl' : 'shadow-lg'}`}>
      {/* Top bar - hidden on small screens */}
      <div className="bg-brand-blue-900 text-white py-2 hidden md:block">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <LanguageSwitcher />
          </div>
          <div className="flex items-center space-x-4">
            <a href="tel:+77172572075" className="flex items-center hover:text-brand-gold-300 transition-colors">
              <Phone className="w-4 h-4 mr-1" /> +7 (7172) 57-20-75
            </a>
            <span className="flex items-center">
              <Mail className="w-4 h-4 mr-1" /> {t('nav.personalAccount')}
            </span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-3 md:py-4">
          <Link to="/" className="flex items-center">
            <div className="h-16 md:h-20">
              <img 
                src="/lovable-uploads/a930fab9-b5eb-459b-8b59-b525526f0d72.png" 
                alt="ENIC Kazakhstan Logo" 
                className="h-16 md:h-20 w-auto"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              item.href.startsWith('/') ? (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-3 xl:px-4 py-2 text-sm font-medium text-gray-700 hover:text-brand-blue-600 hover:bg-brand-light-blue-50 rounded-lg transition-all duration-200 relative group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-brand-blue-600 transition-all duration-200 group-hover:w-full group-hover:left-0"></span>
                </Link>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  className="px-3 xl:px-4 py-2 text-sm font-medium text-gray-700 hover:text-brand-blue-600 hover:bg-brand-light-blue-50 rounded-lg transition-all duration-200 relative group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-brand-blue-600 transition-all duration-200 group-hover:w-full group-hover:left-0"></span>
                </a>
              )
            ))}
          </div>

          {/* Mobile menu button with better touch target */}
          <button
            id="mobile-menu-button"
            className="lg:hidden p-3 text-brand-blue-700 hover:bg-brand-light-blue-50 rounded-lg transition-colors duration-200 touch-manipulation"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle mobile menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu overlay */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden" />
        )}

        {/* Mobile menu - improved with better UX */}
        <div
          id="mobile-nav"
          className={`lg:hidden fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-50 ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <div className="h-12">
              <img 
                src="/lovable-uploads/a930fab9-b5eb-459b-8b59-b525526f0d72.png" 
                alt="ENIC Kazakhstan Logo" 
                className="h-12 w-auto"
              />
            </div>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Mobile Language Switcher */}
          <div className="px-4 py-3 border-b border-gray-200 md:hidden">
            <LanguageSwitcher />
          </div>

          {/* Mobile Contact Info */}
          <div className="px-4 py-3 border-b border-gray-200 md:hidden">
            <a href="tel:+77172572075" className="flex items-center text-sm text-gray-600 hover:text-brand-blue-600 transition-colors mb-2">
              <Phone className="w-4 h-4 mr-2" /> +7 (7172) 57-20-75
            </a>
            <span className="flex items-center text-sm text-gray-600">
              <Mail className="w-4 h-4 mr-2" /> {t('nav.personalAccount')}
            </span>
          </div>

          {/* Mobile Navigation Items */}
          <nav className="flex-1 overflow-y-auto py-4">
            {navItems.map((item) => (
              item.href.startsWith('/') ? (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-6 py-4 text-base font-medium text-gray-700 hover:text-brand-blue-600 hover:bg-brand-light-blue-50 border-b border-gray-100 transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-6 py-4 text-base font-medium text-gray-700 hover:text-brand-blue-600 hover:bg-brand-light-blue-50 border-b border-gray-100 transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              )
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
