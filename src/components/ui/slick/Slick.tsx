import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { NextArrow } from "./NextArrow";
import { PrevArrow } from "./PrevArrow";
import { FC } from "react";
import { ItemSlick, ItemSlickHover } from "./ItmSlick";
import { useQuery } from "react-query";
import { get } from "../../../helpers";
import { DashboardPeli } from "../../../interfaces";
import { Link } from "react-router-dom";

interface ISlickProps {
    titulo        : string;
    infinite?     : boolean;
    autoplay?     : boolean;
    pauseOnHover? : boolean;
    itemSlick     : 'default' | 'hover';
    width         : string;
    height        : string;
    className?    : string;
    categoria     : string | number;
}


export const Slick: FC<ISlickProps> = ({ categoria, className, titulo, width, height, infinite = true, autoplay = true, pauseOnHover = true, itemSlick }) => {

    const settings = {
        infinite,
        slidesToShow   : 1,
        slidesToScroll : 1,
        autoplay,
        autoplaySpeed  : 2000,
        speed          : 500,
        prevArrow      : <PrevArrow />,
        nextArrow      : <NextArrow />,
        pauseOnHover,
        variableWidth: true,
        responsive: [
            {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
            },
            {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
            }
            },
            {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
            }
        ]
    };

    const url = (categoria === 'tendencias') ? 'trending/all/day' : `discover/movie?with_genres=${categoria}`;

    const { data, isLoading } = useQuery<DashboardPeli>([`movie-${categoria}`],() => get(`${url}`));

    if(isLoading){
        return <div>Cargando...</div>
    }

    return (
        <div className={`relative overflow-hidden ${className}`}>
            <h2 className="pl-2 text-white font-bold text-lg">
                {titulo} <Link className="ml-2 underline text-red-600 text-xs" to={`/pelis/search${categoria !== 'tendencias' ? '?search='+titulo : ''}`}>Ver todas</Link>
            </h2>

            <Slider {...settings}>

                {
                    data && data!.results && data!.results.map((pelicula, index: number) => {

                        if (itemSlick === 'hover') {
                            return (
                                <ItemSlickHover
                                    reveal={false}
                                    key={index}
                                    width={width}
                                    height={height}
                                    pelicula={pelicula}
                                />
                            )
                        }else{
                            return (
                                <ItemSlick
                                    reveal={false}
                                    key={index}
                                    width={width}
                                    height={height}
                                    pelicula={pelicula}
                                />
                            )
                        }
                    })
                }
            </Slider>
        </div>
    )
}
