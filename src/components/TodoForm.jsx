import React, { useState, useEffect, useRef } from 'react'

function TodoForm(props) {
    
    //Traigo el input del form
    const [input, setInput] = useState(props.edit ? props.edit.value : '');

    //El campo del imput esta siempre en foco
    const inputRef = useRef(null)
    useEffect(() => {
        inputRef.current.focus();
    })

    const handleChange = e => {
        setInput(e.target.value)
    }

    //Hacer click en agregar tarea
    const handleSubmit = e => {
        e.preventDefault();

        //Genero un id random para cada tarea nueva
        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        })
        setInput('')    
        
        

    }

    return (
        <form className='todo-form' onSubmit={handleSubmit}>
            {props.edit ? 
            (
                <>
                    <input type="text"
                        placeholder='Modificar actividad'
                        value={input}
                        name='text'
                        className='todo-input'
                        onChange={handleChange}
                        ref={inputRef} />
                    <button className='todo-button'>Actualizar</button>
                </>
            ) :
                (
                    <>
                        <input type="text"
                            placeholder='Ingrese actividad'
                            value={input}
                            name='text'
                            className='todo-input'
                            onChange={handleChange}
                            ref={inputRef} />
                        <button className='todo-button'>Agregar una actividad</button> 
                </>) }

        </form>
    )
}

export default TodoForm

