import {axiosService} from "./axios.service";
import {IRes} from "../types/axiosRes.type";
import {IComment} from "../interfaces/comment.interface";
import {urls} from "../constants/urls";

const commentService = {
    getAll: (): IRes<IComment[]> => axiosService.get(urls.comments.comments),
    getById: (id: string): IRes<IComment> => axiosService.get(urls.comments.byId(id))
}

export {
    commentService
}