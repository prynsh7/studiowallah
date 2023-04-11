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
   <h6 className='text-[42px] font-extrabold text-white text-capitalize'>Sign in to your account</h6>
</div>
<div className='border-4 border-black-300 p-[20px] height-[200px] text-center'>

<div>
<h4 className='text-[42px] font-bold text-[#f7444e] text-capitalize mt-[15px]'>NEW HERE?</h4>
</div>
<div className='pt-[30px] pb-[20px]'>

<input className='border-2 w-[25%] h-[40px] rounded px-[15px] text-[14px]' name='email' placeholder='Enter Your Email Address' />
</div>
<div className=' '>
<input className='border-2  w-[25%] h-[40px] rounded px-[15px] text-[14px]' type='password' name='password' placeholder='Create Password' />
</div>
<div className=' '>
<input className='border-2  w-[25%] h-[40px] rounded px-[15px] text-[14px]' type='password' name='password' placeholder='Confirm Password' />
</div>
<div className='passforg pt-[30px]'>
 <h3 className='mt-[10px] font-medium'>Already have an account?<h3 className='text-[#f7444e] underline font-bold mt-[6px]'><a href='#' className='text-[#f7444e]'>login</a></h3></h3>
 </div>
</div>

<div className='justify-end'>
 <img src="/images/sign.png" alt="" />
</div>
<div className='text-center pt-[30px] pb-[30px]'>
    <button className='border-2 text-white p-2 w-[120px] rounded bg-[#f7444e]'>Sign-in</button>
</div>

</div>

<Footer/>
    </div>
  )
}

export default Contact