import ECTSCalculator from '@/components/MainPage/ECTSCalculator'
import NewsSection from '@/components/MainPage/NewsSection'
import OnlineApplications from '@/components/MainPage/OnlineApplications'
import PartnersSlider from '@/components/MainPage/PartnersSlider'

const MainPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <OnlineApplications />
      <ECTSCalculator />
      <NewsSection />
      <PartnersSlider />
    </div>
  )
}

export default MainPage
