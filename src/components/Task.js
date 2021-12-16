import React, { useState } from 'react'

import './Task.css'

import { faPencilAlt, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Task = props => {
	const taskClassName = props.status === true ? 'task__description task__description--done' : 'task__description'

	const onRemoveTask = task => {
		console.log(props.key)
	}

	return (
		<div className='task'>
			<button className={taskClassName}>{props.description}</button>
			<div className='task__panel'>
				<button className='task__panel--edit'>
					<FontAwesomeIcon icon={faPencilAlt} />
				</button>
				<button className='task__panel--remove' onClick={onRemoveTask}>
					<FontAwesomeIcon icon={faTrashAlt} />
				</button>
			</div>
		</div>
	)
}

export default Task
