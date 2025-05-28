
import React from 'react';
import { ArrowRight, FileCheck, GraduationCap, Globe, Calculator, MessageSquare, Award } from 'lucide-react';
import { useTranslations } from 'next-intl';
import ServiceCard from './ServiceCard';

const ServicesSection = () => {
  const t = useTranslations();

  const services = [
    {
      icon: FileCheck,
      title: 'Признание зарубежных документов об образовании',
      description: 'Официальное признание дипломов и документов об образовании, полученных за рубежом',
      featured: true
    },
    {
      icon: Award,
      title: 'Аккредитация образовательных программ',
      description: 'Процедуры аккредитации образовательных программ высших учебных заведений'
    },
    {
      icon: Globe,
      title: 'Болонский процесс',
      description: 'Информация о Болонском процессе и европейской интеграции в сфере образования'
    },
    {
      icon: Calculator,
      title: 'Калькулятор ECTS',
      description: 'Интерактивный инструмент для расчета европейских кредитных единиц'
    },
    {
      icon: GraduationCap,
      title: 'Реестр образовательных программ',
      description: 'База данных аккредитованных образовательных программ Казахстана'
    },
    {
      icon: MessageSquare,
      title: 'Консультации и поддержка',
      description: 'Получите профессиональную консультацию по вопросам качества образования'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">{t('services.title')}</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t('services.description')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              featured={service.featured}
              className="h-full"
            />
          ))}
        </div>

        <div className="text-center">
          <button className="bg-brand-blue-600 text-white px-8 py-3 rounded-lg hover:bg-brand-blue-700 transition-colors duration-300 font-medium flex items-center mx-auto">
            {t('services.allServices')}
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
