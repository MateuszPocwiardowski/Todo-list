import { useState } from 'react'

import Tasks from './components/Tasks'
import NewTask from './components/NewTask'
import RenameTask from './components/RenameTask'

import './App.css'

const DUMMY_TASKS = [
	{
		id: 1,
		quote: 'Hang laudry',
		completed: false,
	},
	{
		id: 2,
		quote: 'Cook launch',
		completed: false,
	},
	{
		id: 3,
		quote: 'Get a job in Allegro',
		completed: false,
	},
	{
		id: 4,
		quote: 'Clean the shoes',
		completed: false,
	},
	{
		id: 5,
		quote: 'Wash the car',
		completed: false,
	},
	{
		id: 6,
		quote: 'Play with my son',
		completed: false,
	},
	{
		id: 7,
		quote: 'Go out with the dogs',
		completed: false,
	},
]

function App() {
	const [tasks, setTask] = useState(DUMMY_TASKS)
	const [newId, setNewId] = useState(DUMMY_TASKS.length + 1)
	const [isAdding, setIsAdding] = useState(false)
	const [isEditing, setIsEditing] = useState(false)
	const [editingTask, setEditingTask] = useState(null)

	window.addEventListener('keydown', e => {
		if (e.key === 'Escape') {
			setIsAdding(false)
			setIsEditing(false)
		}
	})

	const addTaskHandler = newTaskData => {
		setNewId(prevState => {
			return prevState + 1
		})

		setTask(prevState => {
			const updatedTasks = [...prevState]
			updatedTasks.unshift(newTaskData)
			return updatedTasks
		})

		setIsAdding(false)
	}

	const deleteTaskHandler = id => {
		setTask(prevState => {
			const updatedTasks = prevState.filter(task => task.id !== id)
			return updatedTasks
		})
	}

	const completeTaskHandler = id => {
		setTask(prevState => {
			const updatedTasks = prevState.map(task => ({
				id: task.id,
				quote: task.quote,
				completed: task.id === id ? !task.completed : task.completed,
			}))
			return updatedTasks
		})
	}

	const editTaskHandler = editedTask => {
		setTask(prevState => {
			const updatedTasks = prevState.map(task => ({
				id: task.id,
				quote: task.id === editedTask.id ? editedTask.quote : task.quote,
				completed: task.completed,
			}))
			return updatedTasks
		})

		setIsEditing(false)
	}

	return (
		<div className='app'>
			<Tasks
				tasks={tasks}
				onCompleteTask={completeTaskHandler}
				onDeleteTask={deleteTaskHandler}
				onAddTask={() => {
					setIsEditing(false)
					setIsAdding(true)
				}}
				onEditTask={(id, quote, completed) => {
					setIsAdding(false)
					setIsEditing(true)
					setEditingTask({
						id: id,
						quote: quote,
						completed: completed,
					})
				}}
			/>

			{isAdding && <NewTask newId={newId} onSaveData={addTaskHandler} />}
			{isEditing && <RenameTask editingTask={editingTask} onEditData={editTaskHandler} />}
		</div>
	)
}

export default App
