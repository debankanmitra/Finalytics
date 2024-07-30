import { useState, useEffect } from 'react'
function Newsfeed() {
  const [news, setNews] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://127.0.0.1:8000/top/news')
      const data = await response.json()
      setNews(data)
    }
    fetchData()
  }, [])

  return (
    <section className="py-24 ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-manrope text-4xl font-bold text-slate-950 text-center mb-16">
          Popular News
        </h2>
        <div className="flex justify-center  gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8">
          {news.map((item, index) => (
            <div
              className="swiper-slide w-full max-lg:max-w-xl lg:w-1/2 group"
              key={index}
            >
              <div className="flex items-center mb-9">
                <img
                  src={item.urlToImage}
                  alt="blogs tailwind section"
                  className="rounded-2xl w-full"
                />
              </div>
              <span className="text-indigo-600 font-medium mb-3 block">
                {item.publishedAt}
              </span>
              <a href={item.url} target='_blank' className="text-xl text-gray-900 font-medium leading-8 mb-4 group-hover:text-indigo-600 cursor-pointer">
                {item.title}
              </a>
              <p className="text-gray-500 leading-6 transition-all duration-500 mb-8">
                {item.description}
              </p>
              <a
                href={item.url}
                target='_blank'
                className="cursor-pointer flex items-center gap-2 text-lg text-indigo-700 font-semibold"
              >
                Read more
                <svg
                  width="15"
                  height="12"
                  viewBox="0 0 15 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.25 6L13.25 6M9.5 10.5L13.4697 6.53033C13.7197 6.28033 13.8447 6.15533 13.8447 6C13.8447 5.84467 13.7197 5.71967 13.4697 5.46967L9.5 1.5"
                    stroke="#4338CA"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Newsfeed
