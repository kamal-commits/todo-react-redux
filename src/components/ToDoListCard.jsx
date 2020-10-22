import React from 'react'
import { Box, makeStyles } from '@material-ui/core'
import ToDoActionButton from './ToDoActionButton'
import ToDoContent from './ToDoContent'
import EditTodo from './EditTodo'

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

const ToDoListCard = ({ Todos, completed, editRequest, update }) => {
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
			<ToDoActionButton TodoId={Todos.id} update={update} />
			<ToDoContent content={Todos.todo} ToDoId={Todos.id} />
			{editRequest ? (
				<EditTodo value={Todos.todo} TodoId={Todos.id} update={update} />
			) : null}
			<Box className={classes.dateStyle}>{formattedDate}</Box>
		</div>
	)
}

export default ToDoListCard
