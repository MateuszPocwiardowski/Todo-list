import React from 'react'

import Task from './Task'
import Summary from './Summary'

import './Tasks.css'

const Tasks = props => {
	let doneTasks = 0

	props.items.forEach(task => {
		if (task.completed === true) {
			doneTasks += 1
		}
	})

	return (
		<div className='tasks'>
			<span className='tasks__heading'>Your todo list</span>
			<div className='tasks__separator'></div>
			<div className='tasks__list'>
				{props.items.map(task => (
					<Task
						key={task.id}
						description={task.description}
						completed={task.completed}
						id={task.id}
						onDelete={props.onDeleteItem}
						onIsDone={props.onIsDoneItem}
					/>
				))}
			</div>
			<Summary amountDoneTasks={doneTasks} amountTasks={props.items.length} />
		</div>
	)
}

export default Tasks
