export interface ISearchCard {
    id:number
    name: string
    rating: number
    alternativeName: string
    names: string[] | null
    poster: {url:string}
    lists: string[] | null
    type: string
    genres: {name:string}[]
    releaseYears: number[] | null
    movieLength: number | null
    year: number | null
    ageRating:boolean
}