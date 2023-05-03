import React from 'react'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import ProductCard from '../../components/ProductCard/ProductCard'
import { ProductList } from '../../data/productList'
import { ROUTES } from '../../routes/RouterConfig'
import AOS from 'aos';
import 'aos/dist/aos.css'; // optional
import { useEffect } from 'react'

const categories = [
  "All",
  "Interactive Flat Panel",
  "Camera",
  "Microphones",
  "Tripods",
  "Lights",
  "Capture cards",
  "Smart Board Softwares",
]

const About = () => {


  const [selectedCategory, setSelectedCategory] = React.useState(categories[0])

  const [products, setProducts] = React.useState(ProductList)

  const navigate = useNavigate()

  const changeDir = (dir) => {
    navigate(dir)
  }
  useEffect(() => {
    AOS.init();
  }, [])


  useEffect(() => {
    if (selectedCategory === 'All') {
      setProducts(ProductList)
    } else {
      const filteredProducts = ProductList.filter((item) => item.category === selectedCategory)
      setProducts(filteredProducts)
    }
  }, [selectedCategory])


  const [searchParams] = useSearchParams()

  useEffect(() => {
    console.log(searchParams)
    if (searchParams?.get("category")) {
      setSelectedCategory(searchParams?.get("category"))
    }
  }, [searchParams])



  return (
    <div className='About'>
      <Navbar />
      
      <div data-aos="fade-right" className="container  py-[100px] bg-[#f8f8f8]">
        <div className="heading_container heading_center">
          <h2>
            Our <span>Products</span>
          </h2>
        </div>
     
      <div className='flex gap-[20px] scroll-hide items-center w-[fit-content] m-auto max-w-[100%] justify-start mt-[20px] overflow-scroll'>
      {
        categories.map((item, index) => (
          <div className={"px-[20px] py-[7px] border-[1px] border-[#000]/[0.7] text-[16px] whitespace-nowrap cursor-pointer rounded-[20px]" + (selectedCategory == item ? " bg-[#f7444e] text-[#fff] font-medium" : " ") }
          onClick={() => setSelectedCategory(item)}
          >{item}</div>
        ))
      }
      </div>
     
      <div className='flex '>
        <p className='text-right w-[100%] mt-[30px] pr-[20px] text-[#f7444e] font-medium'>{products.length} products</p>
      </div>
      <div className="productlist product_section container mx-auto gap-[20px]">
        {
          products && products.map((item, index) => (<ProductCard item={item} />))
        }
        {
          products.length == 0 && <div className="text-center w-[100%] col-span-3 text-[18px] mt-[45px] font-semibold ">No products found</div>
        }
      </div>

      </div>

      <Footer />
    </div>
  )
}

export default About