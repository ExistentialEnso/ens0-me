import React from 'react'

type ButtonProps = {
    children?: React.ReactNode,
    size?: 'sm' | 'md' | 'lg',
    onClick?: (e: React.MouseEvent) => void,
    disabled?: boolean
}

const Button = (props: ButtonProps) => {
    const { children, onClick } = props

    let className = "bg-violet-500 hover:bg-violet-700 text-white font-bold py-2 px-4 rounded-full"

    if(props.disabled) {
        className = "bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full"
    }
    
    const size = props.size ?? "lg"

    className += " text-" + size

    return(
        <button 
            type="button" 
            onClick={onClick} 
            className={className}>{children}</button>
    )
}

export default Button