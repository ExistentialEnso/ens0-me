"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const HamburgerMenu = () => {
    const [open, setOpen] = useState(false)

    let menuStyle = {
        display: open ? "block" : "none",
        position: "absolute",
        left: 0,
        top: "76px",
        width: "240px",
        height: "100%"
    }

    return(
        <div className="w-full p-5 bg-violet-800 lg:hidden">
            <div className="align-middle cursor-pointer inline-block" onClick={() => setOpen(!open)}>
                <Image src="/hamburger.svg" alt="Menu Toggle" width={32} height={32} style={{width: "32x"}} />
            </div>

            <Link href="/" className="ml-4 text-2xl text-white align-middle font-bold">Thorne</Link>

            <div className="px-5 py-3 bg-slate-100 dark:bg-slate-700 mt-[-4px]" style={menuStyle}>
                <Link onClick={() => setOpen(false)} href="/code" className="my-8 block text-xl text-slate-100 hover:text-slate-300">code</Link>
                <Link onClick={() => setOpen(false)} href="/gaming" className="my-8 block text-xl text-slate-100 hover:text-slate-300">gaming</Link>
                <Link onClick={() => setOpen(false)} href="/contact" className="my-8 block text-xl text-slate-100 hover:text-slate-300s">contact</Link>
            </div>
        </div>
    )
}

export default HamburgerMenu