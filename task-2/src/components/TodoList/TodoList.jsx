import React from 'react'
import { useRef } from 'react'
import { useState } from 'react'
import TodoItem from '../TodoItem/TodoItem'
import cl from './TodoList.module.css'

let nextId = 0

const TodoList = () => {
    const [todoItem, setTodoItem] = useState('')
    const [todos, setTodos] = useState([])


    function addTodo(e)
    {
        e.preventDefault()
        setTodos([
            ...todos,
            {id: nextId++, todo: todoItem}
        ])
        setTodoItem('')
        console.log(todos)
    }
    
    const todolist = todos.map((todo) =>
    {
        return <TodoItem key={todo.id}> { todo.todo} </TodoItem>
    })

    return (
        <div>
            <form className={cl.form}>
                <input
                    className={cl.input}
                    value={todoItem}
                    onChange={e => setTodoItem(e.target.value)}
                />
                <button
                className={cl.btn}
                    onClick={(e) => addTodo(e)}
                >
                    Add Todo
                </button>
            </form>

            <h1>Todo List:</h1>

            <ul>
                { todolist }
            </ul>
        </div>
    )
}

export default TodoList