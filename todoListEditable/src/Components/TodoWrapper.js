import React, { Component } from 'react'
import TodoForm from './TodoForm'
import { v4 as uuidv4 } from 'uuid';
import Todo from './Todo';
import EditTodoForm from './EditTodoForm';

class TodoWrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: []
        }

    }
    addTask = (todo) => {
        this.setState({
            tasks: [...this.state.tasks, { id: uuidv4(), task: todo, completed: false, isEditing: false }],
        })
    }

    toggleComplete = (id) => {
        this.setState({
            tasks: this.state.tasks.map(todo => {
                return todo.id === id ? { ...todo, completed: !todo.completed } : todo
            })
        })
    }

    deleteTask = (id) => {
        this.setState({
            tasks: this.state.tasks.filter(todo => todo.id !== id)
        })
    }

    toggleEditing = (id) => {
        this.setState({
            tasks: this.state.tasks.map(todo => todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo)
        })
    }

    editTask = (task, id) => {
        this.setState({
            tasks: this.state.tasks.map(todo => todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo)
        })
    }


    render() {
        return (
            <div className='todo__wrapper'>
                <h1 className='todo__wrapper__heading'>Be Fast!</h1>

                <TodoForm addTask={this.addTask} />

                {
                    this.state.tasks.map((todo, index) =>
                        todo.isEditing ?
                            <EditTodoForm editTask={this.editTask} task={todo} />
                            : <Todo todo={todo} key={index} toggleComplete={this.toggleComplete} deleteTask={this.deleteTask} toggleEditing={this.toggleEditing} />
                    )
                }


            </div>
        )
    }
}

export default TodoWrapper