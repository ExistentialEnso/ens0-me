import React from 'react'

import Heading from '../components/Heading'
import Link from '../components/Link'
import Image from 'next/image'

const nfts = [
    {
        name: "Dastardly Ducks",
        description: "10k pfp collection that saved our farm.",
        externalURL: "https://dastardlyducks.com",
        imageURL: "/projects/dastardly-ducks.png",
        contract: {
            githubURL: "https://github.com/ExistentialEnso/dasduk-contract",
            etherscanURL: "https://etherscan.io/address/0x5472896e283ebcb13924c659c9db594aa9dc05a4"
        },
        socials: {
            twitter: "https://twitter.com/dastardlyducks"
        }
    },
    {
        name: "Dastardly Moonducks",
        description: "Utilized merkle proofs for free claims for Dastardly Ducks holders.",
        externalURL: "https://moon.dastardlyducks.com",
        imageURL: "/projects/moonducks.png",
        contract: {
            githubURL: "https://github.com/smolfarm-moonducks-contract",
            etherscanURL: "https://etherscan.io/address/0x8cfc5be7d45ee598e3ec20f7a9ef03f1e2886582"
        },
        socials: {
            twitter: "https://twitter.com/dastardlyducks"
        }
    },
    {
        name: "Yo Kitties",
        description: "Collab with Iron Chef Cat Cora building upon the world of the ducks.",
        externalURL: "https://yokitties.com",
        imageURL: "/projects/yo-kitties.png",
        contract: {
            githubURL: "https://github.com/smolfarm/yo-kitties-contract",
            etherscanURL: "https://etherscan.io/address/0xC303Ff7a410fB8cD27c203753088009630e2DDd4"
        },
        socials: {
            twitter: "https://twitter.com/yokittiesnft"
        }
    },
    {
        name: "Polymorphic Pride Flags",
        description: "Morphable, fully on-chain SVG flags.",
        externalURL: "https://polymorphicpride.xyz",
        imageURL: "/projects/polymorphic-pride.svg",
        contract: {
            githubURL: "https://github.com/existentialenso/polymorphic-pride-contract",
            etherscanURL: "https://etherscan.io/address/0xa27b99e4df10bf3a9f28bcf9c83301a66035bc06"
        },
        socials: {
            twitter: "https://twitter.com/polymorphicflag"
        }
    },
    {
        name: "neon runners",
        description: "345 cyberpunk pfps",
        externalURL: "https://neonrunners.xyz",
        imageURL: "/projects/neon-runners.webp",
        contract: {
            githubURL: "https://github.com/smolfarm/neonrunners-contract",
            etherscanURL: "https://etherscan.io/address/0x82f2b7599ecd534c3e2ccf160f2f090bc483f5aa"
        },
        socials: {
            twitter: "https://twitter.com/NEONRUNNERSnft"
        }
    },
    {
        name: "Wandering Witches",
        description: "Genesis of a worldbuilding project.",
        externalURL: "https://wanderingwitches.xyz",
        imageURL: "/projects/wandering-witches.png",
        contract: {
            githubURL: "https://github.com/smolfarm/witch-contracts",
            etherscanURL: "https://etherscan.io/address/0x6d2bbdb4aa635370ef95025e26b764f3666c3566"
        },
        socials: {
            twitter: "https://twitter.com/wandwitchnft"
        }
    },
    {
        name: "corg corg",
        description: "Just cute cc0 corgis.",
        externalURL: "https://corgcorg.xyz",
        imageURL: "/projects/corg-corg.png",
        contract: {
            etherscanURL: "https://etherscan.io/address/0x9a510542e56d4d1b571dbf2110fe9307a3fc0569"
        },
        socials: {
            twitter: "https://twitter.com/corgcorgnft"
        }
    },

]

/**
 * Component to display projects Thorne has done on ens0.me
 */
const Code = () => {
    return(
        <div className="container mx-auto pt-12 px-8">
            <Heading size={1}>coding projects</Heading>

            <br />

            <Heading size={2}>🎨 NFTs</Heading>

            <p className="mb-8">
                I am well-known for my highly gas-optimized contracts for NFT minting. Additionally, I build websites and do metadata generation. <Link href="https://github.com/smolfarm/smol-toker">smol toker</Link> is my TypeScript-based library to assist with crafting the perfect set of generative arts.
            </p>

            {nfts.map(nft => {
                return(
                    <div key={nft.name} className="inline-block p-6 w-full lg:w-3/12 align-middle text-center text-2xl">
                        <Link href={nft.externalURL}><img src={nft.imageURL} alt={nft.name} /></Link><br />
                        <Link href={nft.externalURL}>{nft.name}</Link><br />
                        <div className="my-2 text-lg">
                            {nft.description}
                        </div>
                        {nft.contract && (
                            <div className="text-sm">Contract: {nft.contract.githubURL && <span><Link href={nft.contract.githubURL}>GitHub</Link> |</span>} <Link href={nft.contract.etherscanURL}>Etherscan</Link></div>
                        )}
                    </div>
                )
            })}

            <Heading size={2}>🏗️ this site</Heading>

            <p className="mb-8">
                This site itself is a custom-built Next/React/TypeScript app.
            </p>

            <br />

        </div>
    )
}

export default Code

/*
<Heading size={2}>🤖 artificial intelligence</Heading>

            <p className="mb-8">
                I am deeply interested in artificial intelligence, the area of software that excites me most and seems to hold the most potential.
            </p>

            <div className="inline-block p-6 w-full lg:w-3/12 align-middle text-center text-2xl">
                <Link href="https://dan.dastardlyducks.com"><Image width={400} height={400} src="/dan.png" alt="Dan the Duck" /></Link><br />
                <Link href="https://dan.dastardlyducks.com">Dan the Duck</Link><br />
                <div className="my-2 text-lg">
                    Duck AI chatbot built in LangChain. Chats through Bluesky &amp; Discord.
                </div>
            </div>*/