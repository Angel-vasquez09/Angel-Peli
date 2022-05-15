import React from 'react'
import { useQuery } from 'react-query';
import { useLocation, useNavigate } from 'react-router-dom';
import { get, urlImg } from '../../../helpers';
import { IDetailMovie } from '../../../interfaces';
import { Spinner } from '../components';

const DetailMovie = () => {

    const router = useNavigate();
    const { pathname } = useLocation();
    const name = pathname.split('/')[3];
    const id   = name.split('-')[1];
    const { data, isLoading } = useQuery<IDetailMovie>([`detail-movie`,id],() => get(`movie/${id}`));

    if(isLoading){
        return <Spinner />
    }

    return (
        <div className="w-full h-full flex relative">
            {/* <button onClick={() => router('/pelis')} className='absolute z-10 top-1 right-1 bg-slate-900 px-1 rounded-3xl text-white font-semibold'>Back</button> */}
            <div className='h-screen xs:w-full md:w-2/3 z-20 absolute md:top-0 md:left-0 p-3'>
                <h1 className="text-white font-extrabold xs:text-4xl md:text-5xl">{data?.original_title}</h1>
                <div className='flex flex-wrap mt-4'>
                    {
                        data?.genres.map((genre,index) => (
                            <small key={index} className="text-xs bg-slate-900 rounded-3xl text-white mr-2 px-2 mt-1 font-semibold">{genre.name}</small>
                        ))
                    }
                </div>
                <strong className="md:hidden text-white font-semibold ml-2">{data?.tagline}</strong>
                <p className="xs:hidden md:inline-block w-2/3 p-1 scroll overflow-y-scroll h-2/5 text-white mt-2">
                    {data?.overview}
                </p>
                <div className='flex items-end absolute xs:bottom-16 md:bottom-3 left-3'>
                    <img
                        className=" w-28 h-40 z-20 object-cover rounded-md mr-2"
                        src={urlImg +'original/'+ data?.poster_path}
                        alt={data?.title}
                    />
                    <div className='flex flex-col'>
                    <strong className="p-1 w-max h-max text-xs shadow-sm rounded-full text-white font-bold bg-slate-900">TMDB: {data?.vote_average}</strong>
                        <strong className="text-white text-xs mr-2 mt-2">Lanzamiento: {data?.release_date}</strong>
                        <a
                            href={data?.homepage}
                            className="border-2 p-1 rounded-lg text-xs mt-2 text-white">Pagina oficial</a>
                            <strong className="text-white mr-2 mt-2 text-xs">{data?.runtime} minutos</strong>
                            <strong className="text-white mr-2 mt-2 text-xs">Original lengua: <small className='p-1 rounded-full bg-slate-900 text-white'>{data?.original_language}</small></strong>
                    </div>
                </div>

            </div>

            <div className='xs:w-full md:w-2/3 h-screen absolute right-0'>
                {
                    data && (
                        <img
                            className=" w-full h-full object-cover bg-top"
                            src={urlImg +'original/' + (data.backdrop_path ? data.backdrop_path : data.poster_path)}
                            alt={data.title}
                        />
                    )
                }
                <div className="w-full h-full absolute top-0 left-0 xs:bg-gradient-to-b  md:bg-gradient-to-l from-transparent to-black">
                </div>
            </div>
        </div>
    )
}

export default DetailMovie