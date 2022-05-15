import { Suspense } from "react"
import { useQuery } from "react-query";
import { Slick } from "../../../components"
import { get } from "../../../helpers";
import { IDataCategoria } from "../../../interfaces";
import { Spinner } from "../components";
import {Helmet} from "react-helmet";


const Home = () => {

    const { data, isLoading } = useQuery<IDataCategoria>([`movie-categorias`],() => get(`genre/movie/list`));

    if(isLoading){
        return <Spinner />
    }

    return (
        <>
            <Helmet>
                <title>Peliculas</title>
                <meta name="description" content="Las mejores peliculas en tendencia" />
            </Helmet>

            <div className="w-full h-auto pb-6 ">

                {
                    isLoading && <Spinner />
                }
                <div className="md:ml-11">
                    <Slick
                        autoplay={false}
                        itemSlick={"hover"}
                        width={"xs:w-52 md:w-52 lg:w-72 xl:w-[26rem]"}
                        height={"xs:h-72 md:h-72 lg:h-[26rem] xl:h-[44rem]"}
                        titulo={"Tendencias"}
                        categoria={"tendencias"}
                    />
                </div>

                <div className="w-3/4 mt-2 m-auto ">
                    {
                        data && data!.genres && data!.genres.map((categoria, index: number) => (
                            <Slick
                                key={index}
                                className="mb-2"
                                itemSlick={"default"}
                                width={"xs:w-28 lg:w-40 xl:w-48"}
                                height={"xs:h-52 lg:h-64 xl:h-80"}
                                titulo={categoria.name}
                                categoria={categoria.id}
                            />
                        ))
                    }
                </div>

            </div>
        </>
    )
}

export default Home