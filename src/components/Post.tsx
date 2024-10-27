import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'
import { formatDistanceToNow } from 'date-fns'
import styles from './Post.module.css'
import Comment from './Comment'
import Avatar from './Avatar'
import { ptBR } from 'date-fns/locale'

interface Author {
    name: string;
    role: string;
    avatarUrl: string; 
}

interface Content {
    type: 'paragraph'| 'link';
    content: string;
}

export interface PostType {
    id: number;
    author: Author;
    publishedAt: Date;
    content: Content[];
}

interface PostProps {
   post: PostType;
}

const Post = ({ post }: PostProps) => {
    const [comments, setComments] = useState([
        'Post muito bacana, hein?'  
    ])

    const [newCommentText, setNewCommentText] = useState('')

    const publishedDateFormatted = new Intl.DateTimeFormat('pt-BR', {
        day: '2-digit',
        month: 'long',
        hour: '2-digit',
        minute: '2-digit'
    }).format(post.publishedAt)


    const publishedDateRelativeToNow = formatDistanceToNow(post.publishedAt, {
        locale: ptBR,
        addSuffix: true,
    })

    function handleCreateNewComment(event: FormEvent) {
        event.preventDefault()

        setComments([...comments, newCommentText])
        setNewCommentText('')
    }

    function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('')
        setNewCommentText(event.target.value)
    }

    function deleteComment(commentToDelete: string) {
        const commentsWithoutDeletedOne = comments.filter(comment => {
            return comment != commentToDelete
        })
        setComments(commentsWithoutDeletedOne)
    }

    function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('Esse campo é obrigatório!')
    }

    const isNewCommentEmpty = newCommentText.length === 0
    
    return (
    <article className={styles.post}>
        <header>
            <div className={styles.author}>
                <Avatar  src={post.author.avatarUrl} />
                <div className={styles.authorInfo}>
                    <strong>{post.author.name}</strong>
                    <span>{post.author.role}</span>
                </div>
            </div>

                <time title={publishedDateFormatted} dateTime={post.publishedAt.toISOString()}>{publishedDateRelativeToNow}</time>

        </header>

        <div className={styles.content}>
                {post.content.map(line => {
                    if (line.type === 'paragraph') {
                        return <p key={line.content}>{line.content}</p>
                    } else if (line.type === 'link') {
                        return <p key={line.content}><a href='#'>{line.content}</a></p>
                    }
                })}
        </div>


        <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
            <strong>Deixe seu feedback</strong>
            <textarea 
            name='comments' 
            placeholder='Deixe seu comentário' 
            value={newCommentText} 
            onChange={handleNewCommentChange} 
            onInvalid={handleNewCommentInvalid}
            required
            />
            <footer>
            <button 
            type="submit"
            disabled={isNewCommentEmpty}>
            Publicar
            </button>
            </footer>
        </form>
        {/* <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
        </div> */}
        <div className={styles.commentList}>
        {comments.map(comment => {
            return (
            <Comment 
            key={comment} 
            content={comment} 
            onDeleteComment={deleteComment} 
            />
        )
        })}
        </div>
    </article>
  )
}

export default Post
