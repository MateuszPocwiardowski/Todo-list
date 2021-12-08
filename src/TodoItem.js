import React, { useState } from 'react'

import './TodoItem.css'

import { faPencilAlt, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const TodoItem = props => {
	const [isDone, setDone] = useState(null)

	const doneItemHandler = () => {
		setDone(!isDone)
	}

	return (
		<div className='todo-item'>
			<button className='todo-item__task' onClick={doneItemHandler}>
				<p className={isDone ? 'todo-item__task--done' : null}>{props.description}</p>
			</button>
			<div className='todo-item__panel'>
				<button className='todo-item__panel--edit'>
					<FontAwesomeIcon icon={faPencilAlt} />
				</button>
				<button className='todo-item__panel--delete'>
					<FontAwesomeIcon icon={faTrashAlt} />
				</button>
			</div>
		</div>
	)
}

export default TodoItem
