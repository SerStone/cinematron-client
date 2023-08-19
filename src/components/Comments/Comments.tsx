import {useEffect, useState} from "react";
import {commentService} from "../../services/comment.service";
import {Comment} from "./Comment";
import {IComment} from "../../interfaces/comment.interface";


const Comments = () => {
    const [comments, setComments] = useState<IComment[]>([]);

    useEffect(() => {
        // @ts-ignore
        commentService.getAll().then(value => value.data).then(value => setComments(value))
    }, [])

    // @ts-ignore
    return (
        <div>
            {comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
        </div>
    );
};

export {Comments};