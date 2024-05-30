import React from 'react'
import Link from 'next/link'

/**
 * Component for displaying links at the top of the page
 */
const HeaderBar = () => {
    return(
        <div className="w-full p-5 bg-violet-800 hidden lg:block">
            <Link href="/" className="text-2xl lg:text-2xl font-bold text-white hover:text-violet-200 ml-6">Thorne</Link>
            <Link href="/code" className="text-lg lg:text-lg text-white hover:text-violet-400 ml-6">coding</Link>
            <Link href="/gaming" className="text-lg lg:text-lg text-white hover:text-violet-400 ml-6">gaming</Link>
            <Link href="/contact" className="text-lg lg:text-lg text-white hover:text-violet-400 ml-6">contact</Link>
        </div>
    )
}

export default HeaderBar