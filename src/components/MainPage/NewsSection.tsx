import React from 'react'
import { Calendar, Clock, ArrowRight, Eye } from 'lucide-react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

const NewsSection = () => {
  const t = useTranslations('news')

  const news = [
    {
      id: 1,
      title: 'Казахстан принял участие в Ассамблее "Евразе" - "Высшая" в 2025 в Санкт-Петербурге',
      date: '20 Май 2025',
      time: '14:30',
      category: 'Образование',
      image: '/almaty.jpg',
      excerpt:
        'Представители Казахстана приняли активное участие в международной ассамблее по вопросам высшего образования.',
    },
    {
      id: 2,
      title: 'В Астане прошли семинары по управляющим и цифровым инструментам CNEA в НЦК',
      date: '15 Май 2025',
      time: '10:15',
      category: 'Технологии',
      image:
        'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=250&fit=crop&auto=format',
      excerpt:
        'Проведены обучающие семинары по внедрению современных цифровых решений в систему образования.',
    },
    {
      id: 3,
      title: 'Новые стандарты качества образования в рамках Болонского процесса',
      date: '10 Май 2025',
      time: '16:45',
      category: 'Стандарты',
      image:
        'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=250&fit=crop&auto=format',
      excerpt:
        'Утверждены обновленные стандарты качества высшего образования в соответствии с европейскими требованиями.',
    },
  ]

  const events = [
    {
      date: '05',
      month: 'ИЮНЬ',
      title: 'Атлас новых профессий',
      views: '360',
      type: 'Конференция',
    },
    {
      date: '30',
      month: 'ИЮНЬ',
      title: 'Признание зарубежных дипломов',
      views: '280',
      type: 'Семинар',
    },
    {
      date: '22',
      month: 'ИЮЛЬ',
      title: 'Научно-исследовательские проекты',
      views: '195',
      type: 'Воркшоп',
    },
  ]

  return (
    <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12">
          {' '}
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">{t('title')}</h2>
            <p className="text-gray-600 text-lg">{t('description')}</p>
          </div>
          <button className="mt-4 lg:mt-0 bg-brand-blue-600 hover:bg-brand-blue-700 text-white px-6 py-3 rounded-lg font-medium flex items-center transition-all duration-300 hover:shadow-lg">
            {t('allNews')}
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* News Cards */}
          <div className="lg:col-span-2 space-y-8">
            {news.map((item) => (
              <article
                key={item.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group"
              >
                <div className="md:flex">
                  <div className="md:w-2/5">
                    <div className="relative h-64 md:h-full overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-white/90 backdrop-blur-sm text-brand-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                          {item.category}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="md:w-3/5 p-8">
                    <div className="flex items-center gap-6 text-sm text-gray-500 mb-4">
                      <span className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        {item.date}
                      </span>
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        {item.time}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-4 line-clamp-2 group-hover:text-brand-blue-600 transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 mb-6 line-clamp-2">{item.excerpt}</p>{' '}
                    <button className="text-brand-blue-600 hover:text-brand-blue-700 font-medium flex items-center group/btn">
                      {t('readMore')}
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-200" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Events Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              {' '}
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <Calendar className="w-6 h-6 mr-3 text-brand-blue-600" />
                {t('eventsCalendar')}
              </h3>
              <div className="space-y-4">
                {events.map((event, index) => (
                  <div
                    key={index}
                    className="group hover:bg-gray-50 rounded-xl p-4 transition-colors duration-200 border border-gray-100"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="bg-gradient-to-br from-brand-blue-600 to-brand-blue-700 text-white rounded-xl p-3 text-center min-w-[70px] shadow-lg">
                        <div className="text-xl font-bold">{event.date}</div>
                        <div className="text-xs uppercase font-medium opacity-90">
                          {event.month}
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs bg-brand-gold-100 text-brand-gold-600 px-2 py-1 rounded-full font-medium">
                            {event.type}
                          </span>
                        </div>
                        <h4 className="font-semibold text-gray-800 mb-2 group-hover:text-brand-blue-600 transition-colors duration-200">
                          {event.title}
                        </h4>{' '}
                        <div className="flex items-center text-sm text-gray-500">
                          <Eye className="w-4 h-4 mr-1" />
                          <span>
                            {event.views} {t('viewsText')}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Quick Stats */}{' '}
            <div className="bg-gradient-to-br from-brand-blue-600 to-brand-blue-700 rounded-2xl p-6 text-white shadow-lg">
              <h4 className="font-bold text-lg mb-4">{t('statistics')}</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-blue-100">{t('totalNews')}</span>
                  <span className="font-bold text-xl">156</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-blue-100">{t('eventsPerMonth')}</span>
                  <span className="font-bold text-xl">24</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-blue-100">{t('views')}</span>
                  <span className="font-bold text-xl">12.5K</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NewsSection
