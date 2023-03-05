import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

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

const Navbar = () => {

    const location = useLocation()
    const navigate  = useNavigate()

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



    return (
        <header className="header_section border-b-[1px]">
            <div className="container">
                <nav className="navbar navbar-expand-lg custom_nav-container ">
                    <a className="navbar-brand" href="javascript:void(0)" onClick={() => navigate("/")}><img width={150} src="/images/logo1-removebg-preview.png" alt="#" /></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className> </span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav flex ml-auto gap-[20px] justify-center itmes-center">
                            {
                                navItems.map((item) => (
                                    <li className={"nav-item" + (selected == item.id ? ' active' : '')}>
                                        <a className="nav-link" href="javascript:void(0)" onClick={() => navigate(item.link)}>{item.name}</a>
                                    </li>))

                            }


                            <li className="nav-item">
                                <i className="fa fa-search" aria-hidden="true" />
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Navbar