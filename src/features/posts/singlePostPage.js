import React from 'react'
import { useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
import {PostAuthor} from './PostAuthor'
import {selectPostById} from './postsSlice'
export const SinglePostPage = ({ match }) => {
  const { postId } = match.params

  const post = useSelector(state => selectPostById(state, postId))
  

  if (!post) {
    return (
      <section>
        <h2>Post not found!</h2>
      </section>
    )
  }

  return (
    <section>
      <article className="post">
        <h2>{post.title}</h2>
        <PostAuthor userId={post.userId}/>
        <p className="post-content">{post.content}</p>
        <Link to = {`editPost/${post.id}`} className="button">
          Edit
        </Link>
      </article>
    </section>
  )
}