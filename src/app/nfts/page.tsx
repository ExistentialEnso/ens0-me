import React from 'react'
import Heading from '../components/Heading'
import NFTGallery from './NFTGallery'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Thorne | NFTs',
    description: 'Thorne has an extensive collection of NFTs she bought to keep for the art and community. Here are some of her favorites.',
}

/**
 * Component for displaying parts of Thorne's NFT collection on ens0.me.
 */
const NFTs = () => {
    return(
        <div className="container mx-auto pt-12 px-8">
            <Heading size={1}>nft collection</Heading>

            <p className="mb-8">
                I deeply love art of all kinds, from high art to pop art, from the cute to the sublime, which has driven my interest in collecting NFTs. This is a selection of NFTs that are part of my long-term collection, not intended as any sort of investment, but as a way to support creators I love and to own a piece of their work.
            </p>

            <NFTGallery />
        </div>
    )
}

export default NFTs