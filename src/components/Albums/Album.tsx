import React, {FC} from 'react';
import {IAlbum} from "../../interfaces/album.interface";
import {useNavigate} from "react-router-dom";
import {IUser} from "../../interfaces/user.interface";

interface IProps {
    album: IAlbum
}
const Album: FC<IProps> = ({album}) => {

    const {userId, id, title} = album;
    return (
        <div>
            <div>userId:{userId}</div>
            <div>id:{id}</div>
            <div>title:{title}</div>
        </div>
    );
};

export default Album;