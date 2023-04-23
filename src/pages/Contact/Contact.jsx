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
        <div className='text-center bg-[#f7444e] pt-[40px] pb-[40px]'>
   <h6 className='text-[42px] font-extrabold text-white text-capitalize'>Contact Us</h6>
</div>
<div className='big-box'>
  <div className='contactbox'>
<div className='inside-box   border-[2px] drop-shadow rounded-[16px]'>

        <div className="container mx-auto">
        <div>
<h4 className='text-[26px] font-bold text-[#f7444e] text-capitalize mt-[25px] pr-0 mb-[20px] ml-[260px]'>Any Query Contact Us</h4>
</div>
          <div className="">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label for="name" className="leading-7 text-sm text-gray-600">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <div className="relative">
                  <label for="name" className="leading-7 text-sm text-gray-600 mt-[15px]">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                  </div></div>
                         <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    for="email"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="number"
                    name="number"
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <div className="relative">
                  <label for="name" className="leading-7 text-sm text-gray-600 mt-[15px]">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
               </div>
              </div>
              <div className="p-2 w-1/2">
                      <div class="mt-[20px]">
                <label class="flex items-center ml-6">
              <input type="checkbox" class="form-checkbox h-5 w-5 text-gray-600"/>
              <span class="ml-2 text-gray-700">Commercial Display</span>
            </label>
            <label class="flex items-center ml-6 block">
              <input type="checkbox" class="form-checkbox h-5 w-5 text-gray-600"/>
              <span class="ml-2 text-gray-700">Interactive Panels</span>
            </label>
            <label class="flex items-center ml-6 block">
              <input type="checkbox" class="form-checkbox h-5 w-5 text-gray-600"/>
              <span class="ml-2 text-gray-700">VC with Whiteboard Solution</span>
            </label>
            <label class="flex items-center ml-6 block">
              <input type="checkbox" class="form-checkbox h-5 w-5 text-gray-600"/>
              <span class="ml-2 text-gray-700">AI Based Access Control</span>
            </label>
            <label class="flex items-center ml-6 block">
              <input type="checkbox" class="form-checkbox h-5 w-5 text-gray-600"/>
              <span class="ml-2 text-gray-700">Info kiosk with Wayfinding</span>
            </label>
                </div>
                </div>
              
                <div className="p-2 w-1/2">
              <div class="mt-[20px]">
                <label class="flex items-center ml-6">
              <input type="checkbox" class="form-checkbox h-5 w-5 text-gray-600"/>
              <span class="ml-2 text-gray-700">Digital Standee</span>
            </label>
            <label class="flex items-center ml-6 block">
              <input type="checkbox" class="form-checkbox h-5 w-5 text-gray-600"/>
              <span class="ml-2 text-gray-700">Touch Screen Kiosk</span>
            </label>
            <label class="flex items-center ml-6 block">
              <input type="checkbox" class="form-checkbox h-5 w-5 text-gray-600"/>
              <span class="ml-2 text-gray-700">Self Order and Qms</span>
            </label>
            <label class="flex items-center ml-6 block">
              <input type="checkbox" class="form-checkbox h-5 w-5 text-gray-600"/>
              <span class="ml-2 text-gray-700">Safety and Training</span>
            </label>
            <label class="flex items-center ml-6 block">
              <input type="checkbox" class="form-checkbox h-5 w-5 text-gray-600"/>
              <span class="ml-2 text-gray-700">Others</span>
            </label>
                </div></div>
<h2 className='mt-10px text-gray-500 ml-[10px] text-sm'>*Select the above options regarding your query and we will help you out</h2>
</div>
<div class="mt-[30px]">
      <label class="block text-gray-600 text-large  mb-2" for="message">
        Message
      </label>
      <textarea class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="message" rows="6" placeholder="Enter your message here"></textarea>
    </div>
    <div className='btn-box pt-[20px] pb-[20px] pl-[350px]'>
    <button className=' text-white p-2 w-[100px] btn1 bg-[#f7444e] font-bold rounded'>Send</button>
</div>
</div>
</div>
</div>
</div>
</div>
<Footer/>
    </div>
  )
}

export default Contact