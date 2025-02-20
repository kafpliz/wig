export interface IPopularMovie {
    error: false,

    data: {
        logo: string
        id: number
        name: string
        raiting: {
            kp: number 
            imdb: number 
        },
    }[]
}

