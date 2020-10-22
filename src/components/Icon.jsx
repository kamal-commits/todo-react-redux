import { IconButton, Tooltip } from '@material-ui/core'
import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteTodo, editTodo, toggleTodo, updateTodo } from '../redux/todoActions'

const Icon = ({ icon, id, action, data }) => {
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

	const updateTheTodo = (id, data) => {
		dispatch(updateTodo(id, data))
	}
	const actionTodo = () => {
		if (action === 'Edit') {
			return editTheTodo(id)
		} else if (action === 'Delete') {
			return deleteTheTodo(id)
		} else if (action === 'Mark') {
			return toggleTheTodo(id)
		} else if (action === 'Update') {
			return updateTheTodo(id, data)
		}
	}
	return (
		<Tooltip title={action} arrow>
			<IconButton color='inherit' onClick={() => actionTodo()}>
				{icon}
			</IconButton>
		</Tooltip>
	)
}

export default Icon
