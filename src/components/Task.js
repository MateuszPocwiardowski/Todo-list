import React from 'react'

import './Task.css'

import { faPencilAlt, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Task = ({ id, quote, completed, onComplete, onDelete, onEdit }) => {
	const taskClassName = completed === true ? 'task__description task__description--done' : 'task__description'

	const completeHandler = () => {
		onComplete(id)
	}

	const deleteHandler = () => {
		onDelete(id)
	}

	const editHandler = () => {
		onEdit(id, quote, completed)
	}

	return (
		<div className='task'>
			<button className={taskClassName} onClick={completeHandler}>
				{quote}
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
