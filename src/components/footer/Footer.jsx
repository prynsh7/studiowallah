import React from 'react'

const Footer = () => {
    return (
        <footer>
            <div className="container mx-auto">
                <div className="first row">
                    <div className="col-md-4">
                        <div className="full">
                            <div className="logo_footer">
                                <a href="#"><img width="120px" src="/images/logo1-removebg-preview.png" /></a>
                            </div>
                            <div className="information_f">
                                <p><strong>ADDRESS:</strong> 1K, 56, Block J, New Industrial Twp 1, New Industrial Township, Faridabad, Haryana 121001
</p>
                                <p><strong>TELEPHONE:</strong>9871045001</p>
                                <p><strong>EMAIL:</strong> studiowallah@gmail.com</p>
                                <p><strong>For Enquiry</strong>info@studiowallah.com</p>
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
                                <div className="widget_menu">
                            
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