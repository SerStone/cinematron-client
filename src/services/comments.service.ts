import {axiosServiceUser} from "./axios.service";
import {urls} from "../constants";
import {IComment} from "../interfaces/comment.interface";

export class CommentsService {
    static async getByMovieId(id: string): Promise<IComment[]> {
        try {
            const res = await axiosServiceUser.get(urls.comments.commentsByMovieId(id))
            return res.data;
        } catch (e) {
            throw e;
        }
    }

    static async createOne(userId: string, userName: string, movieId: string, text: string): Promise<IComment> {
        const body = {
            userId,
            userName,
            movieId,
            text,
        }

        try {
            return await axiosServiceUser.post(urls.comments.add, body)
        } catch (e) {
            throw e;
        }
    }

    static async delete(id: string, userId: string): Promise<IComment> {
        try {
            return await axiosServiceUser.delete(urls.comments.delete(id), {data: {userId}})
        } catch (e) {
            throw e;
        }
    }
}