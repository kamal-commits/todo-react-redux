import React from 'react'
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'
import DoneAllIcon from '@material-ui/icons/DoneAll'
import { Box } from '@material-ui/core'
import Icon from './Icon'

const ToDoActionButton = ({ TodoId, update }) => {
	return (
		<Box display='flex' justifyContent='flex-end'>
			{update ? null : <Icon icon={<EditIcon />} action='Edit' id={TodoId} />}
			<Icon icon={<DeleteIcon />} action='Delete' id={TodoId} />
			<Icon icon={<DoneAllIcon />} action='Mark' id={TodoId} />
		</Box>
	)
}

export default ToDoActionButton
