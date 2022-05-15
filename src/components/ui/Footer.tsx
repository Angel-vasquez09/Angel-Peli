import React from 'react'
import { BiCategory, BiSearch } from 'react-icons/bi'
import { Link, useLocation } from 'react-router-dom'

export const Footer = () => {

    const { pathname } = useLocation();
    const isSearch = pathname.includes('search');

    return (
        <footer className="z-50 md:hidden w-full bg-zinc-900 fixed bottom-0 left-0 h-12">
            <ul className="w-full h-full flex justify-around">
                <li className={`${pathname === '/pelis' && 'text-red-600'} text-white text-xl flex items-center`}>
                    <Link to={'/pelis'}>
                        <BiCategory />
                    </Link>
                </li>
                <li className={`${pathname === '/pelis/search' && 'text-red-600'} text-white text-xl flex items-center`}>
                    <Link to={'/pelis/search'}>
                        <BiSearch />
                    </Link>
                </li>
            </ul>
        </footer>
    )
}
