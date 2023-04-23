import React, { useEffect } from 'react'
import { useNavigate} from 'react-router-dom'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import ProductCard from '../../components/ProductCard/ProductCard'
import { ProductList } from '../../data/productList'
import { ROUTES } from '../../routes/RouterConfig'
import Slider from "react-slick";
import AOS from 'aos';
import 'aos/dist/aos.css'; // optional

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  useEffect(() => {
    AOS.init();
  }, [])
  const navigate = useNavigate()

  const changeDir = (dir) => {
    navigate(dir)
  }
    return (
   
    <div>
      <div className="hero_area">
        {/* header section strats */}
        <Navbar />
        {/* end header section */}
        {/* slider section */}
        <section className="slider_section gap-7" >
          <div id="customCarousel1" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="container ">
                  <div className="row">
                    <div className="col-md-7 col-lg-6 ">
                      <div className="detail-box box-res">
                        <h1>
                          <span>
                            Sale 20% Off
                          </span>
                          <br />
                          On Everything
                        </h1>
                        <p>
                      
                          Explicabo esse amet tempora quibusdam laudantium, laborum eaque magnam fugiat hic? Esse dicta aliquid error repudiandae earum suscipit fugiat molestias, veniam, vel architecto veritatis delectus repellat modi impedit sequi.
                        </p>
                        <div className="image1 col-md-5 col-lg-6 ">
                      <div className="detail-box">
                        <img className='banner-img' src="/images/banner1.png" alt="" />
                      </div>
                    </div>
                        <div className="btn-box">
                          <a href className="btn1 bg-[#f7444e]">
                            Shop Now
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="image2 col-md-5 col-lg-6 ">
                      <div className="detail-box">
                        <img className='banner-img' src="/images/banner1.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item ">

                <div className="container ">
                  <div className="row">
                    <div className="col-md-7 col-lg-6 ">
                      <div className="detail-box">
                        <h1>
                          <span>
                            Sale 20% Off
                          </span>
                          <br />
                          On Everything
                        </h1>
                        <p>
                          Explicabo esse amet tempora quibusdam laudantium, laborum eaque magnam fugiat hic? Esse dicta aliquid error repudiandae earum suscipit fugiat molestias, veniam, vel architecto veritatis delectus repellat modi impedit sequi.
                        </p>
                        <div className="image1 col-md-5 col-lg-6 ">
                      <div className="detail-box">
                        <img className='banner-img' src="/images/banner1.png" alt="" />
                      </div>
                    </div>
                        <div className="btn-box">
                          <a href className="btn1 bg-[#f7444e]">
                            Shop Now
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="image2 col-md-5 col-lg-6 ">
                      <div className="detail-box">
                        <img className='banner-img' src="/images/banner1.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">

                <div className="container ">
                  <div className="row">
                    <div className="col-md-7 col-lg-6 ">
                      <div className="detail-box">
                        <h1>
                          <span>
                            Sale 20% Off
                          </span>
                          <br />
                          On Everything
                        </h1>
                        <p>
                          Explicabo esse amet tempora quibusdam laudantium, laborum eaque magnam fugiat hic? Esse dicta aliquid error repudiandae earum suscipit fugiat molestias, veniam, vel architecto veritatis delectus repellat modi impedit sequi.
                        </p>
                        <div className="image1 col-md-5 col-lg-6 ">
                      <div className="detail-box">
                        <img className='banner-img' src="/images/banner1.png" alt="" />
                      </div>
                    </div>
                        <div className="btn-box">
                          <a href className="btn1 bg-[#f7444e]">
                            Shop Now
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="image2 col-md-5 col-lg-6 ">
                      <div className="detail-box">
                        <img className='banner-img' src="/images/banner1.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
            <div className="container carousel-res">
              <ol className="carousel-indicators">
                <li data-target="#customCarousel1" data-slide-to={0} className="active" />
                <li data-target="#customCarousel1" data-slide-to={1} />
                <li data-target="#customCarousel1" data-slide-to={2} />
              </ol>
            </div>
          </div>
        </section>
        {/* end slider section */}
      </div>
      {/* why section */}
      <section data-aos="fade-left" className="why_section layout_padding">
        <div className="container">
          <div className="heading_container heading_center">
            <h2>
              Why Shop <span>With Us</span> 
            </h2>
            
          </div>
          <div className="shopus row">
            <div className="col-md-4">
              <div className="box ">
                <div className="img-box">
                  <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style={{ enableBackground: 'new 0 0 512 512' }} xmlSpace="preserve">
                    <g>
                      <g>
                        <path d="M476.158,231.363l-13.259-53.035c3.625-0.77,6.345-3.986,6.345-7.839v-8.551c0-18.566-15.105-33.67-33.67-33.67h-60.392
                                V110.63c0-9.136-7.432-16.568-16.568-16.568H50.772c-9.136,0-16.568,7.432-16.568,16.568V256c0,4.427,3.589,8.017,8.017,8.017
                                c4.427,0,8.017-3.589,8.017-8.017V110.63c0-0.295,0.239-0.534,0.534-0.534h307.841c0.295,0,0.534,0.239,0.534,0.534v145.372
                                c0,4.427,3.589,8.017,8.017,8.017c4.427,0,8.017-3.589,8.017-8.017v-9.088h94.569c0.008,0,0.014,0.002,0.021,0.002
                                c0.008,0,0.015-0.001,0.022-0.001c11.637,0.008,21.518,7.646,24.912,18.171h-24.928c-4.427,0-8.017,3.589-8.017,8.017v17.102
                                c0,13.851,11.268,25.119,25.119,25.119h9.086v35.273h-20.962c-6.886-19.883-25.787-34.205-47.982-34.205
                                s-41.097,14.322-47.982,34.205h-3.86v-60.393c0-4.427-3.589-8.017-8.017-8.017c-4.427,0-8.017,3.589-8.017,8.017v60.391H192.817
                                c-6.886-19.883-25.787-34.205-47.982-34.205s-41.097,14.322-47.982,34.205H50.772c-0.295,0-0.534-0.239-0.534-0.534v-17.637
                                h34.739c4.427,0,8.017-3.589,8.017-8.017s-3.589-8.017-8.017-8.017H8.017c-4.427,0-8.017,3.589-8.017,8.017
                                s3.589,8.017,8.017,8.017h26.188v17.637c0,9.136,7.432,16.568,16.568,16.568h43.304c-0.002,0.178-0.014,0.355-0.014,0.534
                                c0,27.996,22.777,50.772,50.772,50.772s50.772-22.776,50.772-50.772c0-0.18-0.012-0.356-0.014-0.534h180.67
                                c-0.002,0.178-0.014,0.355-0.014,0.534c0,27.996,22.777,50.772,50.772,50.772c27.995,0,50.772-22.776,50.772-50.772
                                c0-0.18-0.012-0.356-0.014-0.534h26.203c4.427,0,8.017-3.589,8.017-8.017v-85.511C512,251.989,496.423,234.448,476.158,231.363z
                                M375.182,144.301h60.392c9.725,0,17.637,7.912,17.637,17.637v0.534h-78.029V144.301z M375.182,230.881v-52.376h71.235
                                l13.094,52.376H375.182z M144.835,401.904c-19.155,0-34.739-15.583-34.739-34.739s15.584-34.739,34.739-34.739
                                c19.155,0,34.739,15.583,34.739,34.739S163.99,401.904,144.835,401.904z M427.023,401.904c-19.155,0-34.739-15.583-34.739-34.739
                                s15.584-34.739,34.739-34.739c19.155,0,34.739,15.583,34.739,34.739S446.178,401.904,427.023,401.904z M495.967,299.29h-9.086
                                c-5.01,0-9.086-4.076-9.086-9.086v-9.086h18.171V299.29z" />
                      </g>
                    </g>
                    <g>
                      <g>
                        <path d="M144.835,350.597c-9.136,0-16.568,7.432-16.568,16.568c0,9.136,7.432,16.568,16.568,16.568
                                c9.136,0,16.568-7.432,16.568-16.568C161.403,358.029,153.971,350.597,144.835,350.597z" />
                      </g>
                    </g>
                    <g>
                      <g>
                        <path d="M427.023,350.597c-9.136,0-16.568,7.432-16.568,16.568c0,9.136,7.432,16.568,16.568,16.568
                                c9.136,0,16.568-7.432,16.568-16.568C443.591,358.029,436.159,350.597,427.023,350.597z" />
                      </g>
                    </g>
                    <g>
                      <g>
                        <path d="M332.96,316.393H213.244c-4.427,0-8.017,3.589-8.017,8.017s3.589,8.017,8.017,8.017H332.96
                                c4.427,0,8.017-3.589,8.017-8.017S337.388,316.393,332.96,316.393z" />
                      </g>
                    </g>
                    <g>
                      <g>
                        <path d="M127.733,282.188H25.119c-4.427,0-8.017,3.589-8.017,8.017s3.589,8.017,8.017,8.017h102.614
                                c4.427,0,8.017-3.589,8.017-8.017S132.16,282.188,127.733,282.188z" />
                      </g>
                    </g>
                    <g>
                      <g>
                        <path d="M278.771,173.37c-3.13-3.13-8.207-3.13-11.337,0.001l-71.292,71.291l-37.087-37.087c-3.131-3.131-8.207-3.131-11.337,0
                                c-3.131,3.131-3.131,8.206,0,11.337l42.756,42.756c1.565,1.566,3.617,2.348,5.668,2.348s4.104-0.782,5.668-2.348l76.96-76.96
                                C281.901,181.576,281.901,176.501,278.771,173.37z" />
                      </g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                  </svg>
                </div>
                <div className="detail-box">
                  <h5>
                    Fast Delivery
                  </h5>
                  <p>
                    variations of passages of Lorem Ipsum available
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="box ">
                <div className="img-box">
                  <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 490.667 490.667" style={{ enableBackground: 'new 0 0 490.667 490.667' }} xmlSpace="preserve">
                    <g>
                      <g>
                        <path d="M138.667,192H96c-5.888,0-10.667,4.779-10.667,10.667V288c0,5.888,4.779,10.667,10.667,10.667s10.667-4.779,10.667-10.667
                                v-74.667h32c5.888,0,10.667-4.779,10.667-10.667S144.555,192,138.667,192z" />
                      </g>
                    </g>
                    <g>
                      <g>
                        <path d="M117.333,234.667H96c-5.888,0-10.667,4.779-10.667,10.667S90.112,256,96,256h21.333c5.888,0,10.667-4.779,10.667-10.667
                                S123.221,234.667,117.333,234.667z" />
                      </g>
                    </g>
                    <g>
                      <g>
                        <path d="M245.333,0C110.059,0,0,110.059,0,245.333s110.059,245.333,245.333,245.333s245.333-110.059,245.333-245.333
                                S380.608,0,245.333,0z M245.333,469.333c-123.52,0-224-100.48-224-224s100.48-224,224-224s224,100.48,224,224
                                S368.853,469.333,245.333,469.333z" />
                      </g>
                    </g>
                    <g>
                      <g>
                        <path d="M386.752,131.989C352.085,88.789,300.544,64,245.333,64s-106.752,24.789-141.419,67.989
                                c-3.691,4.587-2.965,11.307,1.643,14.997c4.587,3.691,11.307,2.965,14.976-1.643c30.613-38.144,76.096-60.011,124.8-60.011
                                s94.187,21.867,124.779,60.011c2.112,2.624,5.205,3.989,8.32,3.989c2.368,0,4.715-0.768,6.677-2.347
                                C389.717,143.296,390.443,136.576,386.752,131.989z" />
                      </g>
                    </g>
                    <g>
                      <g>
                        <path d="M376.405,354.923c-4.224-4.032-11.008-3.861-15.061,0.405c-30.613,32.235-71.808,50.005-116.011,50.005
                                s-85.397-17.771-115.989-50.005c-4.032-4.309-10.816-4.437-15.061-0.405c-4.309,4.053-4.459,10.816-0.405,15.083
                                c34.667,36.544,81.344,56.661,131.456,56.661s96.789-20.117,131.477-56.661C380.864,365.739,380.693,358.976,376.405,354.923z" />
                      </g>
                    </g>
                    <g>
                      <g>
                        <path d="M206.805,255.723c15.701-2.027,27.861-15.488,27.861-31.723c0-17.643-14.357-32-32-32h-21.333
                                c-5.888,0-10.667,4.779-10.667,10.667v42.581c0,0.043,0,0.107,0,0.149V288c0,5.888,4.779,10.667,10.667,10.667
                                S192,293.888,192,288v-16.917l24.448,24.469c2.091,2.069,4.821,3.115,7.552,3.115c2.731,0,5.461-1.045,7.531-3.136
                                c4.16-4.16,4.16-10.923,0-15.083L206.805,255.723z M192,234.667v-21.333h10.667c5.867,0,10.667,4.779,10.667,10.667
                                s-4.8,10.667-10.667,10.667H192z" />
                      </g>
                    </g>
                    <g>
                      <g>
                        <path d="M309.333,277.333h-32v-64h32c5.888,0,10.667-4.779,10.667-10.667S315.221,192,309.333,192h-42.667
                                c-5.888,0-10.667,4.779-10.667,10.667V288c0,5.888,4.779,10.667,10.667,10.667h42.667c5.888,0,10.667-4.779,10.667-10.667
                                S315.221,277.333,309.333,277.333z" />
                      </g>
                    </g>
                    <g>
                      <g>
                        <path d="M288,234.667h-21.333c-5.888,0-10.667,4.779-10.667,10.667S260.779,256,266.667,256H288
                                c5.888,0,10.667-4.779,10.667-10.667S293.888,234.667,288,234.667z" />
                      </g>
                    </g>
                    <g>
                      <g>
                        <path d="M394.667,277.333h-32v-64h32c5.888,0,10.667-4.779,10.667-10.667S400.555,192,394.667,192H352
                                c-5.888,0-10.667,4.779-10.667,10.667V288c0,5.888,4.779,10.667,10.667,10.667h42.667c5.888,0,10.667-4.779,10.667-10.667
                                S400.555,277.333,394.667,277.333z" />
                      </g>
                    </g>
                    <g>
                      <g>
                        <path d="M373.333,234.667H352c-5.888,0-10.667,4.779-10.667,10.667S346.112,256,352,256h21.333
                                c5.888,0,10.667-4.779,10.667-10.667S379.221,234.667,373.333,234.667z" />
                      </g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                  </svg>
                </div>
                <div className="detail-box">
                  <h5>
                    Free Shiping
                  </h5>
                  <p>
                    variations of passages of Lorem Ipsum available
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="box ">
                <div className="img-box">
                  <svg id="_30_Premium" height={512} viewBox="0 0 512 512" width={512} xmlns="http://www.w3.org/2000/svg" data-name="30_Premium">
                    <g id="filled">
                      <path d="m252.92 300h3.08a124.245 124.245 0 1 0 -4.49-.09c.075.009.15.023.226.03.394.039.789.06 1.184.06zm-96.92-124a100 100 0 1 1 100 100 100.113 100.113 0 0 1 -100-100z" />
                      <path d="m447.445 387.635-80.4-80.4a171.682 171.682 0 0 0 60.955-131.235c0-94.841-77.159-172-172-172s-172 77.159-172 172c0 73.747 46.657 136.794 112 161.2v158.8c-.3 9.289 11.094 15.384 18.656 9.984l41.344-27.562 41.344 27.562c7.574 5.4 18.949-.7 18.656-9.984v-70.109l46.6 46.594c6.395 6.789 18.712 3.025 20.253-6.132l9.74-48.724 48.725-9.742c9.163-1.531 12.904-13.893 6.127-20.252zm-339.445-211.635c0-81.607 66.393-148 148-148s148 66.393 148 148-66.393 148-148 148-148-66.393-148-148zm154.656 278.016a12 12 0 0 0 -13.312 0l-29.344 19.562v-129.378a172.338 172.338 0 0 0 72 0v129.38zm117.381-58.353a12 12 0 0 0 -9.415 9.415l-6.913 34.58-47.709-47.709v-54.749a171.469 171.469 0 0 0 31.467-15.6l67.151 67.152z" />
                      <path d="m287.62 236.985c8.349 4.694 19.251-3.212 17.367-12.618l-5.841-35.145 25.384-25c7.049-6.5 2.89-19.3-6.634-20.415l-35.23-5.306-15.933-31.867c-4.009-8.713-17.457-8.711-21.466 0l-15.933 31.866-35.23 5.306c-9.526 1.119-13.681 13.911-6.634 20.415l25.384 25-5.841 35.145c-1.879 9.406 9 17.31 17.367 12.618l31.62-16.414zm-53-32.359 2.928-17.615a12 12 0 0 0 -3.417-10.516l-12.721-12.531 17.658-2.66a12 12 0 0 0 8.947-6.5l7.985-15.971 7.985 15.972a12 12 0 0 0 8.947 6.5l17.658 2.66-12.723 12.535a12 12 0 0 0 -3.417 10.516l2.928 17.615-15.849-8.231a12 12 0 0 0 -11.058 0z" />
                    </g>
                  </svg>
                </div>
                <div className="detail-box">
                  <h5>
                    Best Quality
                  </h5>
                  <p>
                    variations of passages of Lorem Ipsum available
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end why section */}
      {/* arrival section */}

