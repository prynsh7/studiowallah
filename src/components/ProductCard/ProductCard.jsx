import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({ item }) => {

    const navigate = useNavigate()
    return (
        <div className=" w-[100%]">
            <div className="box">
                <div className="option_container">
                    <div className="options">
                        <a href="javascript:void(0)" onClick={() => navigate('/products/' + item.id)} className="option1">
                            View
                        </a>
                    </div>
                </div>
                <div className="img-box">
                    <img src={item.image} alt="" />
                </div>
                <div className="detail-box">
                    <h5>
                        {item.name}
                    </h5>
                    <br />
                    <h6>
                        {item.price}
                    </h6>
                </div>
            </div>
        </div>
    )
}

export default ProductCard