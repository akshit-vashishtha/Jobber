import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Footer from './components/Footer'
export default function Landing() {

  return (
    <div className="h-screen bg-white">

      <div className="header">
        <Header/>
      </div>

      <div className="hero h-screen">
        <Hero/>
      </div>
        <div>
            <Footer/>
        </div>

    </div>
  )
}
