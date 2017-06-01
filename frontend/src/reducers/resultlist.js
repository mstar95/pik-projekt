const defaultState = {
  loading: true,
  error: false
}

const result = (state = defaultState, action) => {
  switch (action.type) {
    case 'RESULT_LIST_FETCH_START':
      return defaultState;
    case 'RESULT_LIST_FETCH_SUCCESS':
      return {
        loading: false,
        error: false,
        results: action.results
      }
    case 'RESULT_LIST_FETCH_FAIL':
      return {
        loading: false,
        error: true
      }
    default:
      return state
  }
}

export default result;
