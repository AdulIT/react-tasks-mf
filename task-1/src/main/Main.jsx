import React from 'react'
import PostItem from '../components/PostItem/PostItem'
import cl from './Main.module.css'


const Main = () => {

    const posts = []

    for (let i = 0; i < 3; i++)
    {
        posts.push(<PostItem />)
    }

    return (
        <main className={cl.main}>
            {posts}
        </main>
    )
}

export default Main