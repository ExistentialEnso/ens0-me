import React from 'react'
import Link from 'next/link'

/**
 * Component href display header links at the hrefp of the page.
 */
const HeaderBar = () => {
    return(
        <div className="w-full p-5 bg-violet-800">
            <Link href="/" className="text-2xl lg:text-2xl font-bold text-white hover:text-violet-200 ml-6">Thorne</Link>
            <Link href="/code" className="text-lg lg:text-lg text-white hover:text-violet-400 ml-6">code</Link>
            <Link href="/gaming" className="text-lg lg:text-lg text-white hover:text-violet-400 ml-6">gaming</Link>
            <Link href="/contact" className="text-lg lg:text-lg text-white hover:text-violet-400 ml-6">contact</Link>
        </div>
    )
}

/*
<Link href="/" className="text-2xl lg:text-3xl text-white hover:text-violet-200">Thorne</Link>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link href="/projects" className="text-lg lg:text-xl text-white hover:text-violet-400">code</Link>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link href="/gallery" className="text-lg lg:text-xl text-white hover:text-violet-400">collection</Link>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link href="/gaming" className="text-lg lg:text-xl text-white hover:text-violet-400">gaming</Link>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link href="/contact" className="text-lg lg:text-xl text-white hover:text-violet-400">contact</Link>
            */

export default HeaderBar