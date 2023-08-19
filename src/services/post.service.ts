import {axiosService} from "./axios.service";
import {IRes} from "../types/axiosRes.type";
import {IPost} from "../interfaces/post.interface";
import {urls} from "../constants/urls";

const postService = {
    getAll: (): IRes<IPost[]> => axiosService.get(urls.posts.posts),
    getById: (id: string): IRes<IPost> => axiosService.get(urls.posts.byId(id))
}

export {
    postService
}