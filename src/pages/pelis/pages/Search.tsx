import React from 'react'
import { SearchAll } from '../../../components'
import { MovieList } from '../components'

const Search = () => {
    return (
        <>
            <div className="w-full h-auto pt-16">
                <SearchAll />
                <div className="container m-auto">
                    <MovieList />
                </div>
            </div>
        </>
    )
}

export default Search