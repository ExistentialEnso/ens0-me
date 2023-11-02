import React from 'react'
import model from '../../model'
import TileGalleryView from './TileGalleryView'

export const revalidate = 60 * 5 // 5 minutes

const NFTGallery = async () => {
    const nftCategories = await model.NFTCategory.find({}, {name: 1, description: 1, ordinal: 1, nfts: 1}).populate({path: 'nfts'}).lean().sort({ordinal: 1})

    return(
        <div>
            <div className="mb-8">
                <h3 className="text-xl">table of contents</h3>
                <ul className="list-disc ml-4">
                    {nftCategories.map(categoryData => {
                        return(
                            <li key={categoryData.name}><a href={"#category" + categoryData.ordinal} className="text-violet-400">{categoryData.name} ({categoryData.nfts.length})</a></li>
                        )
                    })}
                </ul>
            </div>

            {nftCategories.map(categoryData => {
                const category = {
                    name: categoryData.name || "",
                    description: categoryData.description || "",
                    ordinal: categoryData.ordinal || 0,
                    nfts: categoryData.nfts.map((n: any) => {
                        return {
                            name: n.name || "",
                            previewImageURL: n.previewImageURL || "",
                            openseaURL: n.openseaURL || ""
                        }
                    })
                }

                return(
                    <TileGalleryView nftCategory={category} key={categoryData.name} />
                )
            })}
        </div>
    )
}

export default NFTGallery