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

            <div className="w-full h-auto pb-6">

                {
                    isLoading && <Spinner />
                }
                <div className="md:ml-11">
                    <Slick
                        itemSlick={"hover"}
                        width={"w-52"}
                        height={"h-96"}
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
                                width={"w-28"}
                                height={"h-52"}
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