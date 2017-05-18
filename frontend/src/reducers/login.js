const defaultState = {
  loggedIn: false,
  failed: false
}

const login = (state = defaultState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        loggedIn: true,
        failed: false
      }
    case 'LOGIN_FAIL':
      return {
        loggedIn: false,
        failed: true
      }
    case 'LOGOUT':
      return {
        loggedIn: false
      }
    default:
      return state
  }
}

export default login;
