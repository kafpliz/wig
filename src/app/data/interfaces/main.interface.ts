import { IInnovation } from "./innovation.interface"
import { IPopularMovie } from "./popular-movie.interface"
import { ITopMovie } from "./top-movie.interface"
import { IWathHistory } from "./wath-history.interface"

export interface IMain {
    innovation: IInnovation[],
    popular_movie: IPopularMovie[],
    top_movie: ITopMovie[],
    history: IWathHistory[] 
}


export interface IMPing {
    code:number
}
