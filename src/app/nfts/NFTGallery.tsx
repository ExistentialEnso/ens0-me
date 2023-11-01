import React from 'react'
import model from '../../model'
import TileGalleryView from './TileGalleryView'

export const revalidate = 60 * 5 // 5 minutes

const NFTGallery = async () => {
    const nftCategories = await model.NFTCategory.find({}, {name: 1, description: 1, nfts: 1}).populate({path: 'nfts'}).sort({ordinal: 1})

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