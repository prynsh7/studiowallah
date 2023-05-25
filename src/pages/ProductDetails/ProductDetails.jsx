import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import ProductCard from '../../components/ProductCard/ProductCard'
// import { ProductList } from '../../data/productList'

import { withFirestore } from 'react-firestore'

const ProductDetails = ({ firestore }) => {

    const { id } = useParams()

    const [product, setProduct] = React.useState({})

    function getRandomArr(arr) {

        const randomIndex1 = Math.floor(Math.random() * arr.length);
        const randomIndex2 = Math.floor(Math.random() * arr.length);
        const randomIndex3 = Math.floor(Math.random() * arr.length);


        return [arr[randomIndex1], arr[randomIndex2], arr[randomIndex3]];
    }

    const [ProductList, setProductList] = useState([])


    async function getAllProducts() {
        const productsRef = firestore.collection('products');
        const snapshot = await productsRef.get();

        const products = [];
        snapshot.forEach((doc) => {
            products.push(doc.data());
        });

        return products;
    }


    useEffect(() => {

        console.log("getting products")
        if(id === undefined) return
        getAllProducts()
            .then((products) => {
                setProductList(products)
                const product = products?.find(item => item.id === Number(id))
                setProduct(product)
            })
            .catch((error) => {
                console.error('Error retrieving products:', error);
            });



    }, [id])

    useEffect(() => {
        window.scrollTo(0, 0)
    },[])


    return (
        <div>
            <Navbar />

            <div className='product-details container bg-[#f8f8f8]'>

                <div className="box2">
                    <div className="info flex flex-col gap-[10px] mb-[0px] mr-[60px]">
                        <h3 className='text-[2em] font-semibold' >{product?.name}</h3>
                        <h3 className='text-[1.5em] text-[#000]/[0.5] font-semibold'>{product.price}</h3>
                        <p className='text-[18px] font-medium mb-[10px]'>{product.description}</p>
                    </div>
                </div>

                <div className='product-box items-center '>

                    <div className=" w-[100%] shadow-xl py-[10px] px-[30px] border-20px">

                        <div className="grid bg-[fff]  py-[30px] px-[30px ] my-auto grid-cols-2 gap-[10px]">

                            {
                                product?.images?.map((item, index) => (
                                    <div className="box1 border-[1px] ">
                                        <div className="image">
                                            <img src={item} style={{ width: '300px', float: 'left', marginTop: '60px' }} />
                                        </div>
                                    </div>))
                            }
                        </div></div><div className=" w-[50%]">
                        <div className="info2">
                            <div className="highlights">
                                <h3 style={{ fontSize: '20px', fontWeight: 400, color: 'gray' }}>Highlights</h3>
                                {
                                    product?.highlights?.map((item, index) => (
                                        <h4 style={{ fontSize: '15px', lineHeight: '20px', marginTop: '8px' }}>{item}</h4>
                                    ))
                                }

                            </div>
                            <div className="services">
                                <h3 style={{ fontSize: '20px', fontWeight: 400, color: 'gray' }}>Specifications</h3>

                                {
                                    product?.specifications?.map((item, index) => (
                                        <h4 style={{ fontSize: '15px', lineHeight: '20px', marginTop: '8px' }}>{item}</h4>
                                    ))
                                }

                            </div>
      
                        </div>
      
                 </div>
         
                </div>
                <div className="btnp-box mt-[25px] pl-[900px] mb-[20px]">
          <a href="https://wa.me/919871045001" className="btn1 bg-[#f7444e] mb-[20px] text-bold text-[20px]">
            Enquire Here
          </a>
        </div>
                </div>
            



            <div className='product-details container shadow-md'>
                <section className="product_section layout_padding">
                    <div className="container ">
                        <div className="heading_container  heading_center">
                            <h2>
                                Recommended <span>Products</span>
                            </h2>
                        </div>
                        <div className="grid grid-cols-3 product_section container mx-auto gap-[20px]">
                            {
                                ProductList?.length > 0 && getRandomArr(ProductList).map((item, index) => (<ProductCard item={item} />))
                            }
                        </div>

                    </div>
                </section>
                <section className="product_section layout_padding">
                    <div className="container">
                        <div className="heading_container  heading_center">
                            <h2>
                                Our Other <span>Products</span>
                            </h2>
                        </div>
                        <div className="grid grid-cols-3 product_section container mx-auto gap-[20px]">
                            {
                                ProductList?.length > 0 && getRandomArr(ProductList).map((item, index) => (<ProductCard item={item} />))
                            }
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    )
}

export default withFirestore(ProductDetails)