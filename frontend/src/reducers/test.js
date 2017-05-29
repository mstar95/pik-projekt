const defaultState = {
  loading: true,
  error: false
}

const test = (state = defaultState, action) => {
  switch (action.type) {
    case 'TEST_FETCH_START':
      return defaultState;
    case 'TEST_FETCH_SUCCESS':
      return {
        loading: false,
        error: false,
        test: action.test
      }
    case 'TEST_FETCH_FAIL':
      return {
        loading: false,
        error: true
      }
    case 'TEST_RESULTS':
      return Object.assign({}, state, {
        results: action.results
      })
    default:
      return state
  }
}

export default test;
