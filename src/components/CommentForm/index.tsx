import React, {useState} from "react";
import styles from './CommentForm.module.css';

interface CommentFormProps {
  onPublishClick: (text: string) => void;
}

export const CommentForm: React.FC<CommentFormProps> = ({onPublishClick}) => {
    const [commentInputValue, setCommentInputValue] = useState<string>('');

  return (
      <div className={styles.container}>
        <textarea
            className={styles.textarea}
            maxLength={512}
            value={commentInputValue}
            onChange={(event) => setCommentInputValue(event.target.value)}
            placeholder="Leave your oppinion on the movie here..."
        />
        <button
            onClick={() => {
                if (commentInputValue) {
                    onPublishClick(commentInputValue);
                    setCommentInputValue('');
                }
            }}
            className={styles.publishButton}>Publish</button>
      </div>
  )
}