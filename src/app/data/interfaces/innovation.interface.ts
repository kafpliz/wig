export interface IInnovation{
    error: false,

   data: {
    id: number
    name: string
    alternative_name: string
    year: number
    raiting: {
        kp: number
        imdb: number
    },
    logo: string
   }[]
}