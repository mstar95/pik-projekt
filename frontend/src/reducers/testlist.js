const defaultState = {
  loading: true,
  error: false
}

const test = (state = defaultState, action) => {
  switch (action.type) {
    case 'TEST_LIST_FETCH_START':
      return defaultState;
    case 'TEST_LIST_FETCH_SUCCESS':
      return {
        loading: false,
        error: false,
        tests: action.tests
      }
    case 'TEST_LIST_FETCH_FAIL':
      return {
        loading: false,
        error: true
      }
    default:
      return state
  }
}

export default test;
