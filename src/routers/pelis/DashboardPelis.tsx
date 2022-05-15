import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { LayoutPelis } from '../../components';
import { routesPeli } from '../routes';

export const DashboardPelis = () => {
    return (
        <>
            <LayoutPelis>
                <Routes>

                    {
                        routesPeli.map(({ path, component: Component }) => (
                            <Route
                                key={path}
                                path={path}
                                element={ <Component /> }
                            />
                        ))
                    }

                    <Route path='*' element={ <Navigate to={ routesPeli[1].to } replace />} />
                </Routes>
            </LayoutPelis>

        </>
    )
}

export default DashboardPelis
