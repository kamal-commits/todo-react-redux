import React, { useState } from 'react'
import { Box, IconButton, Input, makeStyles } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import { addTodo } from '../redux/todoActions'
import AddAlertIcon from '@material-ui/icons/AddAlert'

const useStyles = makeStyles((theme) => ({
	root: {
		backgroundColor: '#ffffff',
		marginTop: '20px',
		borderRadius: '7px',
		display: 'flex'
	}
}))

const ToDoForm = () => {
	const [todo, setTodo] = useState('')
	const classes = useStyles()
	const dispatch = useDispatch()

	const validation = () => {
		var check = /^[a-zA-Z ]*$/
		if (!todo.match(check)) {
			return alert('Enter Only Alphabets ')
		}
	}
	const handleAddTodo = () => {
		if (todo === '') {
			return alert('Please Enter Todo')
		}
		dispatch(addTodo(todo))
		setTodo('')
	}
	return (
		<Box className={classes.root}>
			<Input
				variant='outlined'
				placeholder='Enter Todo'
				fullWidth={true}
				onChange={(event) => setTodo(event.target.value)}
				value={todo}
				required
				onKeyPress={validation}
			/>
			<IconButton color='inherit' onClick={handleAddTodo}>
				<AddAlertIcon />
			</IconButton>
		</Box>
	)
}

export default ToDoForm
