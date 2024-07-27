import { useState, useEffect } from 'react'

function CryptoTable() {
  const [chartData, setChartData] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://127.0.0.1:8000/allcoins')
      const data = await response.json()
      setChartData(data)
    }
    fetchData()
  }, [])
  return (
    <div className="flex flex-col p-4 m-4 border border-gray-200 rounded-2xl">
      <div className="-m-1.5 overflow-x-auto">
        <div className="p-1.5 min-w-full inline-block align-middle">
          <div className="overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                  >
                    #
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                  >
                    Price
                  </th>
                  {/* <th
                    scope="col"
                    className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase"
                  >
                    1h %
                  </th> */}
                  <th
                    scope="col"
                    className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase"
                  >
                    24h %
                  </th>
                  {/* <th
                    scope="col"
                    className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase"
                  >
                    7d %
                  </th> */}
                  <th
                    scope="col"
                    className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase"
                  >
                    Volume(24h)
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase"
                  >
                    Market Cap
                  </th>
                </tr>
              </thead>
              {chartData.map((item, index) => (
                  <tbody className="divide-y divide-gray-200" key={index}>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                      {item.market_cap_rank}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                       <span className="flex items-center"> <img src={item.image} alt="" className="w-6 h-6 mr-2" />
                       {item.name}</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                      ${(item.current_price).toLocaleString()}
                    </td>
                    {/* <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                      <span className="text-green-500">+3.45%</span>
                    </td> */}
                    <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                      <span className="text-green-500">{item.price_change_percentage_24h}%</span>
                    </td>
                    {/* <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                      <span className="text-green-500">+2.3%</span>
                    </td> */}
                    <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                      ${(item.total_volume).toLocaleString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                      ${(item.market_cap).toLocaleString()}
                    </td>
                  </tr>
                </tbody>
              ))}
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CryptoTable
