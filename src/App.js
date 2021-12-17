import React, { useState } from 'react'

import Tasks from './components/Tasks'
import NewTask from './components/NewTask'

import './App.css'

const DUMMY_TASKS = [
	{
		id: 1,
		description: 'Hang laudry',
		completed: false,
	},
	{
		id: 2,
		description: 'Cook launch',
		completed: false,
	},
	{
		id: 3,
		description: 'Get a job in Allegro',
		completed: false,
	},
	{
		id: 4,
		description: 'Clean the shoes',
		completed: false,
	},
	{
		id: 5,
		description: 'Wash the car',
		completed: false,
	},
	{
		id: 6,
		description: 'Play with my son',
		completed: false,
	},
	{
		id: 7,
		description: 'Go out with the dogs',
		completed: false,
	}
]

function App() {
	const [tasks, setTask] = useState(DUMMY_TASKS)
	const [isAdding, setIsAdding] = useState(false)

	const addTaskHandler = task => {
		setTask(prevState => {
			const updatedTasks = [...prevState]
			updatedTasks.unshift(task)
			return updatedTasks
		})
	}

	const deleteTaskHandler = taskId => {
		setTask(prevState => {
			const updatedTasks = prevState.filter(task => task.id !== taskId)
			return updatedTasks
		})
	}

	const isDoneTaskHandler = taskId => {
		setTask(prevState => {
			const updatedTasks = prevState.map(task => ({
				id: task.id,
				description: task.description,
				completed: task.id === taskId ? task.completed = !task.completed : task.completed,
			}))
			return updatedTasks
		})
	}

	
	const startEditingHandler = () => {
		setIsAdding(true)
	}

	const stopEditingHandler = () => {
		setIsAdding(false)
	}

	return (
		<div className='app'>
			<Tasks items={tasks} onDeleteItem={deleteTaskHandler} onIsDoneItem={isDoneTaskHandler}/>

			<button className='new-task__buton' onClick={startEditingHandler}>Add new task</button>

			{isAdding && <NewTask onSaveData={addTaskHandler} onCancel={stopEditingHandler}/>}
		</div>
	)
}

export default App
