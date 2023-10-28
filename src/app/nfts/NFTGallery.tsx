import React from 'react'
import model from '../../model'

import TileGalleryView from './TileGalleryView'

const NFTGallery = async () => {
    const nftCategories = await model.NFTCategory.find({}, {name: 1, description: 1, nfts: 1}).populate({path: 'nfts'})

    return(
        <div>
            {nftCategories.map(categoryData => {
                const category = {
                    name: categoryData.name || "",
                    description: categoryData.description || "",
                    nfts: categoryData.nfts
                }

                return(
                    <TileGalleryView nftCategory={category} key={categoryData.name} />
                )
            })}
        </div>
    )
}

export default NFTGallery