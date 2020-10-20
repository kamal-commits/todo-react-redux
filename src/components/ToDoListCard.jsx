import React from 'react'
import { Box, makeStyles } from '@material-ui/core'
import ToDoActionButton from './ToDoActionButton'
import ToDoContent from './ToDoContent'

const useStyles = makeStyles((theme) => ({
	unfinishedTask: {
		backgroundColor: '#ffffff',
		borderRadius: '7px'
	},
	finishedTask: {
		backgroundColor: '#FF3031',
		borderRadius: '7px',
		color: '#ffffff',
		textDecoration: 'line-through'
	},
	dateStyle: {
		display: 'flex',
		justifyContent: 'center',
		paddingBottom: '10px'
	}
}))

const ToDoListCard = ({ Todos, completed }) => {
	const formattedDate = Todos.date
		.toLocaleDateString('en-GB', {
			day: 'numeric',
			month: 'short',
			year: 'numeric'
		})
		.replace(/ /g, '-')
	const classes = useStyles()

	return (
		<div
			className={completed === true ? classes.finishedTask : classes.unfinishedTask}
		>
			<ToDoActionButton TodoId={Todos.id} />
			<ToDoContent content={Todos.todo} ToDoId={Todos.id} />
			<Box className={classes.dateStyle}>{formattedDate}</Box>
		</div>
	)
}

export default ToDoListCard
