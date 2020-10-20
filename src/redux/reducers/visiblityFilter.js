import { VisibilityFilters } from '../todoActions'

export const visiblityFilter = (state = VisibilityFilters.SHOW_ALL, action) => {
	switch (action.type) {
		case 'SET_VISIBLITY_FILTER':
			return action.filter
		default:
			return state
	}
}
