import type { NextPage } from 'next'

import Landing from '../components/Landing'
import Footer from '../components/Footer'

const Home: NextPage = () => {
  return (
    <div className="w-full h-full flex flex-col">
     
     <Landing/>
     <Footer/>
    </div>
  )
}

export default Home
