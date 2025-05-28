import ECTSCalculator from '@/components/MainPage/ECTSCalculator'
import NewsSection from '@/components/MainPage/NewsSection'
import PartnersSlider from '@/components/MainPage/PartnersSlider'

const MainPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <ECTSCalculator />
      <NewsSection />
      <PartnersSlider />
    </div>
  )
}

export default MainPage
