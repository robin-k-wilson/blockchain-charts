const ADD_ACTIVE_FILTER = 'ADD_ACTIVE_FILTER';
const DELETE_ACTIVE_FILTER = 'DELETE_ACTIVE_FILTER';

const initialState = {
  activeFilters: [],

  // List of possible filters for buttons
  // Could be created using a Set for unique elements
  // Axios request from a SQL database looking at each chart category list
  filters: ['BTC', 'USD', 'Avg', '#', 'MB', 'Time', 'Per BTC', 'Total BTC', 'Total Blocks', 'Per Block', 'Block']
}

export const addActiveFilter = (filterName) => {
  return {
    type: ADD_ACTIVE_FILTER,
    filterName
  }
}

export const deleteActiveFilter = (filterName) => {
  return {
    type: DELETE_ACTIVE_FILTER,
    filterName
  }
}

export function filtersReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ACTIVE_FILTER:
      return Object.assign({}, state, { activeFilters: activeFilters.concat([filter]) });
    default:
      return state;
  }
}

export default { filtersReducer };