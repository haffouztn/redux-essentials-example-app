import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Post} from './Post'
import {ShowStatus} from './ShowStatus'
import {selectAllPosts, fetchPosts} from './postsSlice'

export const PostsList = () => {
    const dispatch = useDispatch()
    const postStatus = useSelector(state => state.posts.status)
    useEffect(() => {
      if (postStatus === 'idle') {
        dispatch(fetchPosts())
      }
    }, [postStatus, dispatch])
    const posts = useSelector(selectAllPosts)
    const orderedPosts = posts.slice().sort((a,b)=> b.date.localeCompare(a.date))
    const renderedPosts = orderedPosts.map(post => (
        <Post key={post.id} post={post}/>
      ));
    return (
        <section className="posts-list">
          <h2>Posts</h2>
          <ShowStatus status={postStatus}/>
          {renderedPosts}
        </section>
      ); 
};