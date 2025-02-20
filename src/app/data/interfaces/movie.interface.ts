import { IPersonsShort } from "./person.interface"

export interface IRating{
    film_critics:number
    imdb:number
    kp:number
}
export interface IMovie {
    code: number
    data: {
        categories: { name: string }[]
        countries: { name: string }[]
        film: {
            favorite:boolean
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
        persons: IPersonsShort[]


    }
    error: boolean

}
export interface IMovieHeader {
    id: number
    names: {
        name:string
        en_name:string
        alternative:string
    }
    year: number
    rating:IRating
    url:string
    isFav:boolean
}

export interface INominationsCategories{
    categories: { name: string }[]
    nominations: string[]
}