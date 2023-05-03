import React from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import ProductCard from '../../components/ProductCard/ProductCard'
import { ProductList } from '../../data/productList'
import { ROUTES } from '../../routes/RouterConfig'
import { withFirestore } from "react-firestore";
import { ToastContainer, toast } from 'react-toastify';


const Contact = ({ firestore }) => {

  const addItem = name => {

    if (!info.name || !info.email || !info.phone || !info.company || !info.message) {
      toast.error("Please fill all the fields");
      return;
    }
    firestore.collection("contact_form").add({ ...info }).then(() => {
      toast.success("Your message has been sent successfully");
      setInfo({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
      });
    }).catch((error) => {
      toast.error("Something went wrong");
      console.log(error);
    }
    );
  };

  const [info, setInfo] = React.useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    query: [],
  });

  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  const handleCheckBox = (e) => {
    const { name, checked } = e.target;

    const checkArr = info["query"];

    if (checked) {
      if (checkArr.includes(name)) {
        return;
      }
      checkArr.push(name);
      setInfo({ ...info, "query": checkArr });
    } else {
      const index = checkArr.indexOf(name);
      checkArr.splice(index, 1);
      setInfo({ ...info, "query": checkArr });
    }
  };

  return (
    <div>
      <Navbar />
      <ToastContainer />
      <div  className="heading_container heading_center text-center pt-[45px]">
            <h2>
            Contact <span>Us</span>
            </h2>
      </div>
      <div className='big-box'>
        <div className='contactbox'>
          <div className='inside-box   border-[2px] drop-shadow rounded-[16px]'>

            <div className="container mx-auto">
              <div>
                <h4 className='text-[26px] font-bold text-[#f7444e] text-center text-capitalize mt-[25px] pr-0 mb-[20px] '>Any Query Contact Us</h4>
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
                        value={info.name}
                        onChange={handleChange}
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
                        value={info.email}
                        onChange={handleChange}
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
                        name="phone"
                        value={info.phone}
                        onChange={handleChange}
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
                        name="company"
                        value={info.company}
                        onChange={handleChange}
                        className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                  </div>
                  <div className="p-2 w-1/2">
                    <div class="mt-[20px]">
                      <label class="flex items-center ml-6">
                        <input type="checkbox"
                          onChange={handleCheckBox}
                          name='commercial_display' class="form-checkbox h-5 w-5 text-gray-600" />
                        <span class="ml-2 text-gray-700">Commercial Display</span>
                      </label>
                      <label class="flex items-center ml-6 block">
                        <input
                          name='interactive_panel'
                          type="checkbox"
                          onChange={handleCheckBox}
                          class="form-checkbox h-5 w-5 text-gray-600" />
                        <span class="ml-2 text-gray-700">Interactive Panels</span>
                      </label>
                      <label class="flex items-center ml-6 block">
                        <input type="checkbox"
                          onChange={handleCheckBox}

                          name='video_wall'
                          class="form-checkbox h-5 w-5 text-gray-600" />
                        <span class="ml-2 text-gray-700">VC with Whiteboard Solution</span>
                      </label>
                      <label class="flex items-center ml-6 block">
                        <input type="checkbox"
                          onChange={handleCheckBox}

                          name='video_conference'
                          class="form-checkbox h-5 w-5 text-gray-600" />
                        <span class="ml-2 text-gray-700">AI Based Access Control</span>
                      </label>
                      <label class="flex items-center ml-6 block">
                        <input type="checkbox"
                          onChange={handleCheckBox}

                          name='wayfinding'
                          class="form-checkbox h-5 w-5 text-gray-600" />
                        <span class="ml-2 text-gray-700">Info kiosk with Wayfinding</span>
                      </label>
                    </div>
                  </div>

                  <div className="p-2 w-1/2">
                    <div class="mt-[20px]">
                      <label class="flex items-center ml-6">
                        <input type="checkbox"
                          onChange={handleCheckBox}

                          name='digital_standee'
                          class="form-checkbox h-5 w-5 text-gray-600" />
                        <span class="ml-2 text-gray-700">Digital Standee</span>
                      </label>
                      <label class="flex items-center ml-6 block">
                        <input type="checkbox"
                          onChange={handleCheckBox}

                          name='touch_screen_kiosk'
                          class="form-checkbox h-5 w-5 text-gray-600" />
                        <span class="ml-2 text-gray-700">Touch Screen Kiosk</span>
                      </label>
                      <label class="flex items-center ml-6 block">
                        <input
                          name='self_order_qms'
                          type="checkbox"
                          onChange={handleCheckBox}
                          class="form-checkbox h-5 w-5 text-gray-600" />
                        <span class="ml-2 text-gray-700">Self Order and Qms</span>
                      </label>
                      <label class="flex items-center ml-6 block">
                        <input
                          name='safety_training'
                          type="checkbox"
                          onChange={handleCheckBox}
                          class="form-checkbox h-5 w-5 text-gray-600" />
                        <span class="ml-2 text-gray-700">Safety and Training</span>
                      </label>
                      <label class="flex items-center ml-6 block">
                        <input
                          name='others'
                          type="checkbox"
                          onChange={handleCheckBox}
                          class="form-checkbox h-5 w-5 text-gray-600" />
                        <span class="ml-2 text-gray-700">Others</span>
                      </label>
                    </div></div>
                  <h2 className='mt-10px text-gray-500 ml-[10px] text-sm'>*Select the above options regarding your query and we will help you out</h2>
                </div>
                <div class="mt-[30px]">
                  <label class="block text-gray-600 text-large  mb-2" for="message">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={info.message}
                    onChange={handleChange}
                    class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="message" rows="6" placeholder="Enter your message here"></textarea>
                </div>
                <div className='btn-box pt-[20px] pb-[20px] flex justify-center'>
                  <button className=' text-white p-2 w-[100px] btn1 bg-[#f7444e] font-bold rounded'
                    onClick={() => addItem()}
                  >Send</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div  className="heading_container heading_center text-center pt-[45px]">
            <h2>
            Our <span>Location</span>
            </h2>
      </div>
        <div className='flex justify-center items-center pb-[60px]'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3510.1704014231714!2d77.30282299999999!3d28.383920800000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cdc3c102838d9%3A0x5d4739f5eabd27b5!2s1k%2C%2056%2C%20Block%20J%2C%20New%20Industrial%20Twp%201%2C%20New%20Industrial%20Township%2C%20Faridabad%2C%20Haryana%20121001!5e0!3m2!1sen!2sin!4v1683132639899!5m2!1sen!2sin" width={600} height={450} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
      </div>
      </div>
      
      <Footer />
    </div>
  )
}

export default withFirestore(Contact)