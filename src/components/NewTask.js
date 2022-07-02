import { useState } from 'react'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import Popup from './Popup/Popup'

const NewTask = ({ newId, onSaveData }) => {
	const [newQuote, setNewQuote] = useState('')
	const [warning, setWarning] = useState('')

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
			setWarning("Quote shouldn't be empty!")
			return false
		} else {
			return true
		}
	}

	return (
		<Popup
			icon={faPlus}
			inputPlaceholder={warning.length === 0 ? 'What do you need to do?' : warning}
			placeholderStyle={warning.length === 0 ? 'normal' : 'warning'}
			inputValue={newQuote}
			inputOnChange={changeQuoteHandler}
			buttonOnClick={saveQuote}
		/>
	)
}

export default NewTask
