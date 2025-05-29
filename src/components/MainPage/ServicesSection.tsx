import React from 'react'
import {
  ArrowRight,
  FileCheck,
  GraduationCap,
  Globe,
  Calculator,
  MessageSquare,
  Award,
} from 'lucide-react'
import { useTranslations } from 'next-intl'
import ServiceCard from './ServiceCard'

const ServicesSection = () => {
  const t = useTranslations('services')

  const services = [
    {
      icon: FileCheck,
      title: t('documentRecognition.title'),
      description: t('documentRecognition.description'),
      featured: true,
    },
    {
      icon: Award,
      title: t('programAccreditation.title'),
      description: t('programAccreditation.description'),
    },
    {
      icon: Globe,
      title: t('bolognaProcess.title'),
      description: t('bolognaProcess.description'),
    },
    {
      icon: Calculator,
      title: t('ectsCalculator.title'),
      description: t('ectsCalculator.description'),
    },
    {
      icon: GraduationCap,
      title: t('programRegistry.title'),
      description: t('programRegistry.description'),
    },
    {
      icon: MessageSquare,
      title: t('consultationSupport.title'),
      description: t('consultationSupport.description'),
    },
  ]

  return (
    <section className="py-16 bg-white" id='services'>
      <div className="container mx-auto px-4">
        {' '}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">{t('title')}</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">{t('description')}</p>
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
        </div>{' '}
        <div className="text-center">
          <button className="bg-brand-blue-600 text-white px-8 py-3 rounded-lg hover:bg-brand-blue-700 transition-colors duration-300 font-medium flex items-center mx-auto">
            {t('allServices')}
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
