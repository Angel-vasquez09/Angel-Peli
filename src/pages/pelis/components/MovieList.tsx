
import { useState } from 'react';
import { Helmet } from 'react-helmet';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useInfiniteQuery, useQuery } from 'react-query';
import { useLocation } from 'react-router-dom'
import { ItemSlick } from '../../../components/ui/slick/ItmSlick';
import { get } from '../../../helpers';
import { DashboardPeli, Result } from '../../../interfaces';
import { Spinner } from './Spinner';
import { SpinnerInfinite } from './SpinnerInfinite';

export const MovieList = () => {

    const { search } = useLocation();
    const valor = search ? search.split('=')[1] : '';

    const { data, isLoading, hasNextPage, fetchNextPage }
        = useInfiniteQuery(`movie-search-${valor}`, ({ pageParam = 1 }) => {
            const url = valor === '' ? 'discover/movie?page='+pageParam : 'search/movie?query=' + valor + '&page=' + pageParam;
            return get(`${url}`)
        },{
            getNextPageParam: (ultimaPage) => { // Parámetro para la siguiente página
                if(ultimaPage.page === ultimaPage.total_pages){
                    return false;
                }
                return ultimaPage.page + 1;
            }
        })

    if(isLoading){
        return <Spinner />
    }

    const movies = data?.pages.reduce((prevMovies,page) => prevMovies.concat(page.results),[]) ?? [];


    return (
        <>
            <Helmet>
                <title>
                    Search - {search ? valor : 'Movies'}
                </title>
                <meta name="description" content="Buscador de peliculas, encuantra las peluculas mas demandadas" />
            </Helmet>
            <InfiniteScroll
                className='flex flex-wrap overflow-y-scroll justify-center h-'
                dataLength={movies.length}
                hasMore={hasNextPage || isLoading} // Verifica si existe una pagina siguiente
                next={() => fetchNextPage()} // Funcion para cargar la siguiente pagina
                loader={<SpinnerInfinite />}
            >
                {
                    movies.map((pelicula: any, index: number) => (
                        <ItemSlick
                            reveal={true}
                            key={index}
                            width={'xs:w-28 lg:w-40 xl:w-48'}
                            height={'xs:h-52 lg:h-64 xl:h-80'}
                            pelicula={pelicula}
                        />
                        ))
                }
                {
                    movies.length === 0 && <div className='text-center text-gray-500'>
                        No se encontraron resultados
                    </div>
                }
            </InfiniteScroll>
            </>
    )
}
