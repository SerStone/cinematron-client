import React, {FC, useEffect, useState} from 'react';
import {IPost} from "../../interfaces/post.interface";
import {postService} from "../../services/post.service";
import {PostDetailed} from "./PostDetailed";

const Posts: FC = () => {
    const [posts, setPosts] = useState<IPost[]>([]);

    useEffect(() => {
        postService.getAll().then(value => value.data).then(value => setPosts(value))
    }, []);
    return (
        <div>
            {posts.map(post => <PostDetailed key={post.id} post={post}/>)}
        </div>
    );
};

export {Posts}