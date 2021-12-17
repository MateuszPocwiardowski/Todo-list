import React from 'react'

import './Task.css'

import { faPencilAlt, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Task = props => {
	const taskClassName = props.completed === true ? 'task__description task__description--done' : 'task__description'

	const deleteHandler = () => {
		props.onDelete(props.id)
	}

	const isDoneHandler = () => {
		props.onIsDone(props.id)
	}

	return (
		<div className='task'>
			<button className={taskClassName} onClick={isDoneHandler}>{props.description}</button>
			<div className='task__panel'>
				<button className='task__panel--edit'>
					<FontAwesomeIcon icon={faPencilAlt} />
				</button>
				<button className='task__panel--remove' onClick={deleteHandler}>
					<FontAwesomeIcon icon={faTrashAlt} />
				</button>
			</div>
		</div>
	)
}

export default Task
