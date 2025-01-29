import { IMovie } from "./movie.interface"
import { ISearchCard } from "./search-card.interface"

export interface IPersons {
    id: number
    name: string
    enName: string
    photo: string
    lifeTime: {
        start: string
        end: string | null
    }
    age: number
    genres: string[]
    profession: string[]
    bestMovie: IPersonsBestMovie[]
    birthPlace:string[]
    screenwriter:ISearchCard[]
    producer:ISearchCard[]
    actor:ISearchCard[]

}
export interface IPersonsShort{
    id: number
    name: string
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