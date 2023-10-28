import mongoose, { Schema, model } from 'mongoose'

const NFTSchema = new Schema({
    name: String,
    tokenId: Number,
    description: String,

    chain: String,
    contractAddress: String,

    walletAddress: String,
    walletEns: String,

    previewImageURL: String,
    imageURL: String,

    openseaURL: String,

    hidden: { type: Boolean, default: false },
})

const NFTModel = mongoose.models.NFT || model('NFT', NFTSchema)
export default NFTModel