export interface ISearchCard {
    id:number
    name: string
    alternativeName: string
    names: string[] | null
    poster: string
    lists: string[] | null
    type: string
    genres: string[]
    releaseYears: number[] | null
    movieLength: number | null
    year: number | null
    ageRating:boolean
}