import React, { FC } from 'react'
interface IProps {
    onClick?: () => void;
    className?: string;
    style?: React.CSSProperties;
}

export const PrevArrow: FC<IProps> = ({ className, style, onClick }) => {
    return (
        <div onClick={onClick} className={`${className} hidden`}>

        </div>
    )
}
