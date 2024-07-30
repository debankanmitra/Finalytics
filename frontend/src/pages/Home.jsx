import CryptoTable from '../components/CryptoTable'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Newsfeed from '../components/Newsfeed'
// import List from "../components/List";

function Home() {
  return (
    <div className='bg-white'>
      <Hero />
      {/* <List /> */}
      <CryptoTable />
      <Newsfeed />
      <Footer />
    </div>
  )
}

export default Home
