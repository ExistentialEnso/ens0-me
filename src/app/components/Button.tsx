/**
 * 
 *                   _        ___                   
 *                  | |      / __)                  
 *   ___ ____   ___ | |    _| |__ _____  ____ ____  
 *  /___)    \ / _ \| |   (_   __|____ |/ ___)    \ 
 * |___ | | | | |_| | |     | |  / ___ | |   | | | |
 * (___/|_|_|_|\___/ \_)    |_|  \_____|_|   |_|_|_|
 * 
 * 
 * React component for a simple button, designed to standardize button styles
 *
 */

import React from 'react'

type ButtonProps = {
    children?: React.ReactNode,
    size?: 'sm' | 'md' | 'lg',
    onClick?: (e: React.MouseEvent) => void,
}

const Button = (props: ButtonProps) => {
    const { children, onClick } = props

    let className = "bg-emerald-500 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded-full"
    
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