import { lazy, LazyExoticComponent } from "react";

type JSXComponent = () => JSX.Element;

interface IRoutes {
    path     : string;
    to       : string;
    component: LazyExoticComponent<JSXComponent> | JSXComponent; // Puede tener un componente o un componente asincrono (Un componente con lazy o un componente normal)
    children?: IRoutes[];
}


// LAZY PELICULAS
const Peli       = lazy(() => import("./pelis/DashboardPelis"));
const PeliHome   = lazy(() => import("../pages/pelis/pages/Home"));
const PeliDetail = lazy(() => import("../pages/pelis/pages/DetailMovie"));
const PeliSearch = lazy(() => import("../pages/pelis/pages/Search"));



export const routesPeli: IRoutes[] = [
    {
        path      : "/pelis/*",
        to        : "/pelis/",
        component : Peli
    },
    {
        path      : "",
        to        : "",
        component : PeliHome
    },
    {
        path      : "detail-movie/:id",
        to        : "detail-movie",
        component : PeliDetail
    },
    {
        path      : "search",
        to        : "search",
        component : PeliSearch
    },
]