import { IPersonsShort } from "./person.interface"

export interface IMovie {
    id: number
    type: string
    name: string
    rating: number
    description: string
    slogan: string
    year: string
    poster: { url: string }
    genres: [{ name: string }]
    lists: string[]
    alternativeName: string
    movieLength: number
    names: string[]
    shortDescription: string
    ageRating: number,
    link: string
    persons: IPersonsShort[]
}
export interface IMovieHeader{
    name: string
    alternativeName: string
    year: string
    link: string
    rating: number
}
export interface IMovieGenresNominations{
    genres: [{ name: string }]
    lists: string[]
}