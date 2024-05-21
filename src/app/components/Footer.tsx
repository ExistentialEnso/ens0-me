import React from 'react'
import { SocialIcon } from 'react-social-icons'

/**
 * Displays copyright information and social links at the bottom of each page.
 */
const Footer = () => {
    const style = { width: '38px', height: '38px' }

    const socials = [
        { url: 'https://github.com/ExistentialEnso', label: 'GitHub' },
        { url: 'https://www.x.com/existentialenso', label: 'X' },
        { url: 'https://bsky.app/ens0.me', label: 'BlueSky' },
        { url: 'https://leetcode.com/ens0/', label: 'LeetCode' },
        { url: 'https://www.reddit.com/u/existentialenso/', label: 'Reddit' },
        { url: 'https://linkedin.com/in/ens0', label: 'LinkedIn' },
        { url: 'https://www.twitch.tv/ens0plays', label: 'Twitch' },
        { url: 'https://discord.com/users/248659552654852097', label: 'Discord' },
    ]

    return (
        <div className="mx-auto container mt-16">
            <div className="p-6 w-full lg:w-6/12 lg:float-right lg:text-right">
                <h5 className="text-xl mb-4">ens0cials</h5>
                {socials.map((social, index) => (
                    <SocialIcon
                        key={index}
                        style={style}
                        fgColor="#FFF"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mr-2 last:mr-0"
                        {...social}
                    />
                ))}
            </div>

            <div className="p-6 w-full lg:w-6/12 lg:float-left">
                &copy; 2021-2024 Thorne. All Rights Reserved.
            </div>
        </div>
    )
}

export default Footer