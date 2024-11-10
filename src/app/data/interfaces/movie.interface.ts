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
    persons: [{
        id: number
        name: string
        photo: string
        enName: string
        description: string
        profession: string
        enProfession: string
    }]
}