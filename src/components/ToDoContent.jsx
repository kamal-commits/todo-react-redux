import React from 'react'
import { Box, makeStyles, Typography } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		flexGrow: 1,
		alignItems: 'center',
		padding: '10px 0px 20px 9px'
	},
	todoItemStyle: {
		fontStyle: 'italic',
		paddingLeft: '7px'
	}
}))

const ToDoContent = ({ content, ToDoId }) => {
	const classes = useStyles()

	return (
		<Box className={classes.root}>
			<Typography style={{ fontWeight: 'bold' }}> {ToDoId}) </Typography>
			<Typography className={classes.todoItemStyle}> {content} </Typography>
		</Box>
	)
}

export default ToDoContent
