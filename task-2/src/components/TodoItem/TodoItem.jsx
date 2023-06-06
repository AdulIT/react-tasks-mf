import React from 'react'
import cl from './TodoItem.module.css'

const TodoItem = ({ children }) => {
    return (
        <>
            <li className={cl.item}>{ children }</li>
        </>
    )
}

export default TodoItem