import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect } from 'react'

function Todo({ todo, toggleComplete, deleteTask, toggleEditing }) {
    // console.log("Current Todo: ", todo)
    return (
        <div className='todo'>
            <p onClick={() => toggleComplete(todo.id)} className={`${todo.completed ? 'completed' : ''}`} id='single__todo'>{todo.task}</p>
            <div className='icons__container'>
                <FontAwesomeIcon className='edit__icon' onClick={() => toggleEditing(todo.id)} icon={faPenToSquare} />
                <FontAwesomeIcon className='delete__icon' onClick={() => deleteTask(todo.id)} icon={faTrash} />
            </div>
        </div>
    )
}

export default Todo