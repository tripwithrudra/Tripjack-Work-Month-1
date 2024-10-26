import React, { useState } from 'react'

function TodoForm({addTask}) {
    const [task, setTask] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(task)
        setTask("")
    }
    return (
        <form className='todo__form' onSubmit={handleSubmit}>
            <input pattern='[?:a-z?:A-Z?0-9]{3,}' required type='text' className='todo__input' value={task} placeholder='Input Task' onChange={(e) => setTask(e.target.value)} />
            <button type='submit' className='todo__btn'>Add Task</button>
        </form>
    )
}

export default TodoForm;