import React from 'react'

import './Tasks.css'

import Task from './Task'

const Tasks = props => {

	return (
		<div className='tasks'>
			<div className='tasks__heading'>Your todo list</div>
			<div className='tasks__separator'></div>
			<div className='tasks__list'>
				{props.items.map(task => (
					<Task key={task.id} description={task.description} status={task.status} />
				))}
			</div>
		</div>
	)
}

export default Tasks
