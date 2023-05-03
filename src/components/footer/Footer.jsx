import React from 'react'

const Footer = () => {
    return (
        <footer>
            <div className="container mx-auto ">
                <div className="first row">
                    <div className="col-md-4">
                        <div className="full">
                            <div className="logo_footer">
                                <a href="#"><img width="120px" src="/images/logo1-removebg-preview.png" /></a>
                            </div>
                            <div className="col-md-5 text-[white] text-xl pb-[20px]">
                                <a href="#"><i class="fa fa-instagram"></i></a>
                                <a href="#"><i class="fa fa-youtube"></i></a>
                                <a href="#"><i class="fa fa-facebook"></i></a>
                                <a href="#"><i class="fa fa-linkedin"></i></a>
                                </div>
                            <div className="information_f">
                                <p><strong>ADDRESS : </strong> 1K, 56, Block J, New Industrial Twp 1, New Industrial Township, Faridabad, <br /> Haryana 121001
</p>
                                <p><strong>TELEPHONE : </strong>9871045001</p>
                                <p><strong>EMAIL : </strong> studiowallah@gmail.com</p>
                                <p><strong>For Enquiry : </strong>info@studiowallah.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="second row">
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
                                            <div className='products'>
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
                            </div>
                            <div className="col-md-5">
                                <div className="widget_menu text-[white] text-xl products">
                                <h3>Our Location</h3>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3510.1704014231714!2d77.30282299999999!3d28.383920800000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cdc3c102838d9%3A0x5d4739f5eabd27b5!2s1k%2C%2056%2C%20Block%20J%2C%20New%20Industrial%20Twp%201%2C%20New%20Industrial%20Township%2C%20Faridabad%2C%20Haryana%20121001!5e0!3m2!1sen!2sin!4v1683132639899!5m2!1sen!2sin" width={400} height={300} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="whatsappIcon" style={{ position: 'fixed', right: '50px' }}>
            </div> */}
        </footer>
    )
}

export default Footer