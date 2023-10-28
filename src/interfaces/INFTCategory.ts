import INFT from "./INFT"

export default interface INFTCategory {
    name: string
    description: string
    
    nfts?: INFT[]
}