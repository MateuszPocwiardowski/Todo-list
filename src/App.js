import { useState } from 'react'

import Tasks from './components/Tasks'
import NewTask from './components/NewTask'
// import RenameTask from './components/RenameTask'

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
	const [newTaskPopupIsShown, setNewTaskShown] = useState(false)
	const [newId, setNewId] = useState(DUMMY_TASKS.length + 1)
	// const [isEditing, setIsEditing] = useState(false)
	// const [editingId, setEditingId] = useState(null)
	// const [editingDesc, setEditingDesc] = useState('')

	window.addEventListener('keydown', e => {
		if (e.key === 'Escape') {
			setNewTaskShown(false)
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

		closeNewTaskPopoverHandler()
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

	const addNewTaskHandler = () => {
		setNewTaskShown(true)
	}

	const closeNewTaskPopoverHandler = () => {
		setNewTaskShown(false)
	}

	// const startEditingHandler = (editingId, editingDescription) => {
	// 	setIsEditing(true)
	// 	setEditingId(editingId)
	// 	setEditingDesc(editingDescription)
	// }

	// const stopEditingHandler = (editingId, editingDesc) => {
	// 	console.log(editingId, editingDesc)

	// 	setTask(prevState => {
	// 		const updatedTasks = prevState.map(task => ({
	// 			id: task.id,
	// 			description: task.id === editingId ? editingDesc : task.description,
	// 			completed: task.completed,
	// 		}))
	// 		return updatedTasks
	// 	})
	// 	setIsEditing(false)
	// }

	return (
		<div className='app'>
			<Tasks
				tasks={tasks}
				onCompleteTask={completeTaskHandler}
				onDeleteTask={deleteTaskHandler}
				// onEditItem={startEditingHandler}
			/>

			<button className='new-task__buton' onClick={addNewTaskHandler}>
				Add new task
			</button>

			{newTaskPopupIsShown && <NewTask newId={newId} onSaveData={addTaskHandler} />}

			{/* {isEditing && (
				<RenameTask onSave={stopEditingHandler} onEdit={setEditingDesc} id={editingId} description={editingDesc} />
			)} */}
		</div>
	)
}

export default App
