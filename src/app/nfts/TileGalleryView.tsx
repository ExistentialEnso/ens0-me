"use client"
import React, { useState } from 'react'
import Link from '../components/Link'
import Heading from '../components/Heading'

import INFTCategory from '../../interfaces/INFTCategory'

type TileGalleryViewProps = {
    nftCategory: INFTCategory,
    children?: React.ReactNode
}

/**
 * Component to show a tile-style view of a group of NFTs. Main view used by categories on the gallery page.
 */
const TileGalleryView = (props: TileGalleryViewProps) => {
    const { nfts, name, description, ordinal } = props.nftCategory
    const [showAll, setShowAll] = useState(false)

    // Don't show anything if there's no NFT data provided
    if(!nfts)
        return(<></>)

    const sortedNfts = nfts.sort((a,b) => a.name.localeCompare(b.name))
    let i = 0
    
    return (
        <div>
            <Heading size={2}><a id={"category" + ordinal}>{name} ({nfts.length})</a></Heading>

            <p className="text-md">{description || ""}</p>

            {sortedNfts.map(nft => {
                i++
                
                if(i>4 && !showAll)
                    return

                return(
                    <div className="inline-block p-6 w-6/12 lg:w-3/12 align-bottom text-center text-lg lg:text-xl rounded-md" key={nft.name}>
                        <Link href={nft.openseaURL ?? ""}>
                            <img src={nft.previewImageURL} alt={nft.name} className="rounded-md" /><br />
                            {nft.name}<br />
                        </Link><br />
                    </div>
                )
            })}

            {nfts.length > 4 && <div className="text-center w-[100%]">
                {!showAll && (<button type="button" className="bg-violet-500 hover:bg-violet-700 text-white text-lg font-bold py-2 px-4 rounded-full" onClick={() => setShowAll(true)}>show all</button>)}
            </div>}
        </div>
    )
}

export default TileGalleryView
