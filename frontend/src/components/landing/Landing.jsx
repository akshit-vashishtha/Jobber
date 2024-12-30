import React from 'react'
import Header from '../Header'
import Hero from './components/Hero'
import Footer from '../Footer'
export default function Landing() {

  return (
    <div className="h-screen bg-white">
      <div className="hero">
        <Hero/>
      </div>
    </div>
  )
}