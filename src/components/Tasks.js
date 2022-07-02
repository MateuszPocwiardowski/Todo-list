import React from 'react'

import Task from './Task'
import Summary from './Summary'

import './Tasks.css'

const Tasks = ({ items, onEditItem, onIsDoneItem, onDeleteItem }) => {
	
	const doneTaskArray = items.filter(task => {
		return task.completed === true
	})
	
	let doneTasks = doneTaskArray.length

	return (
		<div className='tasks'>
			<span className='tasks__heading'>Your todo list</span>
			<div className='tasks__separator'></div>
			{items.length === 0 && <p>No tasks found.</p>}
			{items.length > 0 && (
				<div className='tasks__list'>
					{items.map(task => (
						<Task
							key={task.id}
							description={task.description}
							completed={task.completed}
							id={task.id}
							onEditItem={onEditItem}
							onIsDone={onIsDoneItem}
							onDelete={onDeleteItem}
						/>
					))}
				</div>
			)}
			<Summary amountDoneTasks={doneTasks} amountTasks={items.length} />
		</div>
	)
}

export default Tasks
