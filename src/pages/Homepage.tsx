import React from 'react'
import Nav from '../components/Nav'
import HeroSection from '../components/HeroSection'
import Product from '../components/Product'
import Testimonial from '../components/Testimonial'
import ProductFeature from '../components/ProductFeature'

const Homepage = () => {
  return (
    <div>
        <Nav />
        <HeroSection />
        <Product />
        <Testimonial />
        <ProductFeature />
    </div>
  )
}

export default Homepage