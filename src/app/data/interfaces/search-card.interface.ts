import { IRating } from "./movie.interface"

export interface ISearch {
    error: boolean
    code: number
    data: {
        categories: { name: string }[]
        countries: { name: string }[]
        film: {
            nominations: string[]
            pictures: {
                poster: {
                    big: string
                    small: string
                },
                backdrop: string
            }
            age_rating: {
                age: string
                mpaa: string
            }
            description: {
                long_description: string
                short_description: string
            }
            id: {
                film_id: number
                imdb_id: string
                kp_id: number
            }
            movie_length: number
            names: {
                name: string
                en_name: string
                alternative: string
            }
            rating: IRating
            type: string
            year: number
            url: string
        }
    }[]
}
export interface ISearchCard {
    categories: { name: string }[]
    countries: { name: string }[]
    film: {
        nominations: string[]
        pictures: {
            poster: {
                big: string
                small: string
            },
            backdrop: string
        }
        age_rating: {
            age: string
            mpaa: string
        }
        description: {
            long_description: string
            short_description: string
        }
        id: {
            film_id: number
            imdb_id: string
            kp_id: number
        }
        movie_length: number
        names: {
            name: string
            en_name: string
            alternative: string
        }
        rating: IRating
        type: string
        year: number
        url: string
    }
}