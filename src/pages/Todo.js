import { Box, Grid, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import ToDoForm from '../components/ToDoForm'
import ToDoList from '../components/ToDoList'
import VisiblityFilter from '../components/VisiblityFilter'
const useStyles = makeStyles((theme) => ({
	root: {
		padding: '0px 15px'
	},
	todoFormStyle: {
		display: 'flex',
		justifyContent: 'center'
	},
	buttonStyles: {
		display: 'flex',
		alignItems: 'center',
		paddingTop: '10px',
		justifyContent: 'center'
	},
	typographyStyle: {
		color: '#ffffff',
		textAlign: 'center',
		fontSize: '49px',
		fontWeight: 'bold',
		textDecoration: 'underline',
		paddingTop: '10px',
		[theme.breakpoints.down('sm')]: {
			fontSize: '30px'
		}
	}
}))

const Todo = () => {
	const classes = useStyles()
	return (
		<Box>
			<Typography className={classes.typographyStyle}> TODO APP </Typography>
			<Grid container className={classes.root}>
				<Grid item xs={12} lg={4} className={classes.buttonStyles}>
					<VisiblityFilter />
				</Grid>
				<Grid item xs={12} lg={4} className={classes.todoFormStyle}>
					<ToDoForm />
				</Grid>
				<Grid item lg={4} />
				<ToDoList />
			</Grid>
		</Box>
	)
}

export default Todo
