let toDoId = 0
export const addTodo = (todo) => (dispatch) => {
	dispatch({
		type: 'ADD_TODO',
		payload: {
			id: ++toDoId,
			todo,
			date: new Date(),
			completed: false
		}
	})
}

export const setVisiblityFilter = (filter) => (dispatch) => {
	dispatch({
		type: 'SET_VISIBLITY_FILTER',
		filter
	})
}

export const toggleTodo = (id) => (dispatch) => {
	dispatch({
		type: 'TOGGLE_TODO',
		payload: id
	})
}

export const deleteTodo = (id) => (dispatch) => {
	dispatch({
		type: 'DELETE_TODO',
		payload: id
	})
}

export const editTodo = (id) => (dispatch) => {
	dispatch({
		type: 'EDIT_TODO',
		payload: id
	})
}

export const SHOW_ALL = 'ALL'
export const SHOW_COMPLETED = 'COMPLETED'
export const SHOW_ACTIVE = 'ACTIVE'
export const VisibilityFilters = { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE }
export const Filters = [SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE]
