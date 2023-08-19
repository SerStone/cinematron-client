import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

import {postService} from "../../services/post.service";
import {IPost} from "../../interfaces/post.interface";

const Post = () => {

    const [post, setPost] = useState<IPost | null> (null);
    const {postId} = useParams();

    useEffect(() => {
     if (postId)   postService.getById(postId).then(value => value.data).then(value => setPost(value))
    }, [postId])

    // @ts-ignore
    return (
        <div>
            {post&&(
                <div>
                    <div>id: {post.id}</div>
                    <div>title: {post.title}</div>
                    <div>body: {post.body}</div>
                </div>
            )}
        </div>
    );
};

export {Post};