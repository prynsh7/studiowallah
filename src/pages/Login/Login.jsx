import React from 'react'
import { useNavigate,Link } from 'react-router-dom'
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
        <div className='signin-page'>

<div className='text-center bg-[#f7444e] pt-[40px] pb-[40px]'>
   <h6 className='text-[42px] font-extrabold text-white text-capitalize'>Login to your account</h6>
</div>
<div className='big-box'>
<div className='inside-box   border-[2px] drop-shadow rounded-[16px] justify-center  items-center'>
 
<div className='image1'>
 <img src="/images/25_low 1.png" alt="" />
</div>
<div className='login-info pl-[25px] width-[50%]'>
<div>
<h4 className='text-[42px] font-bold text-[#f7444e] text-capitalize mt-[15px] pr-0'>Welcome</h4>
</div>
<div className='pt-[30px] pb-[20px] pr-0'>

<input className='border-2 w-[300px] h-[40px] rounded text-[14px] px-[15px]' name='email' placeholder='Enter Your Email Address' />
</div>
<div className='pr-0'>
<input className='border-2  w-[300px] h-[40px] rounded px-[15px] text-[14px]' type='password' name='password' placeholder='Enter Password' />
</div>
<h3 className='text-[#f7444e] mt-[20px]'><Link to="/password">forgot password?</Link></h3>
<div className='btn-box pt-[20px] pb-[20px]'>
    <button className=' text-white p-2 w-[300px] btn1 bg-[#f7444e] font-bold rounded'>Login</button>
</div>
<div className='passforg pt-[5px]'>
 <h3 className='font-medium'>Don't have an account?<h3 className='text-[#f7444e] underline font-bold mt-[6px]'><Link to="/sign">Sign-in</Link></h3></h3>
 </div>

 </div>
 <div className='image2 ml-auto p-[15px] mr-0 mt-[40px] height-[90px] width-[50%]'>
 <img src="/images/25_low 1.png" alt="" />
</div></div>
</div></div>
<Footer/>
    </div>
  )
}

export default Contact