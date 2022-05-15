import React, { Suspense } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Spinner } from '../pages/pelis/components'
import RouterPelis from './pelis/RouterPelis'
import { routesPeli } from './routes'

export const RouterApp = () => {
    return (
        <Suspense fallback={<Spinner />}>
            <BrowserRouter>
                <div className="bg-primary">
                    <Routes>

                        <Route
                            path={ routesPeli[0].path }
                            element={
                                <RouterPelis
                                    element={ routesPeli[0].component }
                                />
                            }
                        />

                        <Route
                            path="*"
                            element={<Navigate to={routesPeli[0].to} replace />} />

                    </Routes>
                </div>
            </BrowserRouter>
        </Suspense>
    )
}
