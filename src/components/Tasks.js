import React from 'react'

import Task from './Task'
import Summary from './Summary'

import './Tasks.css'

const Tasks = ({ tasks, onAddTask, onCompleteTask, onDeleteTask, onEditTask }) => {
	const doneTaskArray = tasks.filter(task => {
		return task.completed === true
	})

	let doneTasks = doneTaskArray.length

	return (
		<div className='tasks'>
			<span className='tasks__heading'>Your todo list</span>
			<div className='tasks__separator' />

			{tasks.length === 0 && <p>No tasks found.</p>}

			{tasks.length > 0 && (
				<div className='tasks__list'>
					{tasks.map(task => (
						<Task
							key={task.id}
							id={task.id}
							quote={task.quote}
							completed={task.completed}
							onComplete={onCompleteTask}
							onDelete={onDeleteTask}
							onEdit={onEditTask}
						/>
					))}
				</div>
			)}

			<Summary amountDoneTasks={doneTasks} amountTasks={tasks.length} />

			<button className='new-task__buton' onClick={onAddTask}>
				Add new task
			</button>
		</div>
	)
}

export default Tasks
