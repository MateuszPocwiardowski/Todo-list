import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './Popup.css'

const NewTask = ({ icon, inputPlaceholder, placeholderStyle, inputValue, inputOnChange, buttonOnClick }) => {
	return (
		<form className='popup'>
			<input
				className={placeholderStyle === 'warning' ? 'popup__input popup__input--warning' : 'popup__input'}
				type='text'
				placeholder={inputPlaceholder}
				value={inputValue}
				onChange={inputOnChange}
			/>

			<button className='popup__button' type='submit' onClick={buttonOnClick}>
				<FontAwesomeIcon icon={icon} />
			</button>
		</form>
	)
}

export default NewTask
