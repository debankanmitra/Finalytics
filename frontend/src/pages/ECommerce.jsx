import { useEffect, useState } from 'react'
import PriceCard from '../components/Dashmain/PriceCard'
import CandlestickChart from '../components/Dashmain/CandlestickChart'
import NewsCard from '../components/Dashmain/NewsCard'
import SentimentCard from '../components/Dashmain/SentimentCard'
import VideoCard from '../components/Dashmain/VideoCard'
import DefaultLayout from '../components/Dashmain/DefaultLayout'

const ECommerce = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://127.0.0.1:8000/listfourcoins')
      const data = await response.json()
      setData(data)
    }
    fetchData()
  }, [])
  return (
    <DefaultLayout>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        {data.map((item, index) => (
          <PriceCard
            key={index}
            title={item.code}
            total={item.current_price}
            rate={item.price_change_percentage_1h}
            levelUp
          >
            <img src={item.image} alt={item.name} className="h-8 w-8" />
          </PriceCard>
        ))}
      </div>

      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <div className="col-span-12">
          <CandlestickChart />
        </div>
        <SentimentCard />
        <VideoCard />
        <div className="col-span-12">
          <NewsCard />
        </div>
        {/* <div className="col-span-12 xl:col-span-8">
          <CryptoListCard />
        </div>
        <ChatCard /> */}
      </div>
    </DefaultLayout>
  )
}

export default ECommerce
