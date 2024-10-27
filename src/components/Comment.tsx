import { useState } from 'react'
import styles from './Comment.module.css'
import { ThumbsUp, Trash } from 'phosphor-react'
import Avatar from './Avatar'

interface CommentProps {
  content: string;
  onDeleteComment: (comment: string) => void;
}


const Comment = ({ content, onDeleteComment }: CommentProps) => {
  const [likeCount, setLikeCount] = useState(0)

  function handleDeleteComment() {
    onDeleteComment(content)
  }
  function handleLikeComment() {
    setLikeCount((state) => {
      return state + 1
    })
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} 
      src="https://avatars.githubusercontent.com/u/84293209?v=4" 
      alt='user'
      />

      <div className={styles.commentBox}>
            <div className={styles.commentContent}>
                <header>
                    <div className={styles.authorAndTime}>
                        <strong>Paulo Borges</strong>
                        <time title="21 de outubro às 17:28h" dateTime='2024-10-21 17:28:27'>Cerca de 1h atrás</time>
                    </div>
                    <button onClick={handleDeleteComment} title='Deletar comentário'>
                      <Trash size={24} />
                    </button>
                </header>
                <p>{content}</p>
            </div>

            <footer>
                <button onClick={handleLikeComment}>
                  <ThumbsUp />
                  Aplaudir <span>{likeCount}</span>
                </button>
            </footer>
      </div>
    </div>
  )
}

export default Comment
