import React from 'react'
import { BiSearch } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom';

export const SearchAll = () => {

    const router = useNavigate();
    const [search, setSearch] = React.useState('');


    const handleClick = () => {
        if(search === '') {
            return;
        }

        router(`/pelis/search?search=${search}`);
    }

    const handleDown = (e: any) => {
        if(e.key === 'Enter') {
            handleClick();
            setSearch('');
        }
    }

    return (
        <div className="w-full fixed z-20 top-0 left-0 p-2 flex justify-center items-center">
            <BiSearch
                onClick={handleClick}
                className="text-white text-3xl" />
            <input
                className="xs:w-full md:w-auto bg-transparent border-0 outline-none text-white text-3xl p-2"
                type="text"
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={handleDown}
                value={search}
                placeholder="Buscar..."
                name=""
                id=""
            />
        </div>
    )
}
