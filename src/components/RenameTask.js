import { useState } from 'react'
import { faSave } from '@fortawesome/free-solid-svg-icons'
import Popup from './Popup/Popup'

const RenameTask = ({ editingTask, onEditData }) => {
	const [changedTask, setChangeInTask] = useState(editingTask)

	const changeQuoteHandler = e => {
		setChangeInTask({
			id: changedTask.id,
			quote: e.target.value,
			completed: changedTask.completed,
		})
	}

	const handleSaveChange = e => {
		e.preventDefault()
		onEditData(changedTask)
	}

	return (
		<Popup
			icon={faSave}
			placeholder={null}
			inputValue={changedTask.quote}
			inputOnChange={changeQuoteHandler}
			buttonOnClick={handleSaveChange}
		/>
	)
}

export default RenameTask
