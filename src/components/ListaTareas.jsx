import React, {useState} from 'react'
import ListaForm from './ListaForm'
import Tarea from './Tarea';

function ListaTareas() {
    const [tareas, setTareas] = useState([])

    const agregarTarea = tarea =>{
        if(!tarea.text || /^\s*$/.test(tarea.text)){
            return;
        }

        const nuevaTarea = [tarea, ...tareas];
        setTareas(nuevaTarea);
        console.log(tarea, ...tareas)
    }

    const editarTarea = (tareaId, nuevoValue) =>{
        if(!nuevoValue.text || /^\s*$/.test(nuevoValue.text)){
            return;
        }
         
        setTareas(prev => prev.map(item => item.id === tareaId ? nuevoValue : item))

    }

    const borrarTarea = id =>{
        const borrarArr = [...tareas].filter(tarea => tarea.id !== id)

        setTareas(borrarArr)
    }



    const completeTarea = id =>{
        let updatedTareas = tareas.map(tarea =>{
            if(tarea.id === id){
                tarea.isComplete = !tarea.isComplete
            }
            return tarea
        })

        setTareas(updatedTareas);
    }

    return (
        <div>
            <h1>¿Qué tareas tenes planeado hacer por hoy?</h1>
            <ListaForm onSubmit={agregarTarea}/>
            <Tarea tareas={tareas} completeTarea={completeTarea} borrarTarea={borrarTarea} editarTarea={editarTarea} />
        </div>
    )
}

export default ListaTareas
