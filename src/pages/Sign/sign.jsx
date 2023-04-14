import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import Signin from '../../pages/Sign/sign'
import ProductCard from '../../components/ProductCard/ProductCard'
import { ProductList } from '../../data/productList'
import { ROUTES } from '../../routes/RouterConfig'

const Contact = () => {
  return (
    <div>
        <Navbar/>
<div className=''>

<div className='text-center bg-[#f7444e] pt-[40px] pb-[40px]'>
   <h6 className='text-[42px] font-extrabold text-white text-capitalize'>Create your account</h6>
</div>
<div className='p-[70px] pr-[340px] pl-[340px]'>
<div className='border-[2px] drop-shadow rounded-[16px] p-[25px] justify-center flex items-center'>
  <div className='pl-[25px]'>
<div>
<h4 className='text-[42px] font-bold text-[#f7444e] uppercase mt-[15px] pr-0'>New here?</h4>
</div>
<div className='pt-[30px] pb-[20px] pr-0'>

<input className='border-2 w-[300px] h-[40px] rounded text-[14px] px-[15px]' name='email' placeholder='Enter Your Email Address' />
</div>
<div className='pb-[20px] pr-0'>
<input className='border-2  w-[300px] h-[40px] rounded px-[15px] text-[14px]' type='password' name='password' placeholder='Create Password' />
</div>
<div className='pr-0'>
<input className='border-2  w-[300px] h-[40px] rounded px-[15px] text-[14px]' type='password' name='password' placeholder='Confirm Password' />
</div>
<div className='btn-box pt-[20px] pb-[20px]'>
    <button className=' text-white p-2 w-[300px] btn1 bg-[#f7444e] font-bold rounded'>Sign in</button>
</div>
<div className='passforg pt-[5px]'>
 <h3 className='font-medium'>Already have an account?<h3 className='text-[#f7444e] underline font-bold mt-[6px]'><Link to="/Login">log-in</Link></h3></h3>
 </div>
 
 </div>
 <div className='ml-auto p-[15px] mr-0 mt-[40px] height-[90px] width-[100px]'>
 <img src="/images/25_low 1.png" alt="" />
</div>


</div>

</div>

</div>

<Footer/>
    </div>
  )
}

export default Contact