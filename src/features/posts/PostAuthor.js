import React from 'react'
import {useSelector} from 'react-redux'

export const PostAuthor = ({userId}) => {
    const user = useSelector(state=> 
                            state.users.find(u=> u.id === userId))
    return(<span> {user?user.name: 'unknown author'}</span>)
}