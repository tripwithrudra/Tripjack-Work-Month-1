import React, { Component } from 'react'

export class EditTodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            task: ""
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.editTask(this.state.task, this.props.task.id)
    }

    render() {
        return (
            <form className='todo__edit__form' onSubmit={this.handleSubmit}>
                <input pattern='[?:a-z?:A-Z?0-9]{3,}' required type='text' className='todo__edit__input' value={this.state.task} placeholder='Update Task' onChange={(e) => this.setState({task: e.target.value})} />
                <button type='submit' className='todo__edit__btn'>Update Task</button>
            </form>
        )
    }
}

export default EditTodoForm