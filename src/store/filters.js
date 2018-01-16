const ADD_ACTIVE_FILTER = 'ADD_ACTIVE_FILTER';
const DELETE_ACTIVE_FILTER = 'DELETE_ACTIVE_FILTER';

const initialState = {
  activeFilters: [],

  // List of possible filters for buttons
  // Could be created using a Set for unique elements
  // Axios request from a database looking at each chart category list
  filters: ['BTC', 'USD', 'Avg', '#', 'MB', 'Time', 'Per BTC', 'Total BTC', 'Total Blocks', 'Per Block', 'Block']
}

export const addActiveFilter = (filterName) => {

  console.log('+1', filterName);
  return {
    type: ADD_ACTIVE_FILTER,
    filterName
  }
}

export const deleteActiveFilter = (filterName) => {
  console.log('-1');
  return {
    type: DELETE_ACTIVE_FILTER,
    filterName
  }
}

export function filtersReducer(state = initialState, action) {
  console.log('state active filters are ', state.activeFilters);
  switch (action.type) {
    case ADD_ACTIVE_FILTER:
      return Object.assign({}, state, { activeFilters: state.activeFilters.concat(action.filterName) });
    case DELETE_ACTIVE_FILTER:
      return Object.assign({}, state, { activeFilters: state.activeFilters.filter((name) => name !== action.filterName) });
    default:
      return state;
  }
}

export default { filtersReducer };