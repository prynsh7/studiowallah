import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { ProductList } from '../../data/productList'

import { DownOutlined, SmileOutlined } from '@ant-design/icons';

import { Dropdown, Space } from 'antd';

const navItems = [
    {
        id: 1,
        name: 'Home',
        link: '/'
    },
    {
        id: 2,
        name: 'Products',
        link: '/products'
    },
    {
        id: 3,
        name: 'Contact',
        link: '/contact'
    },

]

const categories = [
    "Interactive Flat Panel",
    "Camera",
    "Microphones",
    "Tripods",
    "Lights",
    "Capture cards",
    "Smart Board Softwares",
]

const Navbar = () => {

    const location = useLocation()
    const navigate = useNavigate()

    const [selected, setSelected] = React.useState(1)

    React.useEffect(() => {
        const path = location.pathname
        const pathArr = path.split('/')
        const pathId = pathArr[1]
        if (pathId === 'products') {
            setSelected(2)
        } else if (pathId === 'contact') {
            setSelected(3)
        } else {
            setSelected(1)
        }
    }, [location])




    const [searchList, setSearchList] = React.useState([])

    const filterBySearch = (query) => {
        // Access input value


        if (query.length == 0) {
            setSearchList([])
            return
        }
        // Create copy of item list
        var updatedList = [...ProductList];
        // Include all elements which includes the search query
        updatedList = updatedList.filter((item) => {
            return item['name'].toLowerCase().indexOf(query.toLowerCase()) !== -1;
        });
        // Trigger render with updated values
        setSearchList(updatedList);
    };

    const searchRef = React.useRef(null)


    const items = [
        ...categories.map((item) => ({
            key: item,
            label: <p className='font-semibold text-[14px] text[#000]/[0.7] capitalize' onClick={() => {
                navigate(`/products?category=${item}`)
            }}>{item}</p>,
        })),
      ];

    return (
        <header className="header_section ">
            <div className="container bg-[#f7f8f9]">
                <nav className="navbar navbar-expand-lg custom_nav-container bg-[#f7f8f9]">
                    <a className="navbar-brand" href="javascript:void(0)" onClick={() => navigate("/")}><img className='ml-5' width={150} src="/images/logo2.png" alt="#" /></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className> </span>
                    </button>

                    <div className="collapse navbar-collapse justify-center items-center" id="navbarSupportedContent">
                        <ul className="navbar-nav flex ml-auto mr-5 gap-[20px] justify-center items-center">
                            {
                                navItems.map((item) => {
                                    if(item.id == 2){
                                return <Dropdown menu={{ items }}>
                                <li className={"nav-item flex justify-center items-center" + (selected == item.id ? ' active' : '')}>
                                    <a className="nav-link" href="javascript:void(0)" onClick={() => navigate(item.link)}>{item.name}</a> 
                                    <i class="fa fa-caret-down"></i>
                                </li>
                                </Dropdown>
                            }else{
                                return <li className={"nav-item" + (selected == item.id ? ' active' : '')}>
                                    <a className="nav-link" href="javascript:void(0)" onClick={() => navigate(item.link)}>{item.name}</a>
                                </li>
                            }
                                })

                            }



                            <div className="form_sub flex flex-col">
                                <div className='flex relative'>
                                    <input  style={{outline: 'none'}} type="text" placeholder='Search Products' className='text rounded-l h-[40px] border-[1px] border-[#808080]/[0.6] p-[15px]'
                                        ref={searchRef}
                                        onChange={(e) => {
                                            filterBySearch(e.target.value);
                                        }}
                                    />
                                    <button  style={{outline: 'none'}} className='h-[40px] rounded-r pl-[10px] bg-[#f7444e] text-[#ffff] justify-center'><i className="fa fa-search" aria-hidden="true" /></button>


                                </div>
                                <div className='relative'>
                                    {
                                        searchList.length == 0 ? null :
                                            <div className='absolute z-[200] border-[1px] max-h-[200px] overflow-y-scroll top-[0px] w-[100%] bg-[#fff]  border-[#000]/[0.6]'>
                                                {
                                                    searchList.map((item) => (
                                                        <div className='flex cursor-pointer border-b-[1px]
                                                border-[#000]/[0.6] justify-between items-center p-[10px] hover:bg-[#f7444e] hover:text-[#fff] text-[#000]/[0.5]'
                                                            onClick={() => {
                                                                setSearchList([])
                                                                searchRef.current.value = ''
                                                                navigate(`/products/${item.id}`)
                                                            }}
                                                        >
                                                            <p className=' font-semibold capitalize' >{item?.name}</p>
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                    }
                                </div>
                            </div>


                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Navbar