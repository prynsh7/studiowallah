import React from 'react'

const Footer = () => {
    return (
        <footer>
            <div className="container mx-auto">
                <div className="row">
                    <div className="col-md-4">
                        <div className="full">
                            <div className="logo_footer">
                                <a href="#"><img width="120px" src="/images/logo1-removebg-preview.png" /></a>
                            </div>
                            <div className="information_f">
                                <p><strong>ADDRESS:</strong> 28 White tower, Street Name New York City, USA</p>
                                <p><strong>TELEPHONE:</strong> +91 987 654 3210</p>
                                <p><strong>EMAIL:</strong> yourmain@gmail.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="row">
                            <div className="col-md-7">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="widget_menu">
                                            <h3>Menu</h3>
                                            <ul>
                                                <li><a href="#">Home</a></li>
                                                <li><a href="#">About</a></li>
                                                <li><a href="#">Services</a></li>
                                                <li><a href="#">Testimonial</a></li>
                                                <li><a href="#">Contact</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="widget_menu">
                                            <h3>Products</h3>
                                            <ul>
                                                <li><a href="#">Camera</a></li>
                                                <li><a href="#">Mics</a></li>
                                                <li><a href="#">Tripods</a></li>
                                                <li><a href="#">Others</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-5">
                                <div className="widget_menu">
                                    <div className="form_sub">
                                        <div className='flex' >
                                            <input type="text" placeholder='Enter email' className='border-[1px] p-[10px]' />
                                            <button className='p-[10px] bg-[red] text-[#fff]'>Subscribe</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="whatsappIcon" style={{ position: 'fixed', right: '50px' }}>
            </div>
        </footer>
    )
}

export default Footer