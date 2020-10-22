const initialState = { todo: [], loading: true }
export default (state = initialState, action) => {
	switch (action.type) {
		case 'ADD_TODO':
			return {
				...state,
				todo: [...state.todo, action.payload],
				loading: false
			}

		case 'DELETE_TODO':
			return {
				...state,
				todo: state.todo.filter((todo) => todo.id !== action.payload),
				loading: false
			}

		case 'EDIT_TODO':
			return {
				...state,
				todo: state.todo.filter((todo) =>
					todo.id === action.payload ? { ...todo, update: true } : todo
		case 'UPDATE_TODO':
			return {
				...state,
				todo: state.todo.map((todo) =>
					todo.id === action.id
						? { ...todo, update: !todo.update, todo: action.todo }
						: todo
				),
				loading: false
			}

		case 'TOGGLE_TODO':
			return {
				...state,
				todo: state.todo.map((todo) =>
					todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
				),
				loading: false
			}

		default:
			return state
	}
}
