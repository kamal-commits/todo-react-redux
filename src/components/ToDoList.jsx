import { Grid, makeStyles } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
import { VisibilityFilters } from '../redux/todoActions'
import ToDoListCard from './ToDoListCard'
const useStyles = makeStyles((theme) => ({
	cardStyle: {
		padding: '10px'
	}
}))

const ToDoList = () => {
	const state = useSelector((state) => state.todoReducer)
	const visibilityFilter = useSelector((state) => state.visiblityReducer)
	const classes = useStyles()

	const todos =
		visibilityFilter === VisibilityFilters.SHOW_ALL
			? state.todo
			: visibilityFilter === VisibilityFilters.SHOW_COMPLETED
			? state.todo.filter((todo) => todo.completed)
			: state.todo.filter((todo) => !todo.completed)

	return (
		<Grid container className={classes.root}>
			{todos.length === 0 ? (
				<h1 style={{ color: '#ffffff' }}>NO TASK FOR TODAY</h1>
			) : (
				todos.map((item, index) => (
					<Grid
						item
						xs={12}
						sm={6}
						md={4}
						lg={3}
						key={index}
						className={classes.cardStyle}
					>
						<ToDoListCard
							Todos={item}
							completed={item.completed}
							update={item.update}
						/>
					</Grid>
				))
			)}
		</Grid>
	)
}

export default ToDoList
