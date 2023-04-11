import React from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import ProductCard from '../../components/ProductCard/ProductCard'
import { ProductList } from '../../data/productList'
import { ROUTES } from '../../routes/RouterConfig'

const Contact = () => {
  return (
    <div>
        <Navbar/>
<div className=''>
<div className='text-center bg-[#f7444e] pt-[40px] pb-[40px]'>
   <h6 className='text-[42px] font-extrabold text-white text-capitalize'>Log in to your account</h6>
</div>


<div className='text-center pt-[40px] pb-[20px]'>
<input className='border-2 w-[25%] h-[40px] rounded px-[15px] text-[14px]' name='email' placeholder='Enter Your Email Address' />
</div>
<div className='text-center '>
<input className='border-2  w-[25%] h-[40px] rounded px-[15px] text-[14px]' type='password' name='password' placeholder='Enter Password' />
</div>


<div className='text-center pt-[30px] pb-[30px]'>
    <button className='border-2 text-white p-2 w-[120px] rounded bg-[#f7444e]'>Login</button>
</div>
</div>


<Footer/>
    </div>
  )
}

export default Contact