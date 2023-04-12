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
   <h6 className='text-[42px] font-extrabold text-white text-capitalize'>Login to your account</h6>
</div>
<div className='p-[40px] pr-[450px] pl-[450px]'>
<div className='border-4 border-black-300 p-[20px] flex'>
  <div className='pl-[25px]'>
<div>
<h4 className='text-[42px] font-bold text-[#f7444e] text-capitalize mt-[15px] pr-0'>New Here?</h4>
</div>
<div className='pt-[30px] pb-[20px] pr-0'>

<input className='border-2 w-[300px] h-[40px] rounded text-[14px] px-[15px]' name='email' placeholder='Enter Your Email Address' />
</div>
<div className='pr-0'>
<input className='border-2  w-[300px] h-[40px] rounded px-[15px] text-[14px]' type='password' name='password' placeholder='Create Password' />
</div>
<div className='pr-0'>
<input className='border-2  w-[300px] h-[40px] rounded px-[15px] text-[14px]' type='password' name='password' placeholder='Confirm Password' />
</div>
<div className='passforg pt-[30px]'>
 <h3 className='mt-[10px] font-medium'>Already have an account?<h3 className='text-[#f7444e] underline font-bold mt-[6px]'><a href='' className='text-[#f7444e]'>login</a></h3></h3>
 </div>
 <div className=' pt-[30px] pb-[30px]'>
    <button className='text-white p-2 w-[120px] rounded-full bg-[#f7444e]'>Sign-in</button>
</div>
 </div>
 <div className='ml-auto p-[15px] mr-0 mt-[40px] height-[90px] width-[100px]'>
 <img src="/images/signin.png" alt="" />
</div>


</div>

</div>

</div>

<Footer/>
    </div>
  )
}

export default Contact