import React, { FC } from 'react'
import { Sidebar } from '../ui';
import { Footer } from '../ui/Footer';

interface IProps {
    children: any;
}

export const LayoutPelis: FC<IProps> = ({ children }) => {

    return (
        <div className="bg-black w-full h-auto min-h-screen relative xs:pb-4">
            <h1 className="fixed top-0 right-2 text-red-600 font-bold text-xl z-50">Angel</h1>
            <Sidebar />
            { children }
            <Footer />
        </div>
    )
}
