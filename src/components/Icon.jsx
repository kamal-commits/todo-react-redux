import { IconButton } from '@material-ui/core'
import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteTodo, editTodo, toggleTodo } from '../redux/todoActions'

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
		if (action === 'edit') {
			return editTheTodo(id)
		} else if (action === 'delete') {
			return deleteTheTodo(id)
		} else if (action === 'done') {
			return toggleTheTodo(id)
		}
	}
	return (
		<IconButton color='inherit' onClick={() => actionTodo()}>
			{icon}
		</IconButton>
	)
}

export default Icon
