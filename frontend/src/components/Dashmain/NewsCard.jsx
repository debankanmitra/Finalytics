const NewsCard = () => {
  return (
    <div className="col-span-12 rounded-2xl border border-stroke bg-white p-7.5 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-4">
      <div className="mb-4 justify-between gap-4 sm:flex">
        <h4 className="text-xl font-semibold text-black dark:text-white">
          News of this week
        </h4>
        <div></div>
      </div>
    </div>
  )
}

export default NewsCard
