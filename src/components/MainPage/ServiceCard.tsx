
import React from 'react';
import { ArrowRight, LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description?: string;
  icon?: LucideIcon;
  className?: string;
  featured?: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  title, 
  description, 
  icon: Icon,
  className = "",
  featured = false 
}) => {
  return (
    <div className={`
      group relative bg-white rounded-2xl p-8 shadow-sm border border-gray-100 
      hover:shadow-2xl hover:border-brand-blue-200 transition-all duration-500 
      hover:-translate-y-2 cursor-pointer h-full flex flex-col
      ${featured ? 'bg-gradient-to-br from-brand-blue-50 to-white border-brand-blue-200 ring-2 ring-brand-blue-100' : ''}
      ${className}
    `}>
      {/* Background Pattern */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-brand-blue-50/50 to-transparent rounded-full -translate-y-16 translate-x-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {Icon && (
        <div className={`
          w-16 h-16 rounded-2xl flex items-center justify-center mb-6 relative z-10
          ${featured ? 'bg-brand-blue-600 text-white shadow-lg' : 'bg-gradient-to-br from-brand-blue-100 to-brand-blue-50 text-brand-blue-600'}
          group-hover:scale-110 group-hover:rotate-3 transition-all duration-500
        `}>
          <Icon className="w-8 h-8" />
        </div>
      )}
      
      <h3 className="text-xl font-bold text-gray-800 mb-4 line-clamp-2 relative z-10 group-hover:text-brand-blue-700 transition-colors duration-300">
        {title}
      </h3>
      
      {description && (
        <p className="text-gray-600 mb-6 flex-grow line-clamp-3 leading-relaxed relative z-10">
          {description}
        </p>
      )}
      
      <div className="flex items-center text-brand-blue-600 font-semibold mt-auto relative z-10 group-hover:text-brand-blue-700">
        <span className="group-hover:translate-x-2 transition-transform duration-300">
          Подробнее
        </span>
        <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
      </div>
      
      {featured && (
        <div className="absolute top-6 right-6 bg-gradient-to-r from-brand-gold-500 to-brand-gold-600 text-white text-xs px-3 py-1.5 rounded-full shadow-lg font-medium">
          ★ Популярно
        </div>
      )}
    </div>
  );
};

export default ServiceCard;
