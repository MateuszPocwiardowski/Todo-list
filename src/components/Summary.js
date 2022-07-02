import React from 'react'

import './Summary.css'

const Summary = props => {
	let barFillWidth = '0%'

    barFillWidth = Math.round((props.amountDoneTasks / props.amountTasks) * 100) + '%'

	return (
		<div className='summary'>
			<div className='summary__bar-inner'>
				<div className='summary__bar-fill' style={{width: barFillWidth }}></div>
			</div>
			<div className='summary__span'>
				<span>Done: </span>
                <span className='summary__span--amount'>{props.amountDoneTasks}</span>
                <span> from </span>
                <span className='summary__span--amount'>{props.amountTasks}</span>
			</div>
		</div>
	)
}

export default Summary
