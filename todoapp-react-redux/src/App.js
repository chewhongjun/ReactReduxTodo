import React from 'react'
import './App.css'
import AddTodo from './components/addTodo'
import TodoList from './components/todoList'
import VisibilityFilter from './components/visibilityFilter'


const filters = ['all','completed','incomplete']
function App() {
    return (
        <div className="App">
            <h1>TODO Manager</h1>            
            <AddTodo />
            <TodoList todos={[{content:'task 1'},{content:'task 2'}]}/>
            <VisibilityFilter filters={filters}/>
        </div>
    )
}

export default App