<section data-aos="fade-right" className="product-cards">
  <div className="container" >
  <div className="mb-[30px] heading_container heading_center">
            <h2>
              Our <span>Packages</span>
            </h2>
          </div>
    <div className="row container product-cards__content gap-20">
      <article className="product-card product-card--small">
        <div className="product-card__top">
          <div className="product-card__slider">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <img
                  src="/images/banner1.png"
                  className="product-card__image product-card__image--small"
                  width="390px"
                  height="440px"
                  alt="product image"
                />
              </div>
              {/* <div className="swiper-slide">
                <img
                  src="http://surl.li/dsvtq"
                  className="product-card__image product-card__image--small"
                  width="400px"
                  height="200px"
                  alt="product image"
                />
              </div> */}
            </div>
          </div>
          <span className="sale-badge">-30%</span>
        </div>
        <div className="product-card__body">
          <h5 className="product-card__title">
            <a href="">White Tee</a>
          </h5>
          <div className="price">
            <span className="price__current price__current--sale price__current--fsize20">
              $40.00
            </span>
            <del className="price__old price__old--fsize16">$89.99</del>
          </div>
          <div className="product-card__props">
            <div className="product-card__selects">
              <div className="size">
                <ul className="list-reset size__list">
                  <li className="size__item">
                    <input
                      id="xs-size"
                      type="radio"
                      name="size"
                      className="input-reset size__input"
                    />
                    <label htmlFor="xs-size" className="size__field">
                      xs
                    </label>
                  </li>
                  <li className="size__item">
                    <input
                      id="s-size"
                      type="radio"
                      name="size"
                      className="input-reset size__input"
                    />
                    <label htmlFor="s-size" className="size__field">
                      s
                    </label>
                  </li>
                  <li className="size__item">
                    <input
                      id="m-size"
                      type="radio"
                      name="size"
                      className="input-reset size__input"
                    />
                    <label htmlFor="m-size" className="size__field">
                      m
                    </label>
                  </li>
                  <li className="size__item">
                    <input
                      id="l-size"
                      type="radio"
                      name="size"
                      className="input-reset size__input"
                    />
                    <label htmlFor="l-size" className="size__field">
                      l
                    </label>
                  </li>
                </ul>
              </div>
              <div className="color">
                <ul className="list-reset color__list color__list--product-card">
                  <li className="color__item">
                    <input
                      id="yellow-1"
                      type="radio"
                      name="color"
                      className="input-reset color__input"
                    />
                    <label htmlFor="yellow-1" className="color__field">
                      <span
                        className="color__circle"
                        style={{ backgroundColor: "#FCD164" }}
                      />
                    </label>
                  </li>
                  <li className="color__item">
                    <input
                      id="green-1"
                      type="radio"
                      name="color"
                      className="input-reset color__input"
                    />
                    <label htmlFor="green-1" className="color__field">
                      <span
                        className="color__circle"
                        style={{ backgroundColor: "#67BA92" }}
                      />
                    </label>
                  </li>
                  <li className="color__item">
                    <input
                      id="blue-1"
                      type="radio"
                      name="color"
                      className="input-reset color__input"
                    />
                    <label htmlFor="blue-1" className="color__field">
                      <span
                        className="color__circle"
                        style={{ backgroundColor: "#4285F4" }}
                      />
                    </label>
                  </li>
                </ul>
              </div>
            </div>
            <button className="btn-reset product-card__btn product-card__btn--small">
              <svg
                width={22}
                height={22}
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M2.8798 2.75768C2.79028 2.75093 2.66604 2.75033 2.43306 2.75033H0.916667C0.410406 2.75033 0 2.33992 0 1.83366C0 1.3274 0.410406 0.916996 0.916667 0.916996H2.43306C2.4417 0.916996 2.45034 0.916995 2.45898 0.916994C2.65575 0.91697 2.85058 0.916946 3.01755 0.929526C3.20335 0.943526 3.41921 0.976408 3.64252 1.07602C3.9568 1.21621 4.22528 1.44203 4.41724 1.72764C4.55364 1.93058 4.62303 2.13761 4.66865 2.31827C4.70966 2.48061 4.74301 2.67256 4.77671 2.86642C4.77818 2.87494 4.77966 2.88345 4.78115 2.89197L4.99956 4.14787L16.9291 4.50099C17.3965 4.51481 17.8005 4.52676 18.1332 4.5634C18.4849 4.60213 18.8336 4.67496 19.168 4.85314C19.6748 5.12313 20.0844 5.545 20.3393 6.05956C20.5075 6.39915 20.5699 6.7498 20.5982 7.10246C20.625 7.4361 20.625 7.84027 20.625 8.30795V8.37555C20.625 8.81506 20.625 9.19632 20.6004 9.51247C20.5743 9.84775 20.5167 10.1808 20.3631 10.5071C20.1293 11.0037 19.7523 11.419 19.2804 11.6996C18.9704 11.8839 18.6445 11.9733 18.3133 12.0316C18.001 12.0865 17.6216 12.1232 17.1841 12.1656L8.26136 13.029C7.81293 13.0725 7.4244 13.1101 7.10024 13.1158C6.75679 13.1218 6.41246 13.0951 6.06676 12.9682C5.54832 12.7777 5.09924 12.4356 4.778 11.9863C4.5638 11.6867 4.44668 11.3618 4.36134 11.029C4.28079 10.715 4.21392 10.3304 4.13675 9.88658L2.97492 3.20609C2.935 2.97655 2.91312 2.85426 2.89114 2.76721C2.89036 2.76412 2.8896 2.76118 2.88887 2.7584C2.88601 2.75816 2.88298 2.75792 2.8798 2.75768ZM5.32019 5.99149L5.93719 9.53925C6.02181 10.0258 6.07681 10.3382 6.13719 10.5736C6.19478 10.7981 6.24033 10.8794 6.26935 10.92C6.37643 11.0697 6.52612 11.1838 6.69894 11.2473C6.74577 11.2645 6.83624 11.2868 7.06799 11.2827C7.31098 11.2785 7.62676 11.2486 8.11829 11.201L16.9745 10.3439C17.4543 10.2975 17.762 10.2671 17.9956 10.226C18.2181 10.1868 18.3011 10.1489 18.3435 10.1238C18.5008 10.0302 18.6264 9.89181 18.7044 9.72626C18.7254 9.68167 18.7551 9.59536 18.7726 9.37014C18.791 9.13371 18.7917 8.82451 18.7917 8.34246C18.7917 7.8305 18.791 7.50062 18.7708 7.24915C18.7515 7.00853 18.7187 6.91832 18.6964 6.87332C18.6115 6.7018 18.4749 6.56118 18.306 6.47118C18.2617 6.44757 18.1725 6.41214 17.9325 6.38572C17.6818 6.3581 17.3521 6.34765 16.8403 6.3325L5.32019 5.99149Z"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.79167 16.042C7.28541 16.042 6.875 16.4524 6.875 16.9587C6.875 17.4649 7.28541 17.8753 7.79167 17.8753C8.29793 17.8753 8.70833 17.4649 8.70833 16.9587C8.70833 16.4524 8.29793 16.042 7.79167 16.042ZM5.04167 16.9587C5.04167 15.4399 6.27288 14.2087 7.79167 14.2087C9.31045 14.2087 10.5417 15.4399 10.5417 16.9587C10.5417 18.4774 9.31045 19.7087 7.79167 19.7087C6.27288 19.7087 5.04167 18.4774 5.04167 16.9587Z"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M16.5 16.042C15.9937 16.042 15.5833 16.4524 15.5833 16.9587C15.5833 17.4649 15.9937 17.8753 16.5 17.8753C17.0063 17.8753 17.4167 17.4649 17.4167 16.9587C17.4167 16.4524 17.0063 16.042 16.5 16.042ZM13.75 16.9587C13.75 15.4399 14.9812 14.2087 16.5 14.2087C18.0188 14.2087 19.25 15.4399 19.25 16.9587C19.25 18.4774 18.0188 19.7087 16.5 19.7087C14.9812 19.7087 13.75 18.4774 13.75 16.9587Z"
                />
              </svg>
              View package
            </button>
          </div>
        </div>
      </article>
      <article className="product-card product-card--small">
        <div className="product-card__top">
          <div className="product-card__slider">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <img
                  src="/images/banner1.png"
                  className="product-card__image product-card__image--small"
                  width="390px"
                  height="440px"
                  alt="product image"
                />
              </div>
              {/* <div className="swiper-slide">
                <img
                  src="http://surl.li/dsvtq"
                  className="product-card__image product-card__image--small"
                  width="390px"
                  height="440px"
                  alt="product image"
                />
              </div> */}
            </div>
          </div>
          <span className="sale-badge">-30%</span>
        </div>
        <div className="product-card__body">
          <h5 className="product-card__title">
            <a href="">White Tee</a>
          </h5>
          <div className="price">
            <span className="price__current price__current--sale price__current--fsize20">
              $40.00
            </span>
            <del className="price__old price__old--fsize16">$89.99</del>
          </div>
          <div className="product-card__props">
            <div className="product-card__selects">
              <div className="size">
                <ul className="list-reset size__list">
                  <li className="size__item">
                    <input
                      id="xs-size"
                      type="radio"
                      name="size"
                      className="input-reset size__input"
                    />
                    <label htmlFor="xs-size" className="size__field">
                      xs
                    </label>
                  </li>
                  <li className="size__item">
                    <input
                      id="s-size"
                      type="radio"
                      name="size"
                      className="input-reset size__input"
                    />
                    <label htmlFor="s-size" className="size__field">
                      s
                    </label>
                  </li>
                  <li className="size__item">
                    <input
                      id="m-size"
                      type="radio"
                      name="size"
                      className="input-reset size__input"
                    />
                    <label htmlFor="m-size" className="size__field">
                      m
                    </label>
                  </li>
                  <li className="size__item">
                    <input
                      id="l-size"
                      type="radio"
                      name="size"
                      className="input-reset size__input"
                    />
                    <label htmlFor="l-size" className="size__field">
                      l
                    </label>
                  </li>
                </ul>
              </div>
              <div className="color">
                <ul className="list-reset color__list color__list--product-card">
                  <li className="color__item">
                    <input
                      id="yellow-1"
                      type="radio"
                      name="color"
                      className="input-reset color__input"
                    />
                    <label htmlFor="yellow-1" className="color__field">
                      <span
                        className="color__circle"
                        style={{ backgroundColor: "#FCD164" }}
                      />
                    </label>
                  </li>
                  <li className="color__item">
                    <input
                      id="green-1"
                      type="radio"
                      name="color"
                      className="input-reset color__input"
                    />
                    <label htmlFor="green-1" className="color__field">
                      <span
                        className="color__circle"
                        style={{ backgroundColor: "#67BA92" }}
                      />
                    </label>
                  </li>
                  <li className="color__item">
                    <input
                      id="blue-1"
                      type="radio"
                      name="color"
                      className="input-reset color__input"
                    />
                    <label htmlFor="blue-1" className="color__field">
                      <span
                        className="color__circle"
                        style={{ backgroundColor: "#4285F4" }}
                      />
                    </label>
                  </li>
                </ul>
              </div>
            </div>
            <button className="btn-reset product-card__btn product-card__btn--small">
              <svg
                width={22}
                height={22}
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M2.8798 2.75768C2.79028 2.75093 2.66604 2.75033 2.43306 2.75033H0.916667C0.410406 2.75033 0 2.33992 0 1.83366C0 1.3274 0.410406 0.916996 0.916667 0.916996H2.43306C2.4417 0.916996 2.45034 0.916995 2.45898 0.916994C2.65575 0.91697 2.85058 0.916946 3.01755 0.929526C3.20335 0.943526 3.41921 0.976408 3.64252 1.07602C3.9568 1.21621 4.22528 1.44203 4.41724 1.72764C4.55364 1.93058 4.62303 2.13761 4.66865 2.31827C4.70966 2.48061 4.74301 2.67256 4.77671 2.86642C4.77818 2.87494 4.77966 2.88345 4.78115 2.89197L4.99956 4.14787L16.9291 4.50099C17.3965 4.51481 17.8005 4.52676 18.1332 4.5634C18.4849 4.60213 18.8336 4.67496 19.168 4.85314C19.6748 5.12313 20.0844 5.545 20.3393 6.05956C20.5075 6.39915 20.5699 6.7498 20.5982 7.10246C20.625 7.4361 20.625 7.84027 20.625 8.30795V8.37555C20.625 8.81506 20.625 9.19632 20.6004 9.51247C20.5743 9.84775 20.5167 10.1808 20.3631 10.5071C20.1293 11.0037 19.7523 11.419 19.2804 11.6996C18.9704 11.8839 18.6445 11.9733 18.3133 12.0316C18.001 12.0865 17.6216 12.1232 17.1841 12.1656L8.26136 13.029C7.81293 13.0725 7.4244 13.1101 7.10024 13.1158C6.75679 13.1218 6.41246 13.0951 6.06676 12.9682C5.54832 12.7777 5.09924 12.4356 4.778 11.9863C4.5638 11.6867 4.44668 11.3618 4.36134 11.029C4.28079 10.715 4.21392 10.3304 4.13675 9.88658L2.97492 3.20609C2.935 2.97655 2.91312 2.85426 2.89114 2.76721C2.89036 2.76412 2.8896 2.76118 2.88887 2.7584C2.88601 2.75816 2.88298 2.75792 2.8798 2.75768ZM5.32019 5.99149L5.93719 9.53925C6.02181 10.0258 6.07681 10.3382 6.13719 10.5736C6.19478 10.7981 6.24033 10.8794 6.26935 10.92C6.37643 11.0697 6.52612 11.1838 6.69894 11.2473C6.74577 11.2645 6.83624 11.2868 7.06799 11.2827C7.31098 11.2785 7.62676 11.2486 8.11829 11.201L16.9745 10.3439C17.4543 10.2975 17.762 10.2671 17.9956 10.226C18.2181 10.1868 18.3011 10.1489 18.3435 10.1238C18.5008 10.0302 18.6264 9.89181 18.7044 9.72626C18.7254 9.68167 18.7551 9.59536 18.7726 9.37014C18.791 9.13371 18.7917 8.82451 18.7917 8.34246C18.7917 7.8305 18.791 7.50062 18.7708 7.24915C18.7515 7.00853 18.7187 6.91832 18.6964 6.87332C18.6115 6.7018 18.4749 6.56118 18.306 6.47118C18.2617 6.44757 18.1725 6.41214 17.9325 6.38572C17.6818 6.3581 17.3521 6.34765 16.8403 6.3325L5.32019 5.99149Z"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.79167 16.042C7.28541 16.042 6.875 16.4524 6.875 16.9587C6.875 17.4649 7.28541 17.8753 7.79167 17.8753C8.29793 17.8753 8.70833 17.4649 8.70833 16.9587C8.70833 16.4524 8.29793 16.042 7.79167 16.042ZM5.04167 16.9587C5.04167 15.4399 6.27288 14.2087 7.79167 14.2087C9.31045 14.2087 10.5417 15.4399 10.5417 16.9587C10.5417 18.4774 9.31045 19.7087 7.79167 19.7087C6.27288 19.7087 5.04167 18.4774 5.04167 16.9587Z"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M16.5 16.042C15.9937 16.042 15.5833 16.4524 15.5833 16.9587C15.5833 17.4649 15.9937 17.8753 16.5 17.8753C17.0063 17.8753 17.4167 17.4649 17.4167 16.9587C17.4167 16.4524 17.0063 16.042 16.5 16.042ZM13.75 16.9587C13.75 15.4399 14.9812 14.2087 16.5 14.2087C18.0188 14.2087 19.25 15.4399 19.25 16.9587C19.25 18.4774 18.0188 19.7087 16.5 19.7087C14.9812 19.7087 13.75 18.4774 13.75 16.9587Z"
                />
              </svg>
              View package
            </button>
          </div>
        </div>
      </article>
      <article className="product-card product-card--small">
        <div className="product-card__top">
          <div className="product-card__slider">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <img
                  src="/images/banner1.png"
                  className="product-card__image product-card__image--small"
                  width="390px"
                  height="440px"
                  alt="product image"
                />
              </div>
              {/* <div className="swiper-slide">
                <img
                  src="http://surl.li/dsvtq"
                  className="product-card__image product-card__image--small"
                  width="390px"
                  height="440px"
                  alt="product image"
                />
              </div> */}
            </div>
          </div>
          <span className="sale-badge">-30%</span>
        </div>
        <div className="product-card__body">
          <h5 className="product-card__title">
            <a href="">White Tee</a>
          </h5>
          <div className="price">
            <span className="price__current price__current--sale price__current--fsize20">
              $40.00
            </span>
            <del className="price__old price__old--fsize16">$89.99</del>
          </div>
          <div className="product-card__props">
            <div className="product-card__selects">
              <div className="size">
                <ul className="list-reset size__list">
                  <li className="size__item">
                    <input
                      id="xs-size"
                      type="radio"
                      name="size"
                      className="input-reset size__input"
                    />
                    <label htmlFor="xs-size" className="size__field">
                      xs
                    </label>
                  </li>
                  <li className="size__item">
                    <input
                      id="s-size"
                      type="radio"
                      name="size"
                      className="input-reset size__input"
                    />
                    <label htmlFor="s-size" className="size__field">
                      s
                    </label>
                  </li>
                  <li className="size__item">
                    <input
                      id="m-size"
                      type="radio"
                      name="size"
                      className="input-reset size__input"
                    />
                    <label htmlFor="m-size" className="size__field">
                      m
                    </label>
                  </li>
                  <li className="size__item">
                    <input
                      id="l-size"
                      type="radio"
                      name="size"
                      className="input-reset size__input"
                    />
                    <label htmlFor="l-size" className="size__field">
                      l
                    </label>
                  </li>
                </ul>
              </div>
              <div className="color">
                <ul className="list-reset color__list color__list--product-card">
                  <li className="color__item">
                    <input
                      id="yellow-1"
                      type="radio"
                      name="color"
                      className="input-reset color__input"
                    />
                    <label htmlFor="yellow-1" className="color__field">
                      <span
                        className="color__circle"
                        style={{ backgroundColor: "#FCD164" }}
                      />
                    </label>
                  </li>
                  <li className="color__item">
                    <input
                      id="green-1"
                      type="radio"
                      name="color"
                      className="input-reset color__input"
                    />
                    <label htmlFor="green-1" className="color__field">
                      <span
                        className="color__circle"
                        style={{ backgroundColor: "#67BA92" }}
                      />
                    </label>
                  </li>
                  <li className="color__item">
                    <input
                      id="blue-1"
                      type="radio"
                      name="color"
                      className="input-reset color__input"
                    />
                    <label htmlFor="blue-1" className="color__field">
                      <span
                        className="color__circle"
                        style={{ backgroundColor: "#4285F4" }}
                      />
                    </label>
                  </li>
                </ul>
              </div>
            </div>
            <button className="btn-reset product-card__btn product-card__btn--small">
              <svg
                width={22}
                height={22}
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M2.8798 2.75768C2.79028 2.75093 2.66604 2.75033 2.43306 2.75033H0.916667C0.410406 2.75033 0 2.33992 0 1.83366C0 1.3274 0.410406 0.916996 0.916667 0.916996H2.43306C2.4417 0.916996 2.45034 0.916995 2.45898 0.916994C2.65575 0.91697 2.85058 0.916946 3.01755 0.929526C3.20335 0.943526 3.41921 0.976408 3.64252 1.07602C3.9568 1.21621 4.22528 1.44203 4.41724 1.72764C4.55364 1.93058 4.62303 2.13761 4.66865 2.31827C4.70966 2.48061 4.74301 2.67256 4.77671 2.86642C4.77818 2.87494 4.77966 2.88345 4.78115 2.89197L4.99956 4.14787L16.9291 4.50099C17.3965 4.51481 17.8005 4.52676 18.1332 4.5634C18.4849 4.60213 18.8336 4.67496 19.168 4.85314C19.6748 5.12313 20.0844 5.545 20.3393 6.05956C20.5075 6.39915 20.5699 6.7498 20.5982 7.10246C20.625 7.4361 20.625 7.84027 20.625 8.30795V8.37555C20.625 8.81506 20.625 9.19632 20.6004 9.51247C20.5743 9.84775 20.5167 10.1808 20.3631 10.5071C20.1293 11.0037 19.7523 11.419 19.2804 11.6996C18.9704 11.8839 18.6445 11.9733 18.3133 12.0316C18.001 12.0865 17.6216 12.1232 17.1841 12.1656L8.26136 13.029C7.81293 13.0725 7.4244 13.1101 7.10024 13.1158C6.75679 13.1218 6.41246 13.0951 6.06676 12.9682C5.54832 12.7777 5.09924 12.4356 4.778 11.9863C4.5638 11.6867 4.44668 11.3618 4.36134 11.029C4.28079 10.715 4.21392 10.3304 4.13675 9.88658L2.97492 3.20609C2.935 2.97655 2.91312 2.85426 2.89114 2.76721C2.89036 2.76412 2.8896 2.76118 2.88887 2.7584C2.88601 2.75816 2.88298 2.75792 2.8798 2.75768ZM5.32019 5.99149L5.93719 9.53925C6.02181 10.0258 6.07681 10.3382 6.13719 10.5736C6.19478 10.7981 6.24033 10.8794 6.26935 10.92C6.37643 11.0697 6.52612 11.1838 6.69894 11.2473C6.74577 11.2645 6.83624 11.2868 7.06799 11.2827C7.31098 11.2785 7.62676 11.2486 8.11829 11.201L16.9745 10.3439C17.4543 10.2975 17.762 10.2671 17.9956 10.226C18.2181 10.1868 18.3011 10.1489 18.3435 10.1238C18.5008 10.0302 18.6264 9.89181 18.7044 9.72626C18.7254 9.68167 18.7551 9.59536 18.7726 9.37014C18.791 9.13371 18.7917 8.82451 18.7917 8.34246C18.7917 7.8305 18.791 7.50062 18.7708 7.24915C18.7515 7.00853 18.7187 6.91832 18.6964 6.87332C18.6115 6.7018 18.4749 6.56118 18.306 6.47118C18.2617 6.44757 18.1725 6.41214 17.9325 6.38572C17.6818 6.3581 17.3521 6.34765 16.8403 6.3325L5.32019 5.99149Z"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.79167 16.042C7.28541 16.042 6.875 16.4524 6.875 16.9587C6.875 17.4649 7.28541 17.8753 7.79167 17.8753C8.29793 17.8753 8.70833 17.4649 8.70833 16.9587C8.70833 16.4524 8.29793 16.042 7.79167 16.042ZM5.04167 16.9587C5.04167 15.4399 6.27288 14.2087 7.79167 14.2087C9.31045 14.2087 10.5417 15.4399 10.5417 16.9587C10.5417 18.4774 9.31045 19.7087 7.79167 19.7087C6.27288 19.7087 5.04167 18.4774 5.04167 16.9587Z"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M16.5 16.042C15.9937 16.042 15.5833 16.4524 15.5833 16.9587C15.5833 17.4649 15.9937 17.8753 16.5 17.8753C17.0063 17.8753 17.4167 17.4649 17.4167 16.9587C17.4167 16.4524 17.0063 16.042 16.5 16.042ZM13.75 16.9587C13.75 15.4399 14.9812 14.2087 16.5 14.2087C18.0188 14.2087 19.25 15.4399 19.25 16.9587C19.25 18.4774 18.0188 19.7087 16.5 19.7087C14.9812 19.7087 13.75 18.4774 13.75 16.9587Z"
                />
              </svg>
              View package
            </button>
          </div>
        </div>
      </article>
    </div>
  </div>
