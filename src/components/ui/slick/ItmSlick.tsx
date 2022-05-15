import React, { FC, useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { urlImg } from '../../../helpers';
import { Result } from '../../../interfaces';
import scrollReveal from "scrollreveal";

interface ItemProps {
    width    : string;
    height   : string;
    pelicula : Result;
    reveal   : boolean;
}

export const ItemSlickHover:FC<ItemProps> = ({ width, height, pelicula, reveal }) => {

    const [mouse,setMouse] = useState(false);
    const router = useNavigate();


    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (sectionRef.current){
            if(reveal){
                scrollReveal().reveal(sectionRef.current, {
                    reset: true,
                    delay: 500
                });
            }
        }
    }, []);

    const mouseLeave = () => {
        setTimeout(() => {
            setMouse(false);
        }, 150);
    }

    const mouseEnter = () => {
        setTimeout(() => {
            setMouse(true);
        }, 150);
    }

    const goToDetail = () => {
        const slug = pelicula.title.replace(/\s/g, '_').toLowerCase() + '*' + pelicula.id;
        router(`/pelis/detail-movie/${slug}`);
    }

    return (
        <div className={`p-1 scroll-section`} ref={sectionRef}>
            <div
                onClick={goToDetail}
                onMouseEnter={mouseEnter}
                onMouseLeave={mouseLeave}
                className={`${width} ${height} cursor-pointer rounded-md relative transition-all ease-in-out delay-150 hover:w-[440px] border-transparent border-2 hover:border-white`}>
                <img
                    className='w-full hover:w-[440px] h-full z-20 object-cover rounded-md'
                    src={urlImg +'original/'+ (mouse ? pelicula.backdrop_path : pelicula.poster_path)}
                    alt={pelicula.title}
                />
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b rounded-md from-transparent to-black ">
                    <small className="absolute p-1 z-20 top-2 left-2 w-max h-max text-xs shadow-sm rounded-full text-white font-bold bg-slate-900">{pelicula.vote_average}</small>
                    <h2 className='absolute z-20 bottom-7 left-2 text-white font-bold text-base'>{pelicula.original_title}</h2>
                </div>
            </div>
        </div>
    )
}

export const ItemSlick: FC<ItemProps> = ({ width, height, pelicula, reveal }) => {

    const router = useNavigate();
    const [mouse,setMouse] = useState(false);

    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (sectionRef.current){
            if(reveal){
                scrollReveal().reveal(sectionRef.current, {
                    reset: true,
                    duration: 500,
                    scale: 0.85,
                    delay: 500
                });
            }
        }
    }, []);

    const mouseLeave = () => {
        setTimeout(() => {
            setMouse(false);
        }, 150);
    }

    const mouseEnter = () => {
        setTimeout(() => {
            setMouse(true);
        }, 150);
    }

    const goToDetail = () => {
        const slug = pelicula.title.replace(/\s/g, '_').toLowerCase() + '*' + pelicula.id;
        router(`/pelis/detail-movie/${slug}`);
    }

    return (
        <div className={`p-1 `} ref={sectionRef}>
            <div
                onClick={goToDetail}
                onMouseEnter={mouseEnter}
                onMouseLeave={mouseLeave} className={`${width} ${height} transition-all ease-in-out delay-150 opacity-70 hover:opacity-100 border-2 border-transparent hover:border-slate-300 cursor-pointer rounded-md relative`}>
                <img
                    className='w-full h-full z-20 object-cover rounded-md '
                    src={urlImg +'original/'+ (mouse ? (pelicula.backdrop_path ? pelicula.backdrop_path : pelicula.poster_path) : (pelicula.poster_path ? pelicula.poster_path : pelicula.backdrop_path))}
                    alt={pelicula.title}
                />
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b rounded-md from-transparent to-black ">
                    <small className="abdolute top-2 left-3 w-9 h-9 rounded-full bg-yellow-300 border-1 border-yellow-400"></small>
                    <h2 className='absolute bottom-7 left-2 text-xs font-bold text-white'>{pelicula.title}</h2>
                </div>
            </div>
        </div>
    )
}
