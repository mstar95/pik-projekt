export const userListFetchStart = () => {
  return {
    type: 'USER_LIST_FETCH_START'
  }
}

export const userListFetchSuccess = (tests) => {
  return {
    type: 'USER_LIST_FETCH_SUCCESS',
    tests
  }
}

export const userListFetchFail = () => {
  return {
    type: 'USER_LIST_FETCH_FAIL'
  }
}
