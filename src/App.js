import React from 'react'
import { Provider } from 'react-redux'
import Todo from './pages/Todo'
import { store } from './redux/store'
import { Box, makeStyles } from '@material-ui/core'
import './App.css'
const useStyles = makeStyles((theme) => ({
	root: {
		// height: '100%'
	}
}))

const App = () => {
	const classes = useStyles()
	return (
		<Provider store={store}>
			<Box className={classes.root}>
				<Todo />
			</Box>
		</Provider>
	)
}

export default App
