import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function CryptoTable() {
  const [chartData, setChartData] = useState([])
  const navigate = useNavigate()

  const handleRowClick = (id) => {
    navigate(`/dashboard/${id}`)
  }

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://127.0.0.1:8000/allcoins')
      const data = await response.json()
      setChartData(data)
    }
    fetchData()
  }, [])
  return (
    <>
      <header className="flex h-16 flex-none items-center px-4 mt-26">
        <h1 className="ax-w-2xl mx-auto text-center font-manrope font-bold text-4xl text-gray-900 mb-5 md:text-5xl leading-[50px] text-slate-900">
          Top Crypto Currencies
        </h1>
      </header>

      <div className="flex flex-col p-4 m-4 rounded-2xl mt-10">
        <div className="-m-1.5 overflow-x-auto">
          <div className="p-1.5 min-w-full inline-block align-middle">
            <div className="overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="border-b-6 border-zinc-200">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-start text-sm font-semibold text-zinc-900"
                    >
                      #
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-start text-sm font-semibold text-zinc-900"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-start text-sm font-semibold text-zinc-900"
                    >
                      Price
                    </th>
                    {/* <th
                    scope="col"
                    className="px-6 py-3 text-end text-base font-medium text-zinc-900" uppercase"
                  >
                    1h %
                  </th> */}
                    <th
                      scope="col"
                      className="px-6 py-3 text-end text-sm font-semibold text-zinc-900"
                    >
                      24h %
                    </th>
                    {/* <th
                    scope="col"
                    className="px-6 py-3 text-end text-base font-medium text-zinc-900" uppercase"
                  >
                    7d %
                  </th> */}
                    <th
                      scope="col"
                      className="px-6 py-3 text-end text-sm font-semibold text-zinc-900"
                    >
                      Volume(24h)
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-end text-sm font-semibold text-zinc-900"
                    >
                      Market Cap
                    </th>
                  </tr>
                </thead>
                {chartData.map((item, index) => (
                  <tbody
                    className="border-b border-zinc-200 hover:bg-zinc-200 cursor-pointer"
                    key={index}
                    onClick={() => handleRowClick(item.id)}
                  >
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-800">
                        {item.market_cap_rank}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-base font-semibold text-slate-700">
                        <span className="flex items-center">
                          {' '}
                          <img
                            src={item.image}
                            alt=""
                            className="w-6 h-6 mr-2"
                          />
                          {item.name}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-slate-800">
                        ${item.current_price.toLocaleString()}
                      </td>
                      {/* <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                      <span className="text-green-500">+3.45%</span>
                    </td> */}
                      <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                        <span
                          className={
                            item.price_change_percentage_24h < 0
                              ? 'text-red-500'
                              : 'text-green-500'
                          }
                        >
                          {item.price_change_percentage_24h}%
                        </span>
                      </td>
                      {/* <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                      <span className="text-green-500">+2.3%</span>
                    </td> */}
                      <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-semibold text-slate-800">
                        ${item.total_volume.toLocaleString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-semibold text-slate-800">
                        {item.market_cap.toLocaleString()}{' '}
                        {item.symbol.toUpperCase()}
                      </td>
                    </tr>
                  </tbody>
                ))}
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CryptoTable
