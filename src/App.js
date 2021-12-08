import React, { useState } from 'react'

import './App.css'

import Heading from './Heading'
import TodoItem from './TodoItem'

const DUMMY_TASKS = [
	{
		id: 1,
		description: 'Zrobić Marcelowi mleko',
		status: false,
	},
	{
		id: 2,
		description: 'Umyć kuchnie',
		status: false,
	},
	{
		id: 3,
		description: 'Odkurzyć',
		status: false,
	},
	{
		id: 4,
		description: 'Wypić conajmniej 5 piwek i to w szybkim tempie',
		status: false,
	},
	{
		id: 5,
		description: 'Wypić conajmniej 5 piwek i to w szybkim tempie',
		status: false,
	},
]

function App() {
	const [tasks, setTasks] = useState(DUMMY_TASKS)

	return (
		<div className='app'>
			<Heading />
			<div className='todo-list'>
				{tasks.map(task => (
					<TodoItem className='todo-list__item' key={task.id} description={task.description} />
				))}
			</div>
		</div>
	)
}

export default App
