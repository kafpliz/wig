import { IMovie, IRating } from "./movie.interface"
import { ISearch} from "./search-card.interface"

export interface IPersons {
 code:number
 error:boolean
 data: {
    person: {
        info: {
            id: {
                film:number
                kp:string
                photo:string
            }
            names: {
                name:string
                 en :string
            }
            date: {
                age:number
            }
        }
        films:{
            categories: { name: string }[]
            countries: { name: string }[]
            film: {
                nominations: string[]
                pictures:{
                    poster: {
                        big: string
                        small: string
                    },
                    backdrop:string
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
                    film_id:number
                    imdb_id:string
                    kp_id:number
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
                profession:string
            }
        }[]
    }
 }
}
export interface IPersonsShort{
    id: number
    name: string
    kp_id:string
    photo: string
    enName: string
    profession:string
}
export interface IPersonsBestMovie{
        id: number
        name: string
        alternativeName: string
        rating: number
        poster: string
        year:number
    
}