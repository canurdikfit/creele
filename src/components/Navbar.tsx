import Navigation from './../assets/artifacts/navigation.png';
import Creele from './../assets/icons/creele.png';
import { Link, useLocation } from 'react-router-dom';
import RoundBtn from './../assets/artifacts/round_btn.png';
import { HiMiniBars3 } from "react-icons/hi2";
import React from 'react';

export default function Navbar() {
    const [state, setState] = React.useState<boolean>(false)
    const { pathname } = useLocation()

    return (
        <nav
            id='menu'
            className={`fixed z-50 inset-x-0 transition-transform ease-in-out duration-500 top-0 md:top-7`}>
            <div
                className='relative max-w-2xl lg:max-w-4xl xl:max-w-5xl mx-auto h-32 flex items-center'>
                <img
                    src={Navigation}
                    alt="Navbar"
                    className='h-full w-full object-contain object-center absolute hidden md:block'
                />
                <div className='relative z-10 pr-[5%] pl-[8.5%] pb-2 flex items-center justify-between w-full'>
                    <Link to={'/'} className='flex-shrink-0'>
                        <img
                            src={Creele}
                            alt='Creele'
                            sizes='100%'
                            className='h-6 xl:h-8 w-auto relative z-40'
                        />
                    </Link>
                    <ul className={`items-center gap-10 lg:gap-16 text-center ${state ? 'translate-x-0' : 'translate-x-[1000px]'} fixed inset-0 h-screen backdrop-blur flex flex-col justify-center w-screen bg-black/50 md:relative md:h-fit md:bg-black/0 md:backdrop-blur-0 md:flex-row md:justify-end md:translate-x-0 md:flex`}>
                        {
                            NavigationSystem.map((items, index) => {
                                return (
                                    <li
                                        key={index}
                                    >
                                        <Link
                                            to={items.hash}
                                            onClick={() => setState(false)}
                                            className={`font-semibold ${pathname == items.hash && 'text-[#FBD40D]'} text-lg`}
                                        >
                                            {items.label}
                                        </Link>
                                    </li>

                                )
                            })
                        }
                    </ul>
                    <button
                        onClick={() => setState(!state)}
                        className="relative flex items-center justify-center h-16 w-16 md:hidden">
                        <img
                            src={RoundBtn}
                            alt="Button"
                            sizes="100%"
                            className="btn_designed"
                        />
                        <HiMiniBars3 className='relative z-20 text-3xl' />
                    </button>
                </div>
            </div>
        </nav >
    )
}


const NavigationSystem = [
    {
        label: 'Product',
        hash: '/product'
    },
    {
        label: 'About',
        hash: '/about'
    },
    {
        label: 'Contact',
        hash: '/contact'
    },
]