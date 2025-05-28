import React from 'react'
import { Phone, Mail, MapPin } from 'lucide-react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

const Footer = () => {
  const t = useTranslations()

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info Section */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <div className="relative h-16 mb-4">
                  <Image
                    src="/enic.png"
                    alt="ENIC Kazakhstan Logo"
                    height={64}
                    width={144}
                    className="w-auto bg-white p-2 rounded"
                  />
                </div>
                <h4 className="text-xl font-bold text-white mb-3">ENIC Kazakhstan</h4>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed max-w-xs">
                Национальный центр развития высшего образования в Казахстане, предоставляющий услуги по аккредитации и признанию квалификаций.
              </p>
            </div>

            {/* Company Section */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6 relative">
                Компания
                <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-blue-400"></div>
              </h4>
              <ul className="space-y-3 text-gray-300">
                <li>
                  <a href="#" className="hover:text-white transition-colors text-sm">
                    {t('nav.about')}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors text-sm">
                    {t('nav.bologna')}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors text-sm">
                    {t('nav.registry')}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors text-sm">
                    {t('nav.activities')}
                  </a>
                </li>
              </ul>
            </div>

            {/* Contacts Section */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6 relative">
                Контакты
                <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-blue-400"></div>
              </h4>
              <div className="space-y-4 text-gray-300">
                <div className="flex items-start space-x-3">
                  <Mail className="w-4 h-4 mt-1 flex-shrink-0 text-blue-400" />
                  <span className="text-sm">chupakhin@kz</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Phone className="w-4 h-4 mt-1 flex-shrink-0 text-blue-400" />
                  <span className="text-sm">+7 (7172) 57-20-75</span>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="w-4 h-4 mt-1 flex-shrink-0 text-blue-400" />
                  <div className="text-sm">
                    <p>г. Алматы, Казахстан</p>
                    <p>ул. Сыганак, 70, офис № 202</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Section */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6 relative">
                Мы на карте
                <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-blue-400"></div>
              </h4>
              <div className="bg-gray-800 rounded-lg h-32 flex items-center justify-center border border-gray-700 overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2504.1234567890123!2d71.4234567!3d51.1234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDA3JzI0LjQiTiA3McKwMjUnMjQuNCJF!5e0!3m2!1sen!2skz!4v1234567890123!5m2!1sen!2skz"
                  className="w-full h-full rounded-lg"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="ENIC Kazakhstan Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              <a href="#" className="hover:text-white transition-colors">
                Политика Конфиденциальности
              </a>
            </div>
            <div className="text-gray-400 text-sm">© 2025 Все Права Защищены</div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
