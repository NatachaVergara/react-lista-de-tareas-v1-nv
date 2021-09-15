import React, { useState } from 'react'
import ListaForm from './ListaForm'
import { RiCloseCircleLine} from 'react-icons/ri'
import { TiEdit } from 'react-icons/ti'




function Tarea({tareas, completeTarea, borrarTarea, updateTarea}) {
    const [editar, setEditar] = useState({
        id: null,
        value: ''
    })

    const submitUpdate = value => {
        updateTarea(editar.id, value)
        setEditar({
            id: null,
            value: ''
        })
    }
    

    if (editar.id){        
        return <ListaForm editar={editar} onSubmit={submitUpdate} />
    }

    return tareas.map((tarea, index) => (
        <div className={tarea.isComplete ? 'lista-row complete' : 'lista-row'}
            key={index}
        >
            <div key={tarea.id} onClick={() => completeTarea(tarea.id)}>

                {tarea.text}
        </div>
            <div className='icons'>
                <RiCloseCircleLine onClick={() => borrarTarea(tarea.id)}
                className='delete-icon'/>
                <TiEdit onClick={() => setEditar({
                    id: tarea.id, value: tarea.text
                })}
                className='edit-icon'/>
            </div>

        </div>

    ))







}

export default Tarea


