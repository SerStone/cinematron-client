import {axiosService} from "./axios.service";
import {IRes} from "../types/axiosRes.type";
import {urls} from "../constants/urls";
import {IAlbum} from "../interfaces/album.interface";

const albumService = {
    getAll: (): IRes<IAlbum[]> => axiosService.get(urls.albums.albums),
    getById: (id: string): IRes<IAlbum> => axiosService.get(urls.albums.byId(id))
}

export {
    albumService
}