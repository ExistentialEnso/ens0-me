export default interface INFT {
    name: string
    tokenId: number
    description: string

    chain: string
    contractAddress: string

    walletAddress?: string
    walletEns?: string

    previewImageURL?: string
    imageURL?: string

    openseaURL?: string

    hidden?: boolean
}