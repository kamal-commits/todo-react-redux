import React from 'react'
import { useDispatch } from 'react-redux'

const Icon = ({ icon, id, action }) => {
	const dispatch = useDispatch()

	const deleteTheTodo = (id) => {
		dispatch(deleteTodo(id))
	}

	const toggleTheTodo = (id) => {
		dispatch(toggleTodo(id))
	}

	const editTheTodo = (id) => {
		dispatch(editTodo(id))
	}

	const actionTodo = () => {
		if (action === 'Edit') {
			return editTheTodo(id)
		} else if (action === 'Delete') {
			return deleteTheTodo(id)
		} else if (action === 'Mark') {
			return toggleTheTodo(id)
		}
	}
	return (
	<Tooltip title={action}>
		<IconButton color='inherit' onClick={() => actionTodo()}>
			{icon}
		</IconButton>
		</Tooltip>
	)
}

export default Icon
