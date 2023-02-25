import React from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import ProductCard from '../../components/ProductCard/ProductCard'
import { ProductList } from '../../data/productList'
import { ROUTES } from '../../routes/RouterConfig'

const About = () => {

  const navigate = useNavigate()

  const changeDir = (dir) => {
    navigate(dir)
  }

  return (
    <div className='About'>
      <Navbar />
      
      <div className="container  py-[100px] ">
        <div className="heading_container heading_center">
          <h2>
            Our <span>products</span>
          </h2>
        </div>
     
      <div className="grid grid-cols-3 product_section container mx-auto gap-[20px]">
        {
          ProductList && ProductList.map((item, index) => (<ProductCard item={item} />))
        }
      </div>

      </div>

      <Footer />
    </div>
  )
}

export default About