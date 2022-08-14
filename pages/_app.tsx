import '../styles/globals.css'
import {useState, useEffect} from 'react'
import type { AppProps } from 'next/app'

import Navbar from '../components/Navbar'

const MyApp = ({ Component, pageProps }: AppProps) => {

  const [isSSR, setIsSSR] = useState(true)

  useEffect( () => {
    setIsSSR(false)
  },[])

  if(isSSR) return null;

  return(
    <div>
      <Navbar />
      {/* flex gap-6 md:gap-20 */}
      <div>
        {/* h-92vh overflox-hidden xl hover:overflow-auto */}
        <div>
          Sidebar 
        </div>  
        <div>
          <Component {...pageProps} />
        </div>
      </div>
    </div>
  )
}

export default MyApp
