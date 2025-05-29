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
  const t = useTranslations('partners')

  // Updated partners array with correct image URLs from HTML
  const partners = [
    {
      name: 'European Higher Education Area (EHEA)',
      logo: 'https://enic-kazakhstan.edu.kz/uploads/partners/14/logo.png?cache=1591362038',
      website: 'http://www.ehea.info/',
    },
    {
      name: 'ENIC-NARIC Network',
      logo: 'https://enic-kazakhstan.edu.kz/uploads/partners/13/logo.png?cache=1557896272',
      website: 'https://www.enic-naric.net/',
    },
    {
      name: 'European Students Union (ESU)',
      logo: 'https://enic-kazakhstan.edu.kz/uploads/partners/12/logo.png?cache=1557896201',
      website: 'https://www.esu-online.org/',
    },
    {
      name: 'European Quality Assurance Register (EQAR)',
      logo: 'https://enic-kazakhstan.edu.kz/uploads/partners/11/logo.png?cache=1557896074',
      website: 'https://www.eqar.eu/',
    },
    {
      name: 'European Association for Quality Assurance in Higher Education (ENQA)',
      logo: 'https://enic-kazakhstan.edu.kz/uploads/partners/10/logo.png?cache=1646905450',
      website: 'https://enqa.eu/',
    },
    {
      name: 'European Association of Institutions in Higher Education (EURASHE)',
      logo: 'https://enic-kazakhstan.edu.kz/uploads/partners/9/logo.png?cache=1646905245',
      website: 'https://www.eurashe.eu/',
    },
    {
      name: 'European University Association (EUA)',
      logo: 'https://enic-kazakhstan.edu.kz/uploads/partners/8/logo.png?cache=1557895712',
      website: 'https://eua.eu/',
    },
    {
      name: 'Bologna Process',
      logo: 'https://enic-kazakhstan.edu.kz/uploads/partners/7/logo.png?cache=1557895599',
      website: 'http://www.ehea.info/',
    },
    {
      name: 'NIC Russia',
      logo: 'https://enic-kazakhstan.edu.kz/uploads/partners/6/logo.png?cache=1553673790',
      website: 'https://www.nic.gov.ru/',
    },
    {
      name: 'Independent Agency for Quality Assurance in Education (IQAA)',
      logo: 'https://enic-kazakhstan.edu.kz/uploads/partners/5/logo.png?cache=1553669897',
      website: 'https://iqaa.kz/kk/',
    },
    {
      name: 'Independent Agency for Accreditation and Rating (IAAR)',
      logo: 'https://enic-kazakhstan.edu.kz/uploads/partners/4/logo.png?cache=1553668910',
      website: 'http://www.iaar.kz/kz/',
    },
    {
      name: 'Kasipkor',
      logo: 'https://enic-kazakhstan.edu.kz/uploads/partners/3/logo.png?cache=1646904918',
      website: 'http://kasipkor.kz/',
    },
    {
      name: 'UNESCO',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/UNESCO_logo.svg/200px-UNESCO_logo.svg.png',
      website: 'https://unesco.org',
    },
  ]

  return (
    <section className="bg-gray-50 py-12 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-2xl font-bold text-gray-800 mb-8">{t('title')}</h2>
        <div className="relative max-w-[78rem] mx-auto">
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
                  <a
                    href={partner.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group cursor-pointer p-4 block"
                  >
                    <div className="h-20 w-full flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                      <img
                        src={partner.logo}
                        alt={partner.name}
                        className="max-h-16 max-w-full object-contain  transition-all duration-300"
                      />
                    </div>
                  </a>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
        </div>{' '}
        {/* Additional info */}
        <p className="text-center text-sm text-gray-500 mt-6">{t('stats')}</p>
      </div>
    </section>
  )
}

export default PartnersSlider
