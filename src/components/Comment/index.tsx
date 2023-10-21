import React from "react";
import styles from './Comment.module.css';
import userImg from '../../images/user.png';
import trashImg from '../../images/trash.png';
import {IComment} from "../../interfaces/comment.interface";
import moment from "moment";

interface CommentProps {
  comment: IComment;
  onDeleteHandler: (id: string) => void;
  userId: string;
}

export const Comment: React.FC<CommentProps> = ({comment, onDeleteHandler, userId}) => {
  return (
      <div className={styles.container}>
          <img alt="User" src={userImg} className={styles.userImg}/>
          <div className={styles.data}>
              <div className={styles.additionalData}>
                  <h6 className={styles.username}>{comment.userName || 'CinemaTron user'}</h6>
                  <p className={styles.publishDate}>published on {moment(comment.createdAt).format("MMM Do YYYY, h:mm a")}</p>
              </div>
              <p className={styles.text}>{comment.text}</p>
          </div>
          {userId === comment.userId && <img onClick={() => onDeleteHandler(comment._id)} alt="Trash" src={trashImg} className={styles.trashImg}/>}
      </div>
  )
}