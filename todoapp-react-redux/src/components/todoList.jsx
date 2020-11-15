import React from 'react'

const Todo = ({ todo }) => <li>{todo.content}</li>

export default function todoList({todos}) {
    return (
        todos.map((todo, i) => (
            <Todo key={i} todo={todo}/>
        ))
    )
}
