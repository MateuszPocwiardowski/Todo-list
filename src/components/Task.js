import React from 'react'

import './Task.css'

import { faPencilAlt, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Task = ({ id, description, completed, onIsDone, onEditItem, onDelete }) => {
	const taskClassName = completed === true ? 'task__description task__description--done' : 'task__description'

	const isDoneHandler = () => {
		onIsDone(id)
	}

	const editHandler = () => {
		onEditItem(id, description)
	}

	const deleteHandler = () => {
		onDelete(id)
	}

	return (
		<div className='task'>
			<button className={taskClassName} onClick={isDoneHandler}>
				{description}
			</button>
			<div className='task__panel'>
				<button className='task__panel--edit' onClick={editHandler}>
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
