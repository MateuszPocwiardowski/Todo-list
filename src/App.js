import React, { useState } from 'react'

import Tasks from './components/Tasks'
import NewTask from './components/NewTask'

import './App.css'

const DUMMY_TASKS = [
	{
		id: 1,
		description: 'Wyrzucić śmieci',
		status: false,
	},
	{
		id: 2,
		description: 'Wytrzeć naczynia',
		status: true,
	},
	{
		id: 3,
		description: 'Zrobić zakupy',
		status: false,
	},
	{
		id: 4,
		description: 'Skosić trawe',
		status: true,
	},
]

function App() {
	const [tasks, setTask, removeTask] = useState(DUMMY_TASKS)
	// const [tasks, removeTask] = useState(DUMMY_TASKS)

	const addTaskHandler = task => {
		setTask(prevTasks => {
			return [task, ...prevTasks]
		})
	}

	const removeTaskHandler = task => {
		removeTask(prevTasks => {
			return [...prevTasks].remove[task]
		})
	}

	return (
		<div>
			<Tasks items={tasks} onRemoveTask={removeTaskHandler}/>
			<NewTask onSaveData={addTaskHandler} />
		</div>
	)
}

export default App
