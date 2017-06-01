const defaultState = {
  loading: true,
  error: false
}

const user = (state = defaultState, action) => {
  switch (action.type) {
    case 'USER_LIST_FETCH_START':
      return defaultState;
    case 'USER_LIST_FETCH_SUCCESS':
      return {
        loading: false,
        error: false,
        users: action.users
      }
    case 'USER_LIST_FETCH_FAIL':
      return {
        loading: false,
        error: true
      }
    default:
      return state
  }
}

export default user;
