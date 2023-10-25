import React from 'react'

type HeadingProps = {
    size: number,
    children?: React.ReactNode
}

/**
 * Basic React + Tailwind heading component
 */
const Heading = (props: HeadingProps) => {
    const { size, children } = props

    switch(size) {
        case 1:
            return <h1 className="text-4xl lg:text-6xl my-3">{children}</h1>
        case 2:
            return <h2 className="text-2xl lg:text-4xl mt-2 my-8">{children}</h2>
        default:
            return <h3 className="text-xl lg:text-2xl my-3">{children}</h3>
    }
}

export default Heading