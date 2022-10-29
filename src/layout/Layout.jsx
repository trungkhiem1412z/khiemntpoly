import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Routers from '../routes/Routers'

const Layout = () => {
  return (
    <div>
        <Header />
        <div>
            <Routers />
        </div>
        <Footer />
    </div>
  )
}

export default Layout