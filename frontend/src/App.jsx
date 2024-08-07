import { useEffect, useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'

import Loader from './components/Loader'
import PageTitle from './components/PageTitle'
import ECommerce from './pages/ECommerce'
import Home from './pages/Home'
// import CryptoTable from './components/CryptoTable'

function App() {
  const [loading, setLoading] = useState(true)
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000)
  }, [])

  return loading ? (
    <Loader />
  ) : (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/table" element={<CryptoTable />} /> */}
      <Route
        path="/dashboard/:id"
        index
        element={
          <>
            <PageTitle title="Crypto Dashboard" />
            <ECommerce />
          </>
        }
      />
    </Routes>
  )
}

export default App
