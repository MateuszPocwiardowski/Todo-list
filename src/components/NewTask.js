import { useState } from 'react'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './NewTask.css'

const NewTask = ({ newId, onSaveData }) => {
	const [newQuote, setNewQuote] = useState('')

	const changeQuoteHandler = e => {
		setNewQuote(e.target.value)
	}

	const saveQuote = e => {
		e.preventDefault()
		const validationResult = validateNewQuote()

		if (validationResult) {
			onSaveData({ id: newId, quote: newQuote, completed: false })
			setNewQuote('')
		}
	}

	const validateNewQuote = () => {
		if (newQuote.length === 0) {
			return false
		} else {
			return true
		}
	}

	return (
		<form className='new-task' onSubmit={saveQuote}>
			<input
				className='new-task__input'
				type='text'
				placeholder='What you need to do?'
				value={newQuote}
				onChange={changeQuoteHandler}
			/>

			<button className='new-task__button' type='submit'>
				<FontAwesomeIcon icon={faPlus} />
			</button>
		</form>
	)
}

export default NewTask
