import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../ui/carousel'
import { useTranslations } from 'next-intl'

const PartnersSlider = () => {
  const t = useTranslations()

  const partners = [
    {
      name: 'UNESCO',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/UNESCO_logo.svg/200px-UNESCO_logo.svg.png',
      website: 'https://unesco.org',
    },
    {
      name: 'European Commission',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Flag_of_Europe.svg/200px-Flag_of_Europe.svg.png',
      website: 'https://ec.europa.eu',
    },
    {
      name: 'Bologna Process',
      logo: 'https://www.ehea.info/media/filer_public/2018/11/08/bologna_process_logo.png',
      website: 'https://ehea.info',
    },
    {
      name: 'ENIC-NARIC',
      logo: 'https://www.enic-naric.net/fileadmin/user_upload/logos/enic-naric-logo.png',
      website: 'https://enic-naric.net',
    },
    {
      name: 'Council of Europe',
      logo: 'https://www.coe.int/documents/16695/0/CoE-Logo-positive-CMYK-CS.eps/2b6b2c84-c0f1-4007-a46e-59e4e9cce8d5?t=1539778968000',
      website: 'https://coe.int',
    },
    {
      name: 'ENQA',
      logo: 'https://www.enqa.eu/wp-content/uploads/2019/06/ENQA_logo_colour.png',
      website: 'https://enqa.eu',
    },
    {
      name: 'World Bank',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/WorldBank.svg/200px-WorldBank.svg.png',
      website: 'https://worldbank.org',
    },
    {
      name: 'OECD',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/OECD_logo.svg/200px-OECD_logo.svg.png',
      website: 'https://oecd.org',
    },
  ]

  return (
    <section className="bg-gray-50 py-12 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-2xl font-bold text-gray-800 mb-8">{t('partners.title')}</h2>

        <div className="relative max-w-4xl mx-auto">
          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {partners.map((partner, index) => (
                <CarouselItem
                  key={index}
                  className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4"
                >
                  <div className="group cursor-pointer p-4">
                    <div className="h-20 w-full flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                      <img
                        src={partner.logo}
                        alt={partner.name}
                        className="max-h-16 max-w-full object-contain  transition-all duration-300"
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
        </div>

        {/* Additional info */}
        <p className="text-center text-sm text-gray-500 mt-6">
          Более 120 стран-партнеров • Международное признание • Официальные соглашения
        </p>
      </div>
    </section>
  )
}

export default PartnersSlider
