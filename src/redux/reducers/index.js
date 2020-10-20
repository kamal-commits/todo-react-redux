import { combineReducers } from 'redux'
import reducer from './reducer'
import { visiblityFilter } from './visiblityFilter'

export default combineReducers({
	todoReducer: reducer,
	visiblityReducer: visiblityFilter
})
