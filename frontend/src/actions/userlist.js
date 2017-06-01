export const userListFetchStart = () => {
  return {
    type: 'USER_LIST_FETCH_START'
  }
}

export const userListFetchSuccess = (users) => {
  return {
    type: 'USER_LIST_FETCH_SUCCESS',
    users
  }
}

export const userListFetchFail = () => {
  return {
    type: 'USER_LIST_FETCH_FAIL'
  }
}
