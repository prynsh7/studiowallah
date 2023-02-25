import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import ProductCard from '../../components/ProductCard/ProductCard'
import { ProductList } from '../../data/productList'

const ProductDetails = () => {

    const { id } = useParams()

    const [product, setProduct] = React.useState({})

    function getRandomArr(arr) {

        const randomIndex1 = Math.floor(Math.random() * arr.length);
        const randomIndex2 = Math.floor(Math.random() * arr.length);
        const randomIndex3 = Math.floor(Math.random() * arr.length);
        
    
        return [arr[randomIndex1], arr[randomIndex2], arr[randomIndex3]];
    }

    useEffect(() => {
        console.log(id)
        const product = ProductList.find(item => item.id === Number(id))
        setProduct(product)
    }, [id])


    return (
        <div>
            <Navbar />

            <div className='container mx-auto py-[50px]'>


                <div className='flex gap-[50px] items-center'>
                    <div className="left w-[50%]  px-[20px] shadow-md">
                        <div className="grid bg-[fff]  py-[30px] my-auto grid-cols-2 gap-[10px]">
                            {
                                product?.images?.map((item, index) => (
                                    <div className="box1 border-[1px]">
                                        <div className="image">
                                            <img src="/images/newfront.png" style={{ width: '300px', float: 'left', marginTop: '60px' }} />
                                        </div>
                                    </div>))
                            }
                        </div>

                    </div>

                    <div className=" w-[50%]">


                        <div className="box2">
                            <div className="info flex flex-col gap-[10px] mb-[30px]">

                                <h3 className='text-[2em] font-semibold' >{product?.name}</h3>
                                <h3 className='text-[1.5em] text-[#000]/[0.5] font-semibold'>{product.price}</h3>
                                <p className='text-[14px] font-medium'>{product.description}</p>
                            </div>
                        </div>


                        <div className="info2">
                            <div className="highlights" style={{ padding: '8px', paddingLeft: '15px', width: '100%' }}>
                                <h3 style={{ fontSize: '20px', fontWeight: 400, color: 'gray' }}>Highlights</h3>
                                {
                                    product?.highlights?.map((item, index) => (
                                        <h3 style={{ fontSize: '15px', lineHeight: '20px', marginTop: '8px' }}>{item}</h3>
                                    ))
                                }

                            </div>
                            <div className="services" style={{ paddingLeft: '15px', width: '100%' }}>
                                <h3 style={{ fontSize: '20px', fontWeight: 400, color: 'gray' }}>Specifications</h3>

                                {
                                    product?.specifications?.map((item, index) => (
                                        <h3 style={{ fontSize: '15px', lineHeight: '20px', marginTop: '8px' }}>{item}</h3>
                                    ))
                                }

                            </div>
                        </div>


                    </div>
                </div>




                <section className="product_section layout_padding">
                    <div className="container">
                        <div className="heading_container heading_center">
                            <h2>
                                Recommended Products
                            </h2>
                        </div>
                        <div className="grid grid-cols-3 product_section container mx-auto gap-[20px]">
                            {
                                ProductList && getRandomArr(ProductList).map((item, index) => (<ProductCard item={item} />))
                            }
                        </div>

                    </div>
                </section>
                <section className="product_section layout_padding">
                    <div className="container">
                        <div className="heading_container heading_center">
                            <h2>
                                Our other products
                            </h2>
                        </div>
                        <div className="grid grid-cols-3 product_section container mx-auto gap-[20px]">
                            {
                                ProductList && getRandomArr(ProductList).map((item, index) => (<ProductCard item={item} />))
                            }
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    )
}

export default ProductDetails