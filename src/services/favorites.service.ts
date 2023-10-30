import {axiosServiceUser} from "./axios.service";
import {urls} from "../constants";
import {IUser} from "../interfaces/user.interface";

export class FavoritesService {
    static async getByUserId(id: string): Promise<{
        id: number;
        release_date: string;
        title: string;
        poster_path?: string | null;
        vote_average: number;
    }[]> {
        try {
            const res = await axiosServiceUser.get(urls.favorites.getByUserId(id));
            return res.data;
        } catch (e) {
            throw e;
        }
    }

    static async addMovieToFavorites(userId: string, movie: {
        movieId: number;
        release_date?: string;
        title: string;
        poster_path?: string | null;
        vote_average?: number;
    }): Promise<IUser> {
        try {
            const res = await axiosServiceUser.patch(urls.favorites.add(userId), {movie});
            return res.data;
        } catch (e) {
            throw e;
        }
    }

    static async removeMovieFromFavorites(userId: string, movieId: number): Promise<IUser> {
        try {
            const res = await axiosServiceUser.delete(urls.favorites.delete(userId, movieId));
            return res.data;
        } catch (e) {
            throw e;
        }
    }
}