import { useState } from 'react'
import { faSave } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './RenameTask.css'

const RenameTask = ({ id, description, onSave, onEdit }) => {
	const [input, setInput] = useState(description)

	const handleChangeDesc = e => {
		setInput(e.target.value)
	}

	const handleSaveChange = e => {
		e.preventDefault()
		onEdit(input)
		onSave(id, input)
	}

	return (
		<form className='rename-task'>
			<input className='rename-task__input' type='text' value={input} onChange={handleChangeDesc} />
			<button className='rename-task__button' type='submit' onClick={handleSaveChange}>
				<FontAwesomeIcon icon={faSave} />
			</button>
		</form>
	)
}

export default RenameTask
