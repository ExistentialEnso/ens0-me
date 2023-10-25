import React from 'react'
import Link from 'next/link'

type Props = {
    href: string
    className?: string
    children?: React.ReactNode
}

/**
 * Component for displaying a link. Uses React's router for internal links.
 */
const StdLink = ({ href, children, className }: Props) => {
    const linkClass = `text-violet-500 hover:text-violet-300 ${className || ''}`

    const isExternalLink = href.startsWith('http://') || href.startsWith('https://')

    return isExternalLink ? (
        <a href={href} className={linkClass} target="_blank" rel="noopener noreferrer">
        {children}
        </a>
    ) : (
        <Link className={linkClass} href={href}>
            {children}
        </Link>
    )
}

export default StdLink