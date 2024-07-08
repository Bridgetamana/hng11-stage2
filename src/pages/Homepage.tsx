import Nav from '../components/Nav'
import HeroSection from '../components/HeroSection'
import Product from '../components/Product'
import Testimonial from '../components/Testimonial'
import ProductFeature from '../components/ProductFeature'
import Footer from '../components/Footer'

const Homepage = () => {
  return (
    <div>
        <Nav />
        <HeroSection />
        <Product />
        <Testimonial />
        <ProductFeature />
        <Footer />
    </div>
  )
}

export default Homepage