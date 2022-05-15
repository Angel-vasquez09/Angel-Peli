import React from 'react'

export const Spinner = () => {
    return (
        <div className="w-full h-screen bg-black flex justify-center items-center">
            <span className="animate-spin text-white w-11 h-11 border-t-2 border-t-red-600 rounded-full"></span>
        </div>
    )
}
