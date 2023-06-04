import React from 'react'
import cl from './PostItem.module.css'

const PostItem = () => {
    return (
        <div className={cl.post}>
            <h1>Title</h1>
            <p>text</p>
            <button>button</button>
        </div>
    )
}

export default PostItem