export interface IPersonalAccount {
    id: string
    endDate: number | null
    isSubscribe: boolean
    payUrl: string
    refUrl:string
}
export interface IPromocode {
    success:boolean
    msg: string
    
}