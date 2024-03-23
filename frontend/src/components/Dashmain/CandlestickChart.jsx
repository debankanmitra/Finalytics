import { useState, useEffect } from 'react'
import Chart from 'react-apexcharts'

const candleannotations = {
  xaxis: [
    {
      x: new Date(1711101600000).getTime(),
      strokeDashArray: 0,
      label: {
        style: {
          color: '#000',
          background: '#d6c1db',
          fontSize: '12px',
        },
        text: 'engulfing',
      },
    },
    {
      x: new Date(1711117800000).getTime(),
      strokeDashArray: 0,
      label: {
        style: {
          color: '#000',
          background: '#d6c1db',
          fontSize: '12px',
        },
        text: 'reverse bull',
      },
    },
  ],
};

// const chartoptions = {
//   chart: {
//     type: 'candlestick',
//     height: 350,
//   },
//   title: {
//     text: 'CandleStick Chart',
//     align: 'left',
//   },
//   xaxis: {
//     type: 'datetime',
//   },
//   yaxis: {
//     tooltip: {
//       enabled: true,
//     },
//   },
//   annotations:candleannotations,

// }


const CandlestickChart = () => {
  const [chartannotations, setAnnotations] = useState()
  const [chartData, setChartData] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://127.0.0.1:8000')
      const data = await response.json()
      console.log('data is', data)
      setChartData(formatChartData(data))
    }
    fetchData()
  }, [])
  const formatChartData = (data) => {
    const formattedData = data?.map((item) => ({
      x: new Date(item.timestamp),
      y: [item.Open, item.High, item.Low, item.Close],
    }))

    const formattedAnnotations = data
      .filter((item) => item.Pattern)
      .map((item) => ({
        x: new Date(item.timestamp).getTime(),
        label: {
          style: {
            color: '#000',
            background: '#d6c1db',
            fontSize: '12px',
          },
          text: item.Pattern,
        },
      }))

    setAnnotations({ xaxis: formattedAnnotations })

    return [{ data: formattedData }]
  }
  console.log('candleannotations is', candleannotations)
  console.log('chartannotations is', chartannotations)
  const chartoptions = {
    chart: {
      type: 'candlestick',
      height: 350,
    },
    title: {
      text: 'CandleStick Chart',
      align: 'left',
    },
    xaxis: {
      type: 'datetime',
    },
    yaxis: {
      tooltip: {
        enabled: true,
      },
    },
    annotations:chartannotations,
  
  }

  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pt-7.5 pb-5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-8">
      <div className="flex flex-wrap items-start justify-between gap-3 sm:flex-nowrap">
        <div className="flex w-full flex-wrap gap-3 sm:gap-5">
          <div className="flex min-w-47.5">
            <span className="mt-1 mr-2 flex h-4 w-full max-w-4 items-center justify-center rounded-full border border-primary">
              <span className="block h-2.5 w-full max-w-2.5 rounded-full bg-primary"></span>
            </span>
            <div className="w-full">
              <p className="font-semibold text-primary">Total Revenue</p>
              <p className="text-sm font-medium">12.04.2022 - 12.05.2022</p>
            </div>
          </div>
          <div className="flex min-w-47.5">
            <span className="mt-1 mr-2 flex h-4 w-full max-w-4 items-center justify-center rounded-full border border-secondary">
              <span className="block h-2.5 w-full max-w-2.5 rounded-full bg-secondary"></span>
            </span>
            <div className="w-full">
              <p className="font-semibold text-secondary">Total Sales</p>
              <p className="text-sm font-medium">12.04.2022 - 12.05.2022</p>
            </div>
          </div>
        </div>
        <div className="flex w-full max-w-45 justify-end">
          <div className="inline-flex items-center rounded-md bg-whiter p-1.5 dark:bg-meta-4">
            <button className="rounded bg-white py-1 px-3 text-xs font-medium text-black shadow-card hover:bg-white hover:shadow-card dark:bg-boxdark dark:text-white dark:hover:bg-boxdark">
              Day
            </button>
            <button className="rounded py-1 px-3 text-xs font-medium text-black hover:bg-white hover:shadow-card dark:text-white dark:hover:bg-boxdark">
              Week
            </button>
            <button className="rounded py-1 px-3 text-xs font-medium text-black hover:bg-white hover:shadow-card dark:text-white dark:hover:bg-boxdark">
              Month
            </button>
          </div>
        </div>
      </div>

      <div>
        <div id="chartOne" className="-ml-5">
          {/* <ReactApexChart
						options={options}
						series={state.series}
						type="area"
						height={350}
					/> */}
          <Chart
            type="candlestick"
            height={400}
            options={chartoptions}
            series={chartData}
            annotations={candleannotations}
          />
        </div>
      </div>
    </div>
  )
}

export default CandlestickChart
