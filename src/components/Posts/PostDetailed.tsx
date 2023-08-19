import React, {FC} from 'react';
import {IPost} from "../../interfaces/post.interface";

interface IProps {
    post: IPost;
}
const PostDetailed: FC <IProps>= ({post}) => {
    return (
        <div>
            <div>id: {post.id}</div>
            <div>title: {post.title}</div>
            <div>body: {post.body}</div>
        </div>
    );
};

export {PostDetailed};