export interface IPersonalAccount {
    id: string
    endDate: number | boolean
    isSubscribe: boolean
    payUrl: string
    refUrl:string
}
export interface IPromocode {
    success:boolean
    msg: string
    
}