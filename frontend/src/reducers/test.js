const defaultState = {
  fetched: false,
  fetchFailed: false
}

const test = (state = defaultState, action) => {
  switch (action.type) {
    case 'TEST_FETCH_SUCCESS':
      return {
        fetched: true,
        fetchFailed: false,
        test: action.test
      }
    case 'TEST_FETCH_FAIL':
      return {
        fetched: false,
        fetchFailed: true
      }
    default:
      return state
  }
}

export default test;
