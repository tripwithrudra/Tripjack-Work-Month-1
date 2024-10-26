import React, { Component } from 'react'

export class EditTodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTask: this.props.task
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.editTask(this.state.currentTask, this.props.task.id)
    }

    render() {
        return (
            <form className='todo__edit__form' onSubmit={this.handleSubmit}>
                <input pattern='[?:a-z?:A-Z?0-9]{3,}' required type='text' className='todo__edit__input' value={this.state.currentTask.task} placeholder='Update Task' onChange={(e) => this.setState({currentTask: e.target.value})} />
                <button type='submit' className='todo__edit__btn'>Update Task</button>
            </form>
        )
    }
}

export default EditTodoForm