</section>


      {/* end arrival section */}
      {/* product section */}
      <section  className="product_section layout_padding">
        <div data-aos="zoom-in-up" className="container">
          <div className="heading_container heading_center">
            <h2>
              Our <span>products</span>
            </h2>
          </div>

          <div className="grid grid-cols-4 product_section container mx-auto gap-[20px]">
            {
              ProductList && ProductList.map((item, index) => {

                if (index < 12) return <ProductCard item={item} />

              })
            }
          </div>

          <div className='more-product-btn'>
            <a href="/products">View More</a>
          </div>

        </div></section>
      {/* end product section */}
      {/* subscribe section */}
      <section data-aos="fade-right" className="subscribe_section">
        <div className="container-fuild">
          <div className="row logo-slide layout_padding">
            <div className="heading_container  heading_center">
              <h2>
              Our <span>Clients</span>
            </h2>
            </div>
            <div className="slider">
              <div className="slide-track">
                <div className="slide">
                  <img className='h-[100%]' src="/images/Adda247.jpg" height={100} width={250} alt="" />
                </div>
                <div className="slide">
                  <img className='h-[100%]' src="/images/byjuslogo.jpg" height={100} width={250} alt="" />
                </div>
                <div className="slide">
                  <img className='h-[100%]' src="/images/gradeup.png" height={100} width={250} alt="" />
                </div>
                <div className="slide">
                  <img className='h-[100%]' src="/images/unacademylogo.png" height={100} width={250} alt="" />
                </div>
                <div className="slide">
                  <img className='h-[100%]' src="/images/pace.png" height={100} width={250} alt="" />
                </div>
                <div className="slide">
                  <img className='h-[100%]' src="https://dog55574plkkx.cloudfront.net/storelogo/web/TeaFloor.png" height={100} width={250} alt="" />
                </div>
                <div className="slide">
                  <img src="https://cdn.blume.vc/blume/media/images/startups/classplus/logo/Classplus.f1670267326.PNG" height={100} width={250} alt="" />
                </div>
                <div className="slide">
                  <img className='h-[100%]' src="/images/olive.png" height={100} width={250} alt="" />
                </div>
                <div className="slide">
                  <img className='h-[100%]' src="/images/studyIQ.png" height={100} width={250} alt="" />
                </div>
                <div className="slide">
                  <img className='h-[100%]' src="/images/sankalp.png" height={100} width={250} alt="" />
                </div>
                <div className="slide">
                  <img className='h-[100%]' src="/images/Adda247.jpg" height={100} width={250} alt="" />
                </div>
                <div className="slide">
                  <img className='h-[100%]' src="/images/byjuslogo.jpg" height={100} width={250} alt="" />
                </div>
                <div className="slide">
                  <img className='h-[100%]' src="/images/gradeup.png" height={100} width={250} alt="" />
                </div>
                <div className="slide">
                  <img className='h-[100%]' src="/images/unacademylogo.png" height={100} width={250} alt="" />
                </div>
                <div className="slide">
                  <img className='h-[100%]' src="/images/pace.png" height={100} width={250} alt="" />
                </div>
                <div className="slide">
                  <img className='h-[100%]' src="https://dog55574plkkx.cloudfront.net/storelogo/web/TeaFloor.png" height={100} width={250} alt="" />
                </div>
                <div className="slide">
                  <img className='h-[100%]' src="https://cdn.blume.vc/blume/media/images/startups/classplus/logo/Classplus.f1670267326.PNG" height={100} width={250} alt="" />
                </div>
                <div className="slide">
                  <img className='h-[100%]' src="/images/olive.png" height={100} width={250} alt="" />
                </div>
                <div className="slide">
                  <img className='h-[100%]' src="/images/studyIQ.png" height={100} width={250} alt="" />
                </div>
                <div className="slide">
                  <img className='h-[100%]' src="/images/sankalp.png" height={100} width={250} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end subscribe section */}
      {/* client section */}
      
  <div  data-aos="zoom-in" className='youtubeslider container mt-[25px] mb-[50px]' style={{ height: "100%", overflowX: "hidden", textAlign: "center" }}>
  <div  className="heading_container heading_center">
            <h2>
            Customer's <span>Testimonial</span>
            </h2>
      </div>
  <div className="csslider infinity" id="slider1">
    <input type="radio" name="slides" defaultChecked="checked" id="slides_1" />
    <input type="radio" name="slides" id="slides_2" />
    <input type="radio" name="slides" id="slides_3" />
    <input type="radio" name="slides" id="slides_4" />
    <input type="radio" name="slides" id="slides_5" />
    <input type="radio" name="slides" id="slides_6" />
    <input type="radio" name="slides" id="slides_7" />
    <input type="radio" name="slides" id="slides_8" />
    <input type="radio" name="slides" id="slides_9" />
    <input type="radio" name="slides" id="slides_10" />
    <ul className='youtube-slider'>
      <li>
        <iframe width="100%" height="400px" src="https://www.youtube.com/embed/irIqm49Eyh4" title="YouTube video   player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;   picture-in-picture; web-share" allowFullScreen></iframe> 
        <p />
      </li>
      <li>
        <p>
        <iframe width="100%" height="400px" src="https://www.youtube.com/embed/FaBpcWkk3Qw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </p>
      </li>
      <li>
        <p>
        <iframe width="100%" height="400px" src="https://www.youtube.com/embed/DRYI8h6UsI8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </p>
      </li>
      <li>
        <p>
        <iframe width="100%" height="400px" src="https://www.youtube.com/embed/EfVOvB657xA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </p>
      </li>
      <li>
        <p>
        <iframe width="100%" height="400px" src="https://www.youtube.com/embed/tZ3zhPTC8AY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </p>
      </li>
      <li>
        <p></p>
        <p>
        <iframe width="100%" height="400px" src="https://www.youtube.com/embed/9PRi6lkUEnE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </p>
      </li>
      <li>
        <p></p>
        <p>
        <iframe width="100%" height="400" src="https://www.youtube.com/embed/JGLhpfC8NnQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </p>
      </li>
      <li>
        <p></p>
        <p>
        <iframe width="100%" height="400" src="https://www.youtube.com/embed/8cKYIruMah0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </p>
      </li>
      <li>
        <p></p>
        <p>
        <iframe width="100%" height="400" src="https://www.youtube.com/embed/1VCKNn-1PTs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </p>
      </li>
      <li>
        <p></p>
        <p>
        <iframe width="100%" height="400" src="https://www.youtube.com/embed/vZCvluL50Ks" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </p>
      </li>
      {/* <li>
        <p>
          <video controls="" preload="">
            <source src="" />
          </video>
        </p>
      </li>
      <li>
        <p>
          <video controls="" preload="">
            <source src="" />
          </video>
        </p>
      </li> */}
    </ul>
    <div className="arrows">
      <label htmlFor="slides_1" />
      <label htmlFor="slides_2" />
      <label htmlFor="slides_3" />
      <label htmlFor="slides_4" />
      <label htmlFor="slides_5" />
      <label htmlFor="slides_6" />
      <label htmlFor="slides_7" />
      <label htmlFor="slides_8" />
      <label htmlFor="slides_9" />
      <label htmlFor="slides_10" />
      <label className="goto-first" htmlFor="slides_1" />
      <label className="goto-last" htmlFor="slides_10" />
    </div>
    <div className="navigation">
      <div>
        <label htmlFor="slides_1" />
        <label htmlFor="slides_2" />
        <label htmlFor="slides_3" />
        <label htmlFor="slides_4" />
        <label htmlFor="slides_5" />
        <label htmlFor="slides_6" />
        <label htmlFor="slides_7" />
        <label htmlFor="slides_8" />
        <label htmlFor="slides_9" />
        <label htmlFor="slides_10" />
      </div>
    </div>
  </div>
</div>


      {/* end client section */}
      {/* footer start */}
      <Footer / >
      {/* footer end */}
      <div  className="cpy_">
        <p className="mx-auto">© 2021 All Rights Reserved By <a href="https://html.design/">Studio Wallah</a><br />
        </p>
      </div>
      {/* jQery */}
      {/* popper js */}
      {/* bootstrap js */}
      {/* custom js */}
    </div>
  )
    }


export default Home