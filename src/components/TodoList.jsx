import React, { useEffect, useState } from 'react'

import Todo from './Todo'
import TodoForm from './TodoForm'


const getLocalItems = () => {
    let list = localStorage.getItem('list')
    console.log(list)

    if (list) {
        return JSON.parse(localStorage.getItem('list'))
    } else {
        return []
    }
}
function TodoList() {
    const [todos, setTodos] = useState(getLocalItems())   

    //Agregar una tarea
    const addTodo = todo => {
        if (!todo.text || /^\s*$/.test(todo.text)) {
            return
        }
        //Cuando hago click agrego la tarea
        const newTodos = [todo, ...todos]
        setTodos(newTodos)

          
    }


  

    const updateTodo = (todoId, newValue) => {
      setTodos(prev => prev.map(item => item.id === todoId ? newValue : item))
        
    }


    const removeTodo = id => {
        const removeTodo = [...todos].filter(todo => todo.id !== id)
        setTodos(removeTodo)
    }



    const completeTodo = id => {
        let updateTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete
            }
            return todo
        })

        setTodos(updateTodos)

    }

    useEffect(() => {
       localStorage.setItem('list', JSON.stringify(todos))
    }, [todos])




    return (
        <div>
            <h1>¿Qué tenes planeado para hoy?</h1>
            <TodoForm onSubmit={addTodo} />
            <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo} />
        </div>
    )
}

export default TodoList


