import React, {useState} from "react";
import styles from './CommentsSection.module.css';
import {Comment} from "../Comment";
import {CommentForm} from "../CommentForm";
import {Divider} from "@mui/material";
import {IComment} from "../../interfaces/comment.interface";

interface CommentsSectionProps {
    comments: IComment[];
    onDeleteCommentHandler: (id: string) => void;
    onPublishCommentHandler: (text: string) => void;
    userId: string;
}

export const CommentsSection: React.FC<CommentsSectionProps> = ({comments, onDeleteCommentHandler, onPublishCommentHandler, userId}) => {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Comments</h2>
            <Divider />
            <CommentForm
                onPublishClick={onPublishCommentHandler}
            />
            <div className={styles.comments}>
                {comments.map((comment) => {
                    return <Comment key={comment._id} comment={comment} onDeleteHandler={onDeleteCommentHandler} userId={userId}/>
                })}
            </div>
        </div>
    )
}