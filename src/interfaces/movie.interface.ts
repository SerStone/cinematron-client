import {IGenre} from "./genre.interface";
export interface IMovie {
    adult: boolean;
    backdrop_path: string;
    belongs_to_collection: any;
    budget: number;
    genres: IGenre[];
    homepage: string;
    id: number;
    imdb_id: number;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string | null;
    release_date: Date;
    revenue: number;
    runtime: number;
    status: string;
    tagline: string;
    title: string;
    vote_average: number;
    vote_count: number;
}
export interface ISearch {
    searchText: string;
}

export interface IPagination<T> {
    page: number;
    results: T;
    total_pages: number;
    total_results: number;
}

export interface IRating {
    vote_average: number
}

export interface IVideo {
    id: string;
    iso_639_1: string;
    iso_3166_1: string;
    name: string;
    key: string;
    published_at: string;
    site: string;
    size: number;
    type: string;
    official: boolean;
}

export interface IVideos {
    id: number;
    results: IVideo[];
}