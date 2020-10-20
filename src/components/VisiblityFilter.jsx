import React from 'react'
import { Filters } from '../redux/todoActions'
import FilterButton from './FilterButton'

const VisiblityFilter = () => {
	return Filters.map((filter, i) => <FilterButton filter={filter} key={i} />)
}

export default VisiblityFilter
