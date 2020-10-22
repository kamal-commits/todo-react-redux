import { Box, Input } from '@material-ui/core'
import React, { useState } from 'react'
import BackupIcon from '@material-ui/icons/Backup'
import Icon from './Icon'
const EditTodo = ({ TodoId, value, update }) => {
	const [newTodo, setNewTodo] = useState('')
	return (
		<React.Fragment>
			{!update ? (
				<Box display='flex'>
					<Input defaultValue={value} onChange={(e) => setNewTodo(e.target.value)} />
					<Icon icon={<BackupIcon />} action='Update' id={TodoId} data={newTodo} />
				</Box>
			) : null}
		</React.Fragment>
	)
}

export default EditTodo
