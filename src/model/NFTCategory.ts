import mongoose, { Schema, model } from 'mongoose'

const NFTCategorySchema = new Schema({
    name: String,
    description: String,

    smartCategory: { type: Boolean, default: false },

    nfts: [{ type: Schema.Types.ObjectId, ref: 'NFT' }],

    rules:[
        {
            ruleType: { type: String, enum: ['contractAddress', 'contractAddressIn']},
            value: String
        }
    ]
})

const NFTCategoryModel = mongoose.models.NFTCategory || model('NFTCategory', NFTCategorySchema)
export default NFTCategoryModel