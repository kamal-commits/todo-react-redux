import { Button, makeStyles } from '@material-ui/core'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setVisiblityFilter } from '../redux/todoActions'

const useStyles = makeStyles((theme) => ({
	root: {
		marginLeft: '15px',
		display: 'flex'
	},
	activeLink: {
		backgroundColor: '#2B2B52'
	}
}))

const FilterButton = ({ filter, onClick }) => {
	const classes = useStyles()
	const dispatch = useDispatch()
	const activeFilter = useSelector((state) => state.visiblityReducer)
	const setTheFilter = (filter) => {
		dispatch(setVisiblityFilter(filter))
	}

	return (
		<React.Fragment>
			<Button
				variant='contained'
				color='secondary'
				onClick={() => setTheFilter(filter)}
				className={filter === activeFilter ? classes.activeLink : null}
			>
				{filter}
			</Button>
		</React.Fragment>
	)
}

export default FilterButton
