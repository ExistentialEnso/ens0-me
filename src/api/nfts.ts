/* eslint-disable import/no-anonymous-default-export */
import { Application, Request, Response } from 'express'
import model from '../model'
import contact from './contact'

const { NFTCategory } = model

export default (app: Application) => {
    app.get('/api/nft-categories', async (req: Request, res: Response) => {
        const nftCategories = await NFTCategory.find({}).populate('nfts')
        res.send(nftCategories)
    })

    contact(app)
}