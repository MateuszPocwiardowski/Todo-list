import React, { useState } from 'react'

import './NewTask.css'

import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const NewTask = props => {
	const [enteredDescription, setEnteredTask] = useState('')

	const taskChangeHandler = event => {
		setEnteredTask(event.target.value)
	}

	const submitHandler = event => {
		event.preventDefault()

		const taskData = {
			id: Math.random(),
			description: enteredDescription,
		}

		props.onSaveData(taskData)

		setEnteredTask('')
	}

	return (
		<form className='new-task' onSubmit={submitHandler}>
			<input
				className='new-task__input'
				type='text'
				placeholder='What you need to do?'
				value={enteredDescription}
				onChange={taskChangeHandler}></input>
			<button className='new-task__button' type='submit'>
				<FontAwesomeIcon icon={faPlus} />
			</button>
		</form>
	)
}

export default NewTask
