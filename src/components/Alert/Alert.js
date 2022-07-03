import { useEffect, useState } from 'react'
import './Alert.css'

const Alert = ({ trigger, children }) => {
	const [alertIsShown, setAlertIsShown] = useState(false)
    
	useEffect(() => {
		setAlertIsShown(true)

		const timeout = setTimeout(() => {
			setAlertIsShown(false)
		}, 2000)

		return () => clearTimeout(timeout)
	}, [trigger])

	return (
		<div className={alertIsShown ? 'alert' : 'alert--hidden'}>
			<div className='alert__disclaimer'>
				{children}
			</div>
		</div>
	)
}

export default Alert
