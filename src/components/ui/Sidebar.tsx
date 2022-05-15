import React from 'react'
import { BiCategory, BiSearch, BiSlider, BiSlideshow } from "react-icons/bi";
import { Link, useLocation } from 'react-router-dom';

export const Sidebar = () => {
    const { pathname } = useLocation();


    const path = pathname === '/pelis' ? true : false;

    return (
        <div className='xs:hidden md:flex transition-all ease-out duration-300 group bg-gradient-to-l from-transparent to-black flex items-center h-screen w-12 hover:w-[40%] fixed top-0 left-0 text-white z-30'>
            <nav>
                <ul className="text-white group">
                    <li className={`px-3 py-5 flex items-center  hover:text-red-600`}>
                        <BiCategory className={`transition-all duration-300 mr-5 ${path && 'text-red-600'}`}/>
                        <Link className={`${path && 'text-red-600'} transition-all duration-300 opacity-0 group-hover:opacity-100`} to={''}>Home</Link>
                    </li>
                    <li className={`px-3 py-5 flex items-center ${!path && 'text-red-600'} hover:text-red-600`}>
                        <BiSearch className={`${!path && 'text-red-600'} transition-all duration-300 mr-5 `}/>
                        <Link className={`${!path && 'text-red-600'} transition-all duration-300 opacity-0 group-hover:opacity-100`} to={'/pelis/search'}>Search</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
