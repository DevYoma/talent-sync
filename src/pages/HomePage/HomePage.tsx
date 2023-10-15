import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Companies from '../../mini-components/Companies/Companies'
import Hero from '../../mini-components/Hero/Hero'
import Shopify from '../../mini-components/Shopify/Shopify'
import Why from '../../mini-components/Why/Why'
import './HomePage.scss'
import Faq from '../../mini-components/Faq/Faq'
import Ready from '../../mini-components/Ready/Ready'
import Links from '../../mini-components/Links/Links'
import Footer from '../../mini-components/Footer/Footer'

const HomePage = () => {
  return (
    <React.Fragment>
      <div className="homepage">
        {/* Navbar */}
        <Navbar />

        {/* Hero Header */}
        <Hero />
        <Companies />
        <Why />
      </div>
      <Shopify />
      <Faq />
      <Ready />
      <Links />
      <Footer />
    </React.Fragment>
  )
}

export default HomePage