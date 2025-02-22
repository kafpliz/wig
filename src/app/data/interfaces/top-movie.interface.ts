import { IRating } from "./movie.interface"

export interface ITopMovie{
    error: false,

    data: {
        categories: { name: string }[]
        countries: { name: string }[]
        film: {
            nominations: string[]
            pictures:{
                poster: {
                    big: string
                    small: string
                },
                backdrop:{
                    url:string
                }
            }
            age_rating: {
                age:string
                mpaa:string
            }
            description:{
                long:string
                short:string
            }
            id:{
                film:number
                imdb_id:string
                kp:number
            }
            movie_length:number
            names: {
                name:string
                en_name:string
                alternative:string
            }
            rating:IRating
            top:{
                top10:number | null
                top250:number | null
            }
            type: string
            year:number
            url:string
        }

       }[]